import express from "express"; // Imortando Express (API)
import cors from "cors"; // Importando a pkg CORS.

const app = express();
app.use(cors()); // Ativando o CORS package.
const PORT = 3001; // Porta de acesso localhost.
const names = { name: "abc" };
const data = {
  number: 1,
  text: "Trabalho de Ed.Física 30/05.",
  text2: "Realizar uma pesquisa sobre sistema cardiovascular.",
  title2: "Possivel apresentação de biologia 27/05",
  desc2: "Apresentar as pesquisas feitas em volta da escola."
};
const data2 = {words: "poxa;nossa"};
const arrResponse = [
  { name: "erickruan12", company: "abc" },
  { name: "Alon", company: "Hashtag Treinamentos" },
];

// Requisição padrão
app.get("/", (req, res) => {
  res.json(arrResponse);
});
//Requisição de 1 item
app.get("/api", (req, res) => {
  res.send(names);
});
// Requisição de informações
app.get("/data", (req, res) => {
  res.json(data);
});
// Requisição de palavras como teste.
app.get("/data2", (req, res) => {
  res.send(data2);
});

app.listen(PORT, () => console.log(`O servidor está rodando na porta ${PORT}`));
