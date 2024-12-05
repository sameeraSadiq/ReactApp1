import React, { useState } from 'react';
import './TodoList.css';

const TodoList = () => {
    const [tasks, setTasks] = useState([]);
    const [task, setTask] = useState('');
    const [showCompleted, setShowCompleted] = useState(false);

    const addTask = () => {
        if (task) {
            setTasks([...tasks, { text: task, done: false }]);
            setTask('');
        }
    };

    const toggleTask = (index) => {
        const newTasks = [...tasks];
        newTasks[index].done = !newTasks[index].done;
        setTasks(newTasks);
    };

    const toggleShowCompleted = () => {
        setShowCompleted(!showCompleted);
    };

    return (
        <div className="todo-container">
            <h1>Adam's To Do List ({tasks.length} Items to do)</h1>
            <div className="input-container">
                <input
                    type="text"
                    value={task}
                    onChange={(e) => setTask(e.target.value)}
                    placeholder="Add a new task..."
                    className="task-input"
                />
                <button onClick={addTask} className="add-button">Add</button>
            </div>
            <ul className="task-list">
                {tasks.map((task, index) => (
                    <li key={index} className={`task-item ${task.done ? 'completed' : ''}`}>
                        <input
                            type="checkbox"
                            checked={task.done}
                            onChange={() => toggleTask(index)}
                            className="checkbox"
                        />
                        <span className="task-text">{task.text}</span>
                    </li>
                ))}
            </ul>
            <button onClick={toggleShowCompleted} className="toggle-button">
                {showCompleted ? 'Hide' : 'Show'} Completed Tasks
            </button>
            {showCompleted && (
                <div className="completed-tasks">
                    <h2>Completed Tasks:</h2>
                    <ul className="completed-list">
                        <li><strong>Description</strong> <strong>Done</strong></li>
                        {tasks.filter(task => task.done).map((task, index) => (
                            <li key={index} className="completed-item"><span>{task.text}</span> <span><input type="checkbox" checked/></span></li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default TodoList;