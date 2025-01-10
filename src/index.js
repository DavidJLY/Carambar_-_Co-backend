const express = require("express");
const app = express();
const cors = require("cors");
const swaggerConfig = require("./swaggerConfig");
const PORT = 3000;

// Autoriser toutes les origines
app.use(cors());

// Middleware pour parser le JSON
app.use(express.json());

// Ajout de Swagger
swaggerConfig(app);

// Importer les routes
const jokesRoutes = require("./routes/jokesRoutes");
app.use("/v1/jokes", jokesRoutes);

const sequelize = require("./config");
const Joke = require("./models/Joke");

// Synchroniser la base de données
sequelize
  .sync({ force: false })
  .then(() => {
    console.log("Database synchronized");
  })
  .catch((err) => console.error("Database error:", err));

// Démarrer le serveur
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
