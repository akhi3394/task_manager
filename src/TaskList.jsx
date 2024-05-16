// src/components/TaskList.js
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Task from './Task';
import TaskForm from './TaskForm';

const TaskList = () => {
  const { tasks, filter, sort } = useSelector((state) => state);
  const [taskToEdit, setTaskToEdit] = useState(null);

  const filteredTasks = tasks.filter((task) => {
    if (filter === 'ALL') return true;
    return filter === 'COMPLETED' ? task.completed : !task.completed;
  });

  const sortedTasks = [...filteredTasks].sort((a, b) => {
    if (sort === 'PRIORITY') return a.priority.localeCompare(b.priority);
    if (sort === 'DUEDATE') return new Date(a.dueDate) - new Date(b.dueDate);
    return 0;
  });

  const handleEdit = (task) => {
    setTaskToEdit(task);
  };

  return (
    <div>
      <TaskForm taskToEdit={taskToEdit} setTaskToEdit={setTaskToEdit} />
      {sortedTasks.map((task) => (
        <Task key={task.id} task={task} onEdit={handleEdit} />
      ))}
    </div>
  );
};

export default TaskList;
