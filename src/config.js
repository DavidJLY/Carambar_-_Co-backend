const { Sequelize } = require("sequelize");

const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: "./database.sqlite", // Fichier de la base de données SQLite
});

module.exports = sequelize;
