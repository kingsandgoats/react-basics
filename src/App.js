import React, { useState } from "react";
import Todo from "./components/Todo";
import Form from "./components/Form";
import FilterButton from "./components/FilterButton";
import "./style.css";

const FILTER_MAP = {
  All: () => true,
  Active: task => !task.completed,
  Completed: task => task.completed
};

const FILTER_NAMES = Object.keys(FILTER_MAP);
console.log(FILTER_NAMES)










function App() {
  const [tasks, setTask] = useState([
    { id: 1, name: "Eat", completed: true },
    { id: 2, name: "Sleep", completed: false },
    { id: 3, name: "Repeat", completed: false }
  ]);





  const [filter,setFilter] = useState('All')
  const addTask = name => {
    const newTask = { id: Date.now(), name: name, completed: true };
    setTask([...task, newTask]);
  };


    




  const filterList = FILTER_NAMES.map(name => (
      <FilterButton 
      key={name}
      name={name}
      isPressed={name === filter}
      setFilter={setFilter}/>
    ));

  const toggleCompleted = id => {
    const updatedTasks = tasks.map(task => {
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
    const remainingTask = tasks.filter(task => {
      console.log(task.id);
      return taskid !== task.id;
    });
    setTask(remainingTask);
    // console.log(remainingTask);
  };

  const editTask = (tasId,newName)=>{
    console.log(tasId);
    const editedTasks = tasks.map(task=>{
      if(tasId === task.id){
        return {...task,name:newName}
      }
      return task
    })
    setTask(editedTasks);
  }


  const headingText = `${tasks.length} remaining`;



const taskList = tasks
    .filter(FILTER_MAP[filter])
    .map(task => (
      <Todo
        id={task.id}
        name={task.name}
        completed={task.completed}
        key={task.id}
        toggleCompleted={toggleCompleted}
        deleteTask={deleteTask}
        editTask={editTask}
      />
    ));









  return (
    <div className="todoapp stack-large">
      <h1>TodoMatic</h1>
      <Form taskAdd={addTask} />
      <div className="filters btn-group stack-exception">

        {/*adding filter button*/}
        {filterList}
      </div>
      <h2 id="list-heading">{headingText} tasks remaining</h2>
      <ul
        role="list"
        className="todo-list stack-large stack-exception"
        aria-labelledby="list-heading"
      >
        {taskList}
      </ul>
    </div>
  );
}

export default App;
