const swaggerJsdoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

// Configuration des options Swagger
const swaggerOptions = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "API Jokes",
      version: "1.0.0",
      description: "Documentation de l'API Jokes",
    },
    servers: [
      {
        // url: "http://localhost:3000",
        url: "https://carambar-and-co-backend.onrender.com/api-docs",
      },
    ],
  },
  apis: ["./src/routes/jokesRoutes"], // Chemin des fichiers contenant les routes et commentaires Swagger
};

const swaggerSpec = swaggerJsdoc(swaggerOptions);

module.exports = (app) => {
  app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
};
