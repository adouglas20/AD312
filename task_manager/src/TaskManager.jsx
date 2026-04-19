import './TaskManager.css';
import { useState } from 'react';

function TaskManager() {
    const [tasks, setTasks] = useState([]);

    function handleSubmit(event) {
        event.preventDefault();
        if (event.target.elements.title.value.trim()) {
            addTask(event.target.elements.title.value);
        }
    }

    function deleteTask(id) {
        const updatedTasks = tasks.map((task) =>{
            if (task.id != id) {
            return task
        }
        });   
        setTasks(updatedTasks);
    }
    function addTask(taskTitle) {
        setTasks([
            ...tasks,
            { id: Date.now(), title: taskTitle, completed: false },
        ]);
    }
    const taskItems = tasks.map((task) => {
        return (
            <p key={task.id}>
                Task Title: {task.title} Completion Status:{' '}
                <input
                    type="checkbox"
                    checked={task.completed}
                    onClick={() => toggleTaskCompletion(task.id)}
                />
                <button className="remove-button" onClick={() => deleteTask(task.id)}>
                    Delete
                </button>
            </p>
        );
    });

    function toggleTaskCompletion(id) {
        const updatedTasks = tasks.map((task) => {
            if (task.id === id) {
                return { ...task, completed: !task.completed };
            } else {
                return task;
            }
        });
        setTasks(updatedTasks);
    }
    return (
        <div>
            {taskItems}
            <form className="form" method="post" onSubmit={handleSubmit}>
                <div>
                    <label>Task title: </label>{' '}
                    <input className="input-box" name="title" />
                </div>
                <button className="control-button" type="submit">
                    Add Task
                </button>
                
            </form>
        </div>
    );
}

export default TaskManager;
