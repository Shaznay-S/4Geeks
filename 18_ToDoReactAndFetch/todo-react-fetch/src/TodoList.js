import './TodoList.css';
import React, { useState, useEffect } from 'react';
import { ReactComponent as XMarkIcon } from './xmark.svg';

const username = 'ShaznaySison';
const apiBaseURL = 'https://playground.4geeks.com/apis/fake/todos/user/';

const TodoList = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  const handleInputChange = (e) => {
    setNewTask(e.target.value);
  };

  const updateServerTasks = (updatedTasks) => {
    // Make a PUT request to update the todo list on the server
    fetch(apiBaseURL + username, {
      method: 'PUT',
      body: JSON.stringify(updatedTasks),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((resp) => resp.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && newTask) {
      const updatedTasks = [...tasks, newTask];
      setTasks(updatedTasks);

      // Update the server-side list
      updateServerTasks(updatedTasks);

      // Save tasks to local storage
      localStorage.setItem('tasks', JSON.stringify(updatedTasks));
    }
  };

  const handleDeleteTask = (index) => {
    const updatedTasks = tasks.filter((task, i) => i !== index);
    // Update the front-end list
    setTasks(updatedTasks);

    // Update the server-side list
    updateServerTasks(updatedTasks);

    // Save tasks to local storage
    localStorage.setItem('tasks', JSON.stringify(updatedTasks));
  };

  const handleCleanAllTasks = () => {
    const updatedTasks = [];

    // Update the front-end list
    setTasks(updatedTasks);

    // Update the server-side list with an empty array
    updateServerTasks(updatedTasks);

    // Clear tasks from local storage
    localStorage.removeItem('tasks');
  };

  useEffect(() => {
    // Load tasks from local storage 
    const savedTasks = localStorage.getItem('tasks');
    if (savedTasks) {
      setTasks(JSON.parse(savedTasks));
    } else {
      // Fetch initial data from the API if local storage is empty
      fetch(apiBaseURL + username)
        .then((resp) => resp.json())
        .then((data) => {
          setTasks(data);
          // Save tasks to local storage for future use
          localStorage.setItem('tasks', JSON.stringify(data));
        })
        .catch((error) => {
          console.error('Error fetching todo list: ', error);
        });
    }
  }, []);

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
      <button onClick={handleCleanAllTasks}>Clear All Tasks</button>
    </div>
  );
};

export default TodoList;
