const { DataTypes } = require("sequelize");
const { sequelize } = require("../dbConnection");

function validateUserType(value) {
  const validUserTypes = ["user", "vendor", "admin"];
  if (!validUserTypes.includes(value)) {
    throw new Error("Invalid user role. Must be 'user,' 'vendor,' or 'admin.'");
  }
}

const User = sequelize.define("User", {
  id: {
    type: DataTypes.UUID,
    primaryKey: true,
    defaultValue: DataTypes.UUIDV4,
  },
  role: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      validateUserType,
    },
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  phoneNumber: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
});

User.sync();

module.exports = { User };
