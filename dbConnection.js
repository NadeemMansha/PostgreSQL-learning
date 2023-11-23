const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(process.env.POSTGRESQL_URL, {
  dialect: "postgres",
});

async function connectDatabase() {
  try {
    await sequelize.authenticate();
    console.log("Connected to the database successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
}

module.exports = { sequelize, connectDatabase };
