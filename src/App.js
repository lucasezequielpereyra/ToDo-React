import React from "react";
// Router
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// Components
import Heading from "./components/Heading";
import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";
// Context
import { TasksProvider } from "./context/TasksContext";

import "./App.css";

function App() {
  return (
    <div>
      <div className="h-screen text-white text-center p-10">
        <div className="container mx-auto hfull">
          <Router>
            <TasksProvider>
              <Heading />
              <Routes>
                <Route path="/" element={<TaskList />} />
                <Route path="/add" element={<TaskForm />} />
                <Route path="/edit/:id" element={<TaskForm />} />
              </Routes>
            </TasksProvider>
          </Router>
        </div>
      </div>
    </div>
  );
}

export default App;
