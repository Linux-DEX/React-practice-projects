const express = require("express");
const fs = require("fs");
const { v4: uuidv4 } = require("uuid");
const authenticate = require("../middleware/auth");

const router = express.Router();

const getDB = () =>
  JSON.parse(fs.readFileSync("db.json", "utf-8"));

const saveDB = (data) =>
  fs.writeFileSync("db.json", JSON.stringify(data, null, 2));

// Middleware: Auth required
router.use(authenticate);

// Get all tasks for the user
router.get("/", (req, res) => {
  const db = getDB();
  const tasks = db.tasks.filter((task) => task.username === req.user.username);
  res.json(tasks);
});

// Add new task
router.post("/", (req, res) => {
  const { title } = req.body;
  const db = getDB();

  const newTask = {
    id: uuidv4(),
    title,
    completed: false,
    username: req.user.username,
  };

  db.tasks.push(newTask);
  saveDB(db);
  res.status(201).json(newTask);
});

// Complete a task
router.patch("/:id", (req, res) => {
  const db = getDB();
  const task = db.tasks.find((t) => t.id === req.params.id && t.username === req.user.username);

  if (!task) return res.status(404).json({ error: "Task not found" });

  task.completed = true;
  saveDB(db);
  res.json(task);
});

// Delete a task
router.delete("/:id", (req, res) => {
  const db = getDB();
  const filtered = db.tasks.filter((t) => !(t.id === req.params.id && t.username === req.user.username));

  if (filtered.length === db.tasks.length)
    return res.status(404).json({ error: "Task not found" });

  db.tasks = filtered;
  saveDB(db);
  res.status(204).send();
});

module.exports = router;

