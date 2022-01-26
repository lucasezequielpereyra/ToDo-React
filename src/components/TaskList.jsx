import React, { useContext } from "react";
import { TasksContext } from "../context/TasksContext";
import { Link } from "react-router-dom";

const TaskList = () => {
  const { tasks, deleteTask, toggleTask } = useContext(TasksContext);

  return (
    <div className="flex justify-center">
      <div className="w-6/12">
        {tasks.map((task) => (
          <div
            className="bg-gray-900 px-20 py-5 text-white shadow-2x1 mb-4 flex justify-between"
            key={task.id}
          >
            <div>
              <h1> {task.title} </h1>
              <p> {task.description} </p>

              <button
                className="bg-purple-600 hover:bg-purple-500 py-1 px-3 mt-2"
                onClick={() => toggleTask(task.id)}
              >
                {task.done ? "undone" : "done"}
              </button>
            </div>
            <div>
              <Link
                className="bg-gray-600 hover:bg-gray-500 py-2.5 px-4 mr-2"
                to={`/edit/${task.id}`}
              >
                Edit
              </Link>
              <button
                className="bg-red-600 hover:bg-red-500 py-2 px-4"
                onClick={() => deleteTask(task.id)}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TaskList;
