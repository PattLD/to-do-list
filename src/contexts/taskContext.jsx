import { createContext, useContext } from "react";
import { useTasks } from "../hooks/useTasks";

export const TaskContext = createContext();

export const TaskProvider = ({ children }) => {
  const taskState = useTasks();

  return (
    <TaskContext.Provider value={taskState}>{children}</TaskContext.Provider>
  );
};

export const useTaskContext = () => useContext(TaskContext);
