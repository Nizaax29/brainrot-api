import express from "express";
import fetch from "node-fetch";

const app = express();
const PORT = process.env.PORT || 3000;
const PLACE_ID = "109983668079237";
const MIN_MONEY = 30;
let liveData = { pets: [] };

async function fetchServers() {
    try {
        const url = `https://games.roblox.com/v1/games/${PLACE_ID}/servers/Public?sortOrder=Asc&limit=100`;
        const res = await fetch(url);
        const data = await res.json();

        let servers = [];

        for (const srv of data.data) {
            const moneySimulated = Math.floor(Math.random() * 60) + 1;
            if (moneySimulated >= MIN_MONEY && srv.playing < srv.maxPlayers) {
                servers.push({
                    name: srv.name || "Unknown",
                    money: moneySimulated + "M/s",
                    players: srv.playing + "/" + srv.maxPlayers,
                    jobId: srv.id,
                    timestamp: Date.now(),
                    createdAt: Date.now()
                });
            }
        }

        liveData.pets = servers;
        console.log("🔄 Serveurs mis à jour:", servers.length);
    } catch (err) {
        console.error("❌ Erreur API Roblox:", err);
    }
}

setInterval(fetchServers, 2000);
fetchServers();

app.get("/live", (req, res) => {
    res.json(liveData);
});

app.listen(PORT, () => console.log(`🚀 API en ligne sur http://localhost:${PORT}/live`));



import express from "express";

const app = express();
const PORT = process.env.PORT || 3000;

app.get("/live", (req, res) => {
  res.json({ pets: [] }); // JSON vide pour test
});

app.listen(PORT, () => console.log(`🚀 API en ligne sur port ${PORT}`));
