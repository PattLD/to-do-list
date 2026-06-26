import "./App.css";
import React, { useEffect, useState } from "react";
import { supabase } from "./createClient";
import Task from "./components/Task";
import { IoFilter } from "react-icons/io5";

function App() {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState("");

  // SELECT
  async function fetchTasks() {
    const { data, error } = await supabase
      .from("tasks")
      .select("*")
      .order("concluded", { ascending: false })
      .order("created_at", { ascending: true });
    if (error) {
      console.error("Erro ao buscar:", error);
    } else {
      setTasks(data);
    }
  }

  useEffect(() => {
    fetchTasks();
  }, []);

  // INSERT
  const handleSubmit = async (event) => {
    event.preventDefault();
    const { data, error } = await supabase
      .from("tasks")
      .insert({ description: task, concluded: false });
    if (error) {
      console.log(error.message);
      return;
    }
    setTask("");
    fetchTasks();
  };

  // DELETE
  const deleteTask = async (id) => {
    const { error } = await supabase.from("tasks").delete().eq("id", id);
    if (error) {
      console.log(error.message);
      return;
    }
    fetchTasks();
  };

  // UPDATE - TOGGLE
  const toggleTask = async (id, currentStatus) => {
    const newStatus = !currentStatus;
    const { error } = await supabase
      .from("tasks")
      .update({ concluded: newStatus })
      .eq("id", id);

    if (error) {
      console.log(error.message);
      return;
    }
    fetchTasks();
  };

  // UPDATE- DESCRIPTION
  const updateTask = async (id, newDescription) => {
    const { error } = await supabase
      .from("tasks")
      .update({ description: newDescription })
      .eq("id", id);

    if (error) {
      console.log(error.message);
      return;
    }
    fetchTasks();
  };

  return (
    <div className="size-full min-h-screen items-center justify-center grid grid-cols-8 gap-4 bg-indigo-300">
      <div className="col-span-4 col-start-3 border rounded border-slate-400 bg-indigo-100 p-5 grid gap-3">
        <h1 className="text-5xl font-serif font-extrabold text-slate-700">
          To-Do List
        </h1>
        <div className="grid grid-rows-7 gap-1 my-3">
          <form
            onSubmit={handleSubmit}
            className="grid grid-cols-6 row-span-1 gap-1"
          >
            <input
              className="bg-slate-50 border border-indigo-300 rounded text-sm p-0.5 col-span-4 max-h-10"
              type="task"
              placeholder="Digite a tarefa"
              value={task}
              onChange={(e) => setTask(e.target.value)}
            />
            <button
              className="border border-indigo-300 bg-slate-600 text-xs text-slate-50 col-span-2 p-0.5 max-h-10 hover:bg-slate-500 cursor-pointer"
              type="submit"
            >
              Criar Tarefa
            </button>
          </form>
          <div className="row-span-1 mb-1 justify-items-end">
            <button className="text-slate-600 hover:text-indigo-600 hover:cursor-pointer">
              <IoFilter />
            </button>
          </div>
          <div className="row-span-5">
            {tasks.map((task) => (
              <Task
                key={task.id}
                id={task.id}
                description={task.description}
                concluded={task.concluded}
                onToggle={() => toggleTask(task.id, task.concluded)}
                onDelete={() => deleteTask(task.id)}
                onUpdate={(newDescription) =>
                  updateTask(task.id, newDescription)
                }
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
