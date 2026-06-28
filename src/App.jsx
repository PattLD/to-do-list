import "./App.css";
import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";
import TaskTools from "./components/TaskTools";
import { useTaskContext } from "./contexts/taskContext";

function App() {
  const { description, setDescription, handleSubmit } = useTaskContext();

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-800 p-4">
      <div className="w-full max-w-lg border rounded-3xl border-slate-400 bg-indigo-100 p-5">
        <h1 className="text-5xl font-serif font-extrabold text-slate-700">
          To-Do List
        </h1>
        <div className="flex flex-col gap-3 mt-3">
          <TaskForm />
          <TaskTools />
          <TaskList />
        </div>
      </div>
    </div>
  );
}

export default App;
