import express from "express";
import cors from "cors"; // ✅

const app = express();
app.use(cors()); // ✅ habilita CORS
const PORT = 3001;
const names = { name: "abc" };
const data = {
  number: 1,
  text: "Grupos de biologia",
  text2: "Formar grupos de até 5 pessoas.",
  title2: "Não há informações",
  desc2: "Não há informações."
};
const data2 = {words: "poxa;nossa"};
const arrResponse = [
  { name: "erickruan12", company: "abc" },
  { name: "Alon", company: "Hashtag Treinamentos" },
];


app.get("/", (req, res) => {
  res.json(arrResponse);
});

app.get("/api", (req, res) => {
  res.send(names);
});

app.get("/data", (req, res) => {
  res.json(data);
});

app.get("/data2", (req, res) => {
  res.send(data2);
});

app.listen(PORT, () => console.log(`O servidor está rodando na porta ${PORT}`));
