import express, { Application, Request, Response } from "express";
import dotenv from "dotenv";
import mainRouter from "./routes/index"
import cors from "cors"
dotenv.config();
const app:Application = express();
app.use(cors());
app.use(express.json());
const port = process.env.PORT || 3000;
app.use("/api/v1", mainRouter);
app.get("/", (req: Request, res: Response) => {
  res.send("Express + new Typescript Server");
});

app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
