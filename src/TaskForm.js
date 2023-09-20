
import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

const TaskForm = ({ addTask }) => {
  const [task, setTask] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.trim() !== '') {
      addTask(task);
      setTask('');
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="taskInput">
        <Form.Label>Task:</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter task"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          required
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        Add Task
      </Button>
    </Form>
  );
};

export default TaskForm;
