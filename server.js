const express = require("express");
const app = express();

function randomId() {
    return Math.random().toString(36).substring(2) + Date.now().toString(36);
}

function randomServer() {
    const names = ["Alpha", "Bravo", "Charlie", "Delta", "Echo", "Frost", "Shadow", "Blaze"];

    return {
        name: names[Math.floor(Math.random() * names.length)] + " " + Math.floor(Math.random() * 999),
        money: (30 + Math.floor(Math.random() * 31)) + "M/s", // entre 30 et 60M/s
        players: Math.floor(Math.random() * 8) + "/8",
        jobId: randomId()
    };
}

app.get("/servers", (req, res) => {
    const list = [];

    for (let i = 0; i < 4; i++) {
        list.push(randomServer());
    }

    res.json({ pets: list });
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log("API Started on port " + port);
});
