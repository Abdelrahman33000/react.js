
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-bootstrap';
// import logo from './logo.svg';
import './App.css';

import React, { useState } from 'react';
import TaskForm from './TaskForm';
import TaskList from './TaskList';

const App = () => {
  const [tasks, setTasks] = useState([]);

  const addTask = (text) => {
    setTasks([...tasks, { text, done: false }]);
  };

  const markAsDone = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].done = true;
    setTasks(updatedTasks);
  };

  const deleteTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  };

  return (
    <div className="container mt-4">
      <h1>To-Do List</h1>
      <TaskForm addTask={addTask} />
      <TaskList tasks={tasks} markAsDone={markAsDone} deleteTask={deleteTask} />
    </div>
  );
};

export default App;
