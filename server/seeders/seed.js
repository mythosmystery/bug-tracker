const db = require('../config/connection');
const { User, Bug } = require('../models');
const seeds = require('./seeds.json');

db.once('open', async () => {
   try {
      await Bug.deleteMany({});
      await User.deleteMany({});
      await User.create(seeds);
      console.log('all done!');
      process.exit(0);
   } catch (err) {
      throw err;
   }
});
