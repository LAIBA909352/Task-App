import React from "react";
export default function AddTask({ taskList, setTaskList, task, setTask }) {
  function handleSubmit(e) {
    e.preventDefault();
    if (!task.name || task.name.trim() === "") 
      {
      return;
    }
    const date = new Date();
    if (task.id) 
      {
      const updatedTaskList = taskList.map((todo) =>
        todo.id === task.id
          ? {
              id: task.id,
              name: task.name,
              time: `${date.toLocaleTimeString()} ${date.toLocaleDateString()}`,
            }
          : todo
      );
      setTaskList(updatedTaskList);
      setTask({});
    } 
    else 
      {
      const newTask = {
        id: date.getTime(),
        name: task.name,
        time: `${date.toLocaleTimeString()} ${date.toLocaleDateString()}`,
      };
      setTaskList([...taskList, newTask]);
      setTask({});
    }
  }
  return (
    <section className="addTask">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="task"
          autoComplete="off"
          placeholder="Add Task"
          maxLength={25}
          value={task.name || ""}
          onChange={(e) => setTask({ ...task, name: e.target.value })}
        />
        <button
          type="submit"
          disabled={!task.name || task.name.trim() === ""}
        >
          {task.id ? "Update" : "Add"}
        </button>
      </form>
    </section>
  );
}