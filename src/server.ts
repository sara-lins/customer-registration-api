import express from "express";

export const app = express();
app.use(express.json());
const port = 3000;

app.listen(port, () => {
  console.log(`App rodando na porta ${port}`);
});
