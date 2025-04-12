import { useEffect, useState } from "react";
import { getTasks, addTask, deleteTask, completeTask } from "../services/api";
import TaskItem from "../components/TaskItem";
import { Task } from "../types";

export default function Tasks() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [newTask, setNewTask] = useState("");

  const fetchTasks = async () => {
    const res = await getTasks();
    setTasks(res);
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const handleAdd = async () => {
    await addTask(newTask);
    setNewTask("");
    fetchTasks();
  };

  return (
    <div>
      <h2>Task Manager</h2>
      <input
        placeholder="New task"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
      />
      <button onClick={handleAdd}>Add</button>
      <ul>
        {tasks.map((task) => (
          <TaskItem
            key={task.id}
            task={task}
            onDelete={() => {
              deleteTask(task.id);
              fetchTasks();
            }}
            onComplete={() => {
              completeTask(task.id);
              fetchTasks();
            }}
          />
        ))}
      </ul>
    </div>
  );
}

