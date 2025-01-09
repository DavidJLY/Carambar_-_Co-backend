const { DataTypes } = require("sequelize");
const sequelize = require("../config");

const Joke = sequelize.define("Joke", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  content: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = Joke;
