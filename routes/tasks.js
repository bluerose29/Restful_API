import e from "express";
import express from "express";

// Use for specific api route
const router = express.Router();

// Initial Data
let tasks = [
  {
    id: "1",
    title: "Task 1",
    task: "Add Commit",
  },
  {
    id: "2",
    title: "Task 2",
    task: "Fix Bug",
  },
];

// use to get all data
router.get("/", async (req, res) => {
  res.send(tasks);
});

// use to create new data
router.post("/", async (req, res) => {
  const task = req.body;

  tasks.push(task);
  res.send(`Tasks: ${task.task} was add to the tasks list.`);
});

// use to get data by id
router.get("/:id", async (req, res) => {
  // get id of the request
  const { id } = req.params;

  // find id in the list of data
  const task = tasks.find((task) => task.id === id);
  if (task) {
    res.send(task);
  } else {
    res.send(`Task ${id} not found.`);
  }
});

// use to delete data
router.delete("/:id", async (req, res) => {
  const { id } = req.params;

  // remove data from the list
  tasks = tasks.filter((task) => task.id !== id);

  res.send(`Tasks ${id} deleted.`);
});

// use to update data by id
router.patch("/:id", async (req, res) => {
  const { id } = req.params;

  // desctructure of data
  const { title, task } = req.body;

  // find data by id
  const tasklist = tasks.find((task) => task.id === id);

  // update old data to new data
  if (title) {
    tasklist.title = title;
  }
  if (task) {
    tasklist.task = task;
  }

  if (tasklist) {
    res.send(`Task ${id} has been Updated`);
  } else {
    res.send(`Task ${id} not found.`);
  }
});

export default router;
