import express, { json } from "express";
import { port } from "./config.js";
import cors from "cors";
import { json as _json } from "body-parser";
import { routes } from "./routes/tasks.js";

const app = express();

app.use(json());
app.use(cors());
app.use(_json());

app.use("/api", routes);

app.listen(port, () => {
  console.log("app listening on url http://localhost:" + port);
});
