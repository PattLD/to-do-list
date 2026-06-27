import "./App.css";
import Task from "./components/Task";
import { IoFilter } from "react-icons/io5";
import { useTasks } from "./hooks/useTasks";

function App() {
  const {
    tasks,
    description,
    setDescription,
    deleteTask,
    handleSubmit,
    toggleTask,
    updateTask,
  } = useTasks();

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
              value={description}
              onChange={(e) => setDescription(e.target.value)}
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
