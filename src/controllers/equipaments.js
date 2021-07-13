const Equipament = require("../models/Equipaments");

module.exports = {
  //função que vai ser executada pela rota
  async index(res) {
    try {
      const equipament = await Equipament.findAll();

      res.send(equipament);
    } catch (error) {
      console.log(error);
      res.status(500).send({ error });
    }
  },

  async store(req, res) {
    //receber os dados do body
    const { description, image } = req.body;

    try {
      let equipament = await Equipament.findOne({
        where: {
          equipament: equipament,
        },
      });

      if (equipament)
        return res.status(400).send({ error: "Equipamento já cadastrado" });

      equipament = await Equipament.create({
        description,
        image,
      });

      //retornar resposta de sucesso
      res.status(201).send({
        equipament: {
          equipamentId: equipament.id,
          description: equipament.description,
          image: equipament.image,
        },
      });
    } catch (error) {
      console.log(error);
      res.status(500).send(error);
    }
  },

  async delete(req, res) {
    //recuperar o id do aluno
    const equipamentId = req.params.id;

    try {
      let equipament = await Equipament.findByPk(equipamentId);

      if (!equipament)
        return res.status(404).send({ error: "Equipamento não encontrado" });

      await equipament.destroy();

      //devolver resposta de sucesso
      res.status(204).send();
    } catch (error) {
      console.log(error);
      res.status(500).send(error);
    }
  },
};
