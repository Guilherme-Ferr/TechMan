const { Model, DataTypes } = require("sequelize");

class Comments extends Model {
  static init(sequelize) {
    super.init(
      {
        comment: DataTypes.STRING,
        equipament: DataTypes.INTEGER,
        profile: DataTypes.INTEGER,
      },
      {
        sequelize,
      }
    );
  }

  static associate(models) {
    this.belongsTo(models.Profiles);
    this.belongsTo(models.Equipaments);
  }
}

module.exports = Comments;
