const { DataTypes } = require("sequelize");
const { sequelize } = require("../dbConnection");

const Restaurant = sequelize.define("Restaurant", {
  id: {
    type: DataTypes.UUID,
    primaryKey: true,
    defaultValue: DataTypes.UUIDV4,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
  },
});

module.exports = Restaurant;
