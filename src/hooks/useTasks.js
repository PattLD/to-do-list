import { taskServices } from "../services/taskServices";
import { useState, useEffect } from "react";

export const useTasks = () => {
  const [tasks, setTasks] = useState([]);
  const [description, setDescription] = useState("");
  const [filter, setFilter] = useState("all"); // 👈
  const [sort, setSort] = useState("oldest");

  // SELECT
  async function getTasks() {
    const { data, error } = await taskServices.selectAll();
    if (error) {
      console.error("Erro ao buscar:", error);
    } else {
      setTasks(data);
    }
  }

  // INSERT
  const handleSubmit = async (event) => {
    event.preventDefault();
    const { data, error } = await taskServices.create(description);
    if (error) {
      console.error("Erro ao buscar:", error);
      return;
    }
    setDescription("");
    getTasks();
  };

  // DELETE
  const deleteTask = async (id) => {
    const { error } = await taskServices.delete(id);
    if (error) {
      console.log(error.message);
      return;
    }
    getTasks();
  };

  // UPDATE - TOGGLE
  const toggleTask = async (id, currentStatus) => {
    const newStatus = !currentStatus;
    const { error } = await taskServices.updateStatus(id, newStatus);
    if (error) {
      console.log(error.message);
      return;
    }
    getTasks();
  };

  // UPDATE- DESCRIPTION
  const updateTask = async (id, newDescription) => {
    const { error } = await taskServices.updateDescription(id, newDescription);
    if (error) {
      console.log(error.message);
      return;
    }
    getTasks();
  };

  const updateDue = async (id, newDue) => {
    const { error } = await taskServices.updateDue(id, newDue);
    if (error) {
      console.log(error.message);
      return;
    }
    getTasks();
  };

  // FILTER & SORT
  const visibleTasks = tasks
    .filter((task) => {
      if (filter === "completed") return task.concluded === true;
      if (filter === "pending") return task.concluded === false;
      return true;
    })
    .sort((a, b) => {
      if (sort === "oldest")
        return new Date(a.created_at) - new Date(b.created_at);
      if (sort === "newest")
        return new Date(b.created_at) - new Date(a.created_at);
      if (sort === "deadline_asc") {
        if (!a.due_date) return 1;
        if (!b.due_date) return -1;
        return new Date(a.due_date) - new Date(b.due_date);
      }
      if (sort === "deadline_desc") {
        if (!a.due_date) return 1;
        if (!b.due_date) return -1;
        return new Date(b.due_date) - new Date(a.due_date);
      }
    });

  useEffect(() => {
    getTasks();
  }, []);

  return {
    tasks: visibleTasks,
    description,
    setDescription,
    handleSubmit,
    deleteTask,
    toggleTask,
    updateTask,
    filter,
    setFilter,
    sort,
    setSort,
    updateDue,
  };
};
