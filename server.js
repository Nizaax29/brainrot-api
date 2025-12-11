// --- API Brainrot 30M/s+ ---
// Version stable Railway (NE CRASH JAMAIS)

const express = require("express");
const app = express();

function randomId() {
    return (
        Math.random().toString(36).substring(2) +
        Math.random().toString(36).substring(2)
    );
}

function randomServer() {
    const names = ["Alpha", "Bravo", "Charlie", "Delta", "Echo", "Frost", "Shadow", "Blaze"];

    const moneyValue = 30 + Math.floor(Math.random() * 31); // 30 à 60

    return {
        name: names[Math.floor(Math.random() * names.length)] + " " + Math.floor(Math.random() * 999),
        money: moneyValue + "M/s",
        moneyValue: moneyValue,
        players: Math.floor(Math.random() * 9) + "/8", // parfois full
        jobId: randomId()
    };
}

app.get("/servers", (req, res) => {
    try {
        const list = [];

        for (let i = 0; i < 5; i++) {
            list.push(randomServer());
        }

        res.json({ servers: list });
    } catch (err) {
        res.json({ error: "API ERROR", details: err.toString() });
    }
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log("Brainrot API Running on port " + port);
});
