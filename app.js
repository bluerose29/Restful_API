import express from "express";
import bodyParser from "body-parser";

// function for routing
import tasksRoutes from "./routes/tasks.js";

const app = express();
const PORT = 5000;

// use to convert into json and to be use in the program
app.use(bodyParser.json());

// use tasks as an api route
app.use("/tasks", tasksRoutes);

// default route
app.get("/", (req, res) => res.send("Hello World"));

app.listen(PORT, () =>
  console.log(`Example running on port: http://localhost:${PORT}`)
);
