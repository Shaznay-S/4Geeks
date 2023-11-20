import './TodoList.css';
import React, { useState } from 'react';
import { ReactComponent as XMarkIcon } from './xmark.svg';

const username = 'ShaznaySison';
const apiBaseURL = 'https://playground.4geeks.com/apis/fake/todos/user/';

const TodoList = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  const handleInputChange = (e) => {
    setNewTask(e.target.value);
  };

  const handleKeyPress = (e) => {
    if(e.key === 'Enter' && newTask) {
      setTasks([...tasks, newTask]);
      setNewTask('');
    }
  };

  const handleDeleteTask = (index) => {
    const updatedTasks = tasks.filter((task, i) => i !== index);
    setTasks(updatedTasks);
  };

  return (
    <div className="todo-list-container">
      <div className="header">
        To Do:
      </div>
      <div className="input-container">
        <input
          type="text"
          placeholder="What needs to be done?"
          value={newTask}
          onChange={handleInputChange}
          onKeyPress={handleKeyPress}
        />
      </div>
      <ul className="task-list">
        {tasks.length === 0 ? (
          <li>No tasks, add a task</li>
        ) : (
          tasks.map((task, index) => (
            <li key={index} className="task-item">
              {task}
              <span
                className="delete-icon"
                onClick={() => handleDeleteTask(index)}
              >
                <XMarkIcon className="x-mark-icon" />
              </span>
            </li>
          ))
        )}
      </ul>
    </div>
  );
};

export default TodoList;
