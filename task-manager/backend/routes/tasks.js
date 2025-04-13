const express = require("express");
const { v4: uuidv4 } = require("uuid");
const authenticate = require("../middleware/auth");
const db = require("../db/mysql");

const router = express.Router();

// Middleware: Auth required
router.use(authenticate);

// Get all tasks for the user
router.get("/", async (req, res) => {
  try {
    const [tasks] = await db.query("SELECT * FROM tasks WHERE username = ?", [
      req.user.username,
    ]);
    res.json(tasks);
  } catch (err) {
    res.status(500).json({ error: "Database error" });
  }
});

// Add new task
router.post("/", async (req, res) => {
  const { title } = req.body;
  const newTask = {
    id: uuidv4(),
    title,
    completed: false,
    username: req.user.username,
  };

  try {
    await db.query(
      "INSERT INTO tasks (id, title, completed, username) VALUES (?, ?, ?, ?)",
      [newTask.id, newTask.title, newTask.completed, newTask.username]
    );
    res.status(201).json(newTask);
  } catch (err) {
    res.status(500).json({ error: "Database error" });
  }
});

// Complete a task
router.patch("/:id", async (req, res) => {
  try {
    const [result] = await db.query(
      "UPDATE tasks SET completed = true WHERE id = ? AND username = ?",
      [req.params.id, req.user.username]
    );

    if (result.affectedRows === 0) {
      return res.status(404).json({ error: "Task not found" });
    }

    const [updatedTask] = await db.query(
      "SELECT * FROM tasks WHERE id = ? AND username = ?",
      [req.params.id, req.user.username]
    );

    res.json(updatedTask[0]);
  } catch (err) {
    res.status(500).json({ error: "Database error" });
  }
});

// Delete a task
router.delete("/:id", async (req, res) => {
  try {
    const [result] = await db.query(
      "DELETE FROM tasks WHERE id = ? AND username = ?",
      [req.params.id, req.user.username]
    );

    if (result.affectedRows === 0) {
      return res.status(404).json({ error: "Task not found" });
    }

    res.status(204).send();
  } catch (err) {
    res.status(500).json({ error: "Database error" });
  }
});

module.exports = router;
