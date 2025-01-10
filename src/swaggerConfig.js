const swaggerJsdoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

// Configuration des options Swagger
const swaggerOptions = {
  definition: {
    openapi: "3.0.0", // Version OpenAPI
    info: {
      title: "API Jokes", // Titre de l'API
      version: "1.0.0", // Version de l'API
      description: "Documentation de l'API Jokes",
    },
    servers: [
      {
        url: "http://localhost:3000", // URL de votre API (modifiez selon votre environnement)
      },
    ],
  },
  apis: ["./src/routes/jokesRoutes"], // Chemin des fichiers contenant les routes et commentaires Swagger
};

const swaggerSpec = swaggerJsdoc(swaggerOptions);

module.exports = (app) => {
  app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
};
