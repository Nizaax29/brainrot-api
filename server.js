import express from "express";

const app = express();
const PORT = process.env.PORT || 3000;
const MIN_MONEY = 30; // 30M/s ou plus

// JSON final avec uniquement les serveurs >=30M/s
const serversData = {
  "pets":[
    {"name":"Esok Sekolah","money":"30M/s","players":"8/8","jobId":"2e0edc96-3792-4183-b625-3dee5fa38ace"},
    {"name":"67","money":"37.5M/s","players":"6/8","jobId":"2e0edc96-3792-4183-b625-3dee5fa38ace"},
    {"name":"Los Burritos","money":"51M/s","players":"6/8","jobId":"b2a163df-2d01-45ec-948d-0a9e60c4040b"},
    {"name":"67","money":"52.5M/s","players":"6/8","jobId":"b2a163df-2d01-45ec-948d-0a9e60c4040b"}
  ]
};

// Endpoint /live
app.get("/live", (req, res) => {
  let filtered = serversData.pets.filter(s => {
    let money = parseFloat(s.money.replace("M/s",""));
    return money >= MIN_MONEY;
  });
  res.json({ pets: filtered });
});

// Démarrage serveur
app.listen(PORT, () => {
  console.log(`🚀 API FINAL ONLINE on port ${PORT}`);
});
