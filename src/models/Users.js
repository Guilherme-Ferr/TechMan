const { Model, DataTypes } = require("sequelize");

class Users extends Model {
  /**
   * aqui configuramos os campos da tabela
   * os campos automáticos não precisam ser declarados
   */
  static init(sequelize) {
    super.init(
      {
        password: DataTypes.STRING,
        profile: DataTypes.INTEGER,
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
    this.hasOne(models.Profiles);
  }
}

module.exports = Users;
