import React from "react";
import { useTaskContext } from "../contexts/taskContext";

export default function TaskForm() {
  const { description, setDescription, handleSubmit } = useTaskContext();
  return (
    <form onSubmit={handleSubmit} className="grid grid-cols-6 row-span-1 gap-1">
      <input
        className="bg-slate-50 border border-indigo-300 rounded text-sm p-0.5 col-span-4 max-h-10"
        type="text"
        placeholder="Digite a tarefa"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button
        className="border border-indigo-300 bg-slate-700 text-xs text-slate-50 font-semibold col-span-2 p-0.5 max-h-10 hover:bg-slate-500 cursor-pointer"
        type="submit"
      >
        Criar Tarefa
      </button>
    </form>
  );
}
