export default function appReducer(state, { type, payload }) {
  switch (type) {
    case "ADD_TASK":
      return {
        tasks: [...state.tasks, payload],
      };
    case "DELETE_TASK":
      return {
        tasks: state.tasks.filter((task) => task.id !== payload),
      };
    case "UPDATE_TASK":
      const updateTasks = state.tasks.map((task) => {
        if (task.id === payload.id) {
          task.title = payload.title;
          task.decription = payload.description;
        }
        return task;
      });
      return {
        tasks: updateTasks,
      };
    case "TOGGLE_TASK":
      return {
        tasks: state.tasks.map((task) =>
          task.id === payload ? { ...task, done: !task.done } : task
        ),
      };
    default:
      return state;
  }
}
