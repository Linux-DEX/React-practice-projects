const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const taskRoutes = require("./routes/tasks");
const { generateToken } = require("./utils/token");
const { readFileSync, writeFileSync } = require("fs");

const app = express();
app.use(cors());
app.use(bodyParser.json());

const PORT = 3000;

// Login route (returns token)
app.post("/login", (req, res) => {
  const { username } = req.body;
  if (!username) return res.status(400).json({ error: "Username required" });

  const db = JSON.parse(readFileSync("db.json"));
  const existingUser = db.users.find((u) => u.username === username);

  if (!existingUser) {
    db.users.push({ username });
    writeFileSync("db.json", JSON.stringify(db, null, 2));
  }

  const token = generateToken(username);
  res.json({ token });
});

// Task routes (require auth)
app.use("/tasks", taskRoutes);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

