const { sequelize } = require("../src/models/Joke");

(async () => {
  try {
    await sequelize.sync({ force: true });
    console.log("Base de données réinitialisée.");
  } catch (error) {
    console.error(
      "Erreur lors de la réinitialisation de la base de données :",
      error
    );
  } finally {
    await sequelize.close();
  }
})();
