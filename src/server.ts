import express from "express";
import { routers } from "./routes";
import "express-async-errors";

export const app = express();
app.use(express.json());
app.use(routers);
const port = 3000;

app.listen(port, () => {
  console.log(`App rodando na porta ${port}`);
});
