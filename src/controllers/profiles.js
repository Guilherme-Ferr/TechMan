const Profile = require("../models/Profiles");

module.exports = {
  async index(res) {
    try {
      const profile = await Profile.findAll();

      res.send(profile);
    } catch (error) {
      console.log(error);
      res.status(500).send(error);
    }
  },
};
