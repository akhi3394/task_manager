// src/components/TaskForm.js
import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addTask,editTask } from './actions';

const TaskForm = ({ taskToEdit, setTaskToEdit }) => {
  const dispatch = useDispatch();
  const [task, setTask] = useState({ title: '', description: '', priority: '', dueDate: '', completed: false });

  useEffect(() => {
    if (taskToEdit) {
      setTask(taskToEdit);
    } else {
      setTask({ title: '', description: '', priority: '', dueDate: '', completed: false });
    }
  }, [taskToEdit]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTask({ ...task, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (taskToEdit) {
      dispatch(editTask(task));
      setTaskToEdit(null);
    } else {
      dispatch(addTask({ ...task, id: Date.now() }));
    }
    setTask({ title: '', description: '', priority: '', dueDate: '', completed: false });
  };

  const handleCancel = () => {
    setTask({ title: '', description: '', priority: '', dueDate: '', completed: false });
    setTaskToEdit(null);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="title" value={task.title} onChange={handleChange} placeholder="Title" required />
      <textarea name="description" value={task.description} onChange={handleChange} placeholder="Description" required />
      <input type="date" name="dueDate" value={task.dueDate} onChange={handleChange} required />
      <select name="priority" value={task.priority} onChange={handleChange} required>
        <option value="">Priority</option>
        <option value="Low">Low</option>
        <option value="Medium">Medium</option>
        <option value="High">High</option>
      </select>
      <button type="submit" disabled={!task.title || !task.description || !task.priority || !task.dueDate}>
        {taskToEdit ? 'Edit' : 'Add'} Task
      </button>
      {taskToEdit && <button type="button" onClick={handleCancel}>Cancel</button>}
    </form>
  );
};

export default TaskForm;
