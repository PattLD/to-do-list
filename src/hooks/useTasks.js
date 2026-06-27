import { taskServices } from "../services/taskServices";
import { useState, useEffect } from "react";

export const useTasks = () => {
  const [tasks, setTasks] = useState([]);
  const [description, setDescription] = useState("");

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

  useEffect(() => {
    getTasks();
  }, []);

  return {
    tasks,
    description,
    setDescription,
    handleSubmit,
    deleteTask,
    toggleTask,
    updateTask,
  };
};
