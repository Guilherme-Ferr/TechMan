const { Model, DataTypes } = require("sequelize");

class Equipaments extends Model {
  /**
   * aqui configuramos os campos da tabela
   * os campos automáticos não precisam ser declarados
   */
  static init(sequelize) {
    super.init(
      {
        equipament: DataTypes.STRING,
        image: DataTypes.STRING,
        description: DataTypes.STRING,
        activated: DataTypes.STRING,
      },
      {
        sequelize,
      }
    );
  }

  /**
   * aqui configuramos os relacionamentos
   */
  static associate(models) {
    this.hasMany(models.Comments);
  }
}

module.exports = Equipaments;
