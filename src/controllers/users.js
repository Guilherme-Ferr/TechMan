const User = require("../models/Users");
const bcrypt = require("bcryptjs");

module.exports = {
  async store(req, res) {
    const { email, password } = req.body;

    try {
      const User = await User.findOne({
        where: {
          email,
        },
      });

      if (!User || !bcrypt.compareSync(password, User.password))
        return res.status(403).send({ error: "Usuário e/ou senha inválidos" });

      setTimeout(() => {
        res.status(201).send({
          User: {
            UserId: User.id,
            name: User.name,
            ra: User.ra,
            email: User.email,
            image: User.image,
          },
          token,
        });
      }, 3000);
    } catch (error) {
      console.log(error);
      res.status(500).send(error);
    }
  },
};
