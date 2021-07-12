const { Op } = require("sequelize");
const Comments = require("../models/Comments");
const Equipaments = require("../models/Equipaments");
const Profiles = require("../models/Profiles");

module.exports = {
  async index(req, res) {
    const { search } = req.query;

    try {
      const comments = await Comments.findAll({
        attributes: ["id", "comment", "created_at"],
        include: [
          {
            association: "Profiles",
            attributes: ["id", "profile"],
            through: { attributes: [] },
          },
          {
            association: "Equipaments",
            attributes: ["id", "equipament"],
            through: { attributes: [] },
          },
        ],
        order: [["created_at", "DESC"]],
      });

      res.send(Comments);
    } catch (error) {
      console.log(error);
      res.status(500).send(error);
    }
  },

  async store(req, res) {
    const { comment, Profiles, Users } = req.body;

    const { UserId } = req;

    try {
      //buscar o usuario pelo ID
      let Users = await Users.findByPk(UserId);

      //se usuario não existir, retorna erro
      if (!Users)
        return res.status(404).send({ error: "usuario não encontrado" });

      //crio a pergunta para o usuario
      let Comments = await Comments.createComments({
        comment,
      });

      await Comments.addProfiles(Profiles);

      //retorno sucesso
      res.status(201).send({
        id: Comments.id,
        comment: Comments.comment,
        created_at: Comments.created_at,
      });
    } catch (error) {
      console.log(error);
      res.status(500).send(error);
    }
  },
};
