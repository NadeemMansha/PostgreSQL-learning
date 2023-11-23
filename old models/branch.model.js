const { DataTypes } = require("sequelize");
const { sequelize } = require("../dbConnection");

const Branch = sequelize.define("Branch", {
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
  location: {
    type: DataTypes.GEOMETRY("POINT"),
    allowNull: false,
  },
});

module.exports = Branch;
