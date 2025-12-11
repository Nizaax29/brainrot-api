import express from "express";

const app = express();

// Railway fournit automatiquement le port via process.env.PORT
const PORT = process.env.PORT || 3000;

// Endpoint test
app.get("/live", (req, res) => {
  res.json({ pets: [] }); // JSON vide juste pour tester
});

// Démarrage du serveur
app.listen(PORT, () => {
  console.log(`🚀 API en ligne sur le port ${8080}`);
});
