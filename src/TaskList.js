
import React from 'react';
import { ListGroup, Button } from 'react-bootstrap';

const TaskList = ({ tasks, markAsDone, deleteTask }) => {
  return (
    <ListGroup>
      {tasks.map((task, index) => (
        <ListGroup.Item
          key={index}
          style={{ textDecoration: task.done ? 'line-through' : 'none' }}
        >
          {task.text}
          <Button
            variant="success"
            size="sm"
            className="ml-2"
            onClick={() => markAsDone(index)}
          >
            Mark as Done
          </Button>
          <Button
            variant="danger"
            size="sm"
            onClick={() => deleteTask(index)}
          >
            Delete
          </Button>
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
};

export default TaskList;
