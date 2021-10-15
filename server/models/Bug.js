const { Schema, model } = require('mongoose');
const bugSchema = new Schema({
   description: {
      type: String,
   },
   replicate: {
      type: String,
   },
   errorMessage: {
      type: String,
   },
   softwareTitle: {
      type: String,
   },
   version: {
      type: String,
   },
   status: {
      type: String,
   },
   date: {
      type: Date,
      default: Date.now,
   },
   reportedBy: {
      type: Schema.Types.ObjectId,
      ref: 'User',
   },
});
const Bug = model('Bug', bugSchema);
module.exports = Bug;
