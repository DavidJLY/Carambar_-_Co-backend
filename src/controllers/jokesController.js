const Joke = require("../models/Joke");

// Ajouter une blague
exports.addJoke = async (req, res) => {
  try {
    const joke = await Joke.create({ content: req.body.content });
    res.status(201).json(joke);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Consulter toutes les blagues
exports.getAllJokes = async (req, res) => {
  try {
    const jokes = await Joke.findAll();
    res.json(jokes);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Consulter une blague par ID
exports.getJokeById = async (req, res) => {
  try {
    const joke = await Joke.findByPk(req.params.id);
    if (!joke) return res.status(404).json({ error: "Joke not found" });
    res.json(joke);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Consulter une blague aléatoire
exports.getRandomJoke = async (req, res) => {
  try {
    const count = await Joke.count();
    const randomId = Math.floor(Math.random() * count) + 1;
    const joke = await Joke.findByPk(randomId);
    if (!joke) return res.status(404).json({ error: "Joke not found" });
    res.json(joke);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
