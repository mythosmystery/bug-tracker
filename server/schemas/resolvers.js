const { AuthenticationError } = require('apollo-server-express');
const { User, Bug } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
   Query: {
      bugs: async () => {
         return Bug.find().populate('reportedBy').sort({ date: -1 });
      },
      bug: async (parent, { bugId }) => {
         return Bug.findOne({ _id: bugId }).populate('reportedBy');
      },
      bugsByUser: async (parent, { userId }) => {
         return Bug.find({ reportedBy: userId }).populate('reportedBy');
      },
      bugsBySoftware: async (parent, { softwareTitle }) => {
         return Bug.find({ softwareTitle: { $regex: softwareTitle, $options: 'i' } })
            .populate('reportedBy')
            .sort({ date: -1 });
      },

      /////////////////////////

      users: async () => {
         return User.find().populate('bugs');
      },
      user: async (parent, { userId }) => {
         return User.findOne({ _id: userId }).populate('bugs');
      },
      me: async (parent, args, { user }) => {
         if (user) {
            return User.findOne({ _id: user._id }).populate('bugs');
         }
         throw new AuthenticationError('You need to be logged in');
      },
   },
   Mutation: {
      addBug: async (parent, { bug }, { user }) => {
         const newBug = await Bug.create({ ...bug, reportedBy: user._id });
         return await User.findOneAndUpdate({ _id: user._id }, { $addToSet: { bugs: newBug._id } }, { new: true }).populate('bugs');
      },
      updateBug: async (parent, { bug }, { user }) => {
         const updatedBug = await Bug.findOneAndUpdate({ _id: bug._id }, { ...bug }, { new: true }).populate('reportedBy');
         return await User.findOneAndUpdate({ _id: user._id }, { $addToSet: { bugs: updatedBug._id } }, { new: true }).populate('bugs');
      },
      removeBug: async (parent, { bugId }, { user }) => {
         try {
            await Bug.deleteOne({ _id: bugId });
            return await User.findOneAndUpdate({ _id: user._id }, { $pull: { bugs: bugId } }, { new: true }).populate('bugs');
         } catch (err) {
            return err;
         }
      },

      addUser: async (parent, { username, email, password }) => {
         const user = await User.create({ username, email, password });
         const token = signToken(user);
         return { token, user };
      },
      login: async (parent, { email, password }) => {
         const user = await User.findOne({ email }).populate('bugs');
         if (!user) {
            throw new AuthenticationError('No user found');
         }
         const correctPw = await user.isCorrectPassword(password);
         if (!correctPw) {
            throw new AuthenticationError('Incorrect password');
         }
         const token = signToken(user);
         return { token, user };
      },
   },
};
module.exports = resolvers;
