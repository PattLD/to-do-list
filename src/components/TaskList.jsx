import React from "react";
import { useTaskContext } from "../contexts/taskContext";
import Task from "./Task";

export default function TaskList() {
  const { tasks } = useTaskContext();

  return (
    <div className="row-span-5 grid gap-2">
      {tasks.map((task) => (
        <Task
          key={task.id}
          id={task.id}
          description={task.description}
          concluded={task.concluded}
        />
      ))}
    </div>
  );
}
