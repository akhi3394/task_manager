// src/components/Task.js
import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteTask,toggleTask } from './actions';

const Task = ({ task, onEdit }) => {
  const dispatch = useDispatch();

  return (
    <div className={`task ${task.completed ? 'completed' : ''}`}>
      <h3>{task.title}</h3>
      <p>{task.description}</p>
      <p>Priority: {task.priority}</p>
      <p>Due Date: {task.dueDate}</p>
      <label>
        <input type="checkbox" checked={task.completed} onChange={() => dispatch(toggleTask(task.id))} />
        Completed
      </label>
      <button onClick={() => onEdit(task)}>Edit</button>
      <button onClick={() => dispatch(deleteTask(task.id))}>Delete</button>
    </div>
  );
};

export default Task;
