import express from "express";
import { router } from "./routes";

export const app = express();
app.use(express.json());
app.use(router);
const port = 3000;

app.listen(port, () => {
  console.log(`App rodando na porta ${port}`);
});
