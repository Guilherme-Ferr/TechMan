const { Model, DataTypes } = require("sequelize");

class Profiles extends Model {
  /**
   * aqui configuramos os campos da tabela
   * os campos automáticos não precisam ser declarados
   */
  static init(sequelize) {
    super.init(
      {
        profile: DataTypes.STRING,
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
    this.hasMany(models.Users);
    this.hasMany(models.Comments);
  }
}

module.exports = Profiles;
