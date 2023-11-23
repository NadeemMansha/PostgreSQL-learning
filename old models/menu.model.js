const { DataTypes } = require("sequelize");
const { sequelize } = require("../dbConnection");

const Menu = sequelize.define("Menu", {
  id: {
    type: DataTypes.UUID,
    primaryKey: true,
    defaultValue: DataTypes.UUIDV4,
  },
  type: {
    type: DataTypes.STRING,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
  },
  totalPrice: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  discountPrice: {
    type: DataTypes.FLOAT,
  },
});

module.exports = Menu;
