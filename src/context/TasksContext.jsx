import { createContext, useReducer } from "react";
import appReducer from "./AppReducer";
import { v4 } from "uuid";

const initialState = {
  tasks: [],
};

export const TasksContext = createContext({ initialState });

export const TasksProvider = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, initialState);

  const addTask = (task) =>
    dispatch({ type: "ADD_TASK", payload: { ...task, id: v4(), done: false } });

  const deleteTask = (id) => dispatch({ type: "DELETE_TASK", payload: id });

  const updateTask = (task) => dispatch({ type: "UPDATE_TASK", payload: task });

  const toggleTask = (id) => dispatch({ type: "TOGGLE_TASK", payload: id });

  return (
    <TasksContext.Provider
      value={{ ...state, addTask, deleteTask, updateTask, toggleTask }}
    >
      {children}
    </TasksContext.Provider>
  );
};
