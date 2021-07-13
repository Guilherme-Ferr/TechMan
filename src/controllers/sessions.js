const User = require("../models/Users");
const bcrypt = require("bcryptjs");

module.exports = {
  async store(req, res) {
    const { password } = req.body;

    try {
      const user = await User.findOne({
        where: {
          password,
        },
      });

      if (!user || !bcrypt.compareSync(password, user.password))
        return res.status(403).send({ error: "Usuário e/ou senha inválidos" });

      setTimeout(() => {
        res.status(201).send({
          user: {
            userId: user.id,
            userPassword: user.password,
          },
        });
      }, 3000);
    } catch (error) {
      console.log(error);
      res.status(500).send(error);
    }
  },
};
