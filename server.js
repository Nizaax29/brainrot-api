import express from "express";
import { v4 as uuidv4 } from "uuid"; // pour générer des jobId uniques

const app = express();
const PORT = process.env.PORT || 3000;
const NUM_SERVERS = 6; // nombre de serveurs générés
const MIN_MONEY = 30; // 30M/s ou plus

// Fonction pour générer un serveur aléatoire
function generateServer() {
  const money = (Math.random() * 50 + MIN_MONEY).toFixed(1); // 30 à 80 M/s
  const players = `${Math.floor(Math.random()*6)+2}/${8}`; // 2 à 7 /8
  return {
    name: "Server "..Math.floor(Math.random()*1000),
    money: `${money}M/s`,
    players: players,
    jobId: uuidv4(),
    timestamp: Date.now(),
    createdAt: Date.now()
  };
}

// Endpoint /live
app.get("/live", (req, res) => {
  const servers = [];
  for (let i=0; i<NUM_SERVERS; i++) {
    servers.push(generateServer());
  }
  res.json({ pets: servers });
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 API GENERATIVE ONLINE on port ${8080}`);
});
