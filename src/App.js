import React, { useState } from "react";
import Todo from "./components/Todo";
import Form from "./components/Form";
import FilterButton from "./components/FilterButton";
import "./style.css";
function App() {
  const [task, setTask] = useState([
    { id: 1, name: "Eat", completed: true },
    { id: 2, name: "Sleep", completed: false },
    { id: 3, name: "Repeat", completed: false }
  ]);

  const addTask = name => {
    const newTask = { id: Date.now(), name: name, completed: true };
    setTask([...task, newTask]);
  };

  const toggleCompleted = id => {
    const updatedTasks = task.map(task => {
      if (id === task.id) {
        return { ...task, completed: !task.completed };
      }
      return task;
    });
    console.log(updatedTasks);
    setTask(updatedTasks);
  };

  const deleteTask = taskid => {
    console.log(taskid);
    const remainingTask = task.filter(task => {
      console.log(task.id);
      return taskid !== task.id;
    });
    setTask(remainingTask);
    // console.log(remainingTask);
  };
  const headingText = `${task.length} remaining`;
  return (
    <div className="todoapp stack-large">
      <h1>TodoMatic</h1>
      <Form taskAdd={addTask} />
      <div className="filters btn-group stack-exception">
        <FilterButton name="all" />
        <FilterButton name="Active" />
        <FilterButton name="all" />
      </div>
      <h2 id="list-heading">{headingText} tasks remaining</h2>
      <ul
        role="list"
        className="todo-list stack-large stack-exception"
        aria-labelledby="list-heading"
      >
        {...task.map(task => {
          return (
            <Todo
              name={task.name}
              completed={task.completed}
              id={task.id}
              key={task.id}
              toggleCompleted={toggleCompleted}
              deleteTask={deleteTask}
            />
          );
        })}
      </ul>
    </div>
  );
}

export default App;
