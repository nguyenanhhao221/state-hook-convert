import React, { useState } from "react";
import NewTask from './NewTask'
import TasksList from "./TasksList";

const AppFunction = () => {
    //state hook for newTask
    const [newTask, setNewTask] = useState({});

    //state hook for allTask to display in TaskList
    const [allTasks, setAllTasks] = useState([])

    //handleChange function when enter value in NewTask
    const handleChange = ({ target }) => {
        const { name, value } = target;
        setNewTask(prevTask => ({
            ...prevTask,
            [name]: value,
            id: Date.now()
        }))
    }

    //handleSubmit function after click submit button and it will update value to TaskList
    const handleSubmit = event => {
        event.preventDefault();
        if (!newTask.title) return;

        //state setter
        //get the previous state array and combine with the newTask
        //The allTask is an ARRAY contain object which in each representing each task
        setAllTasks(prevAllTasks => ([newTask, ...prevAllTasks]));
        setNewTask(prevTask => ({}))
    }

    const handleDelete = taskIdToRemove => {
        setAllTasks(prevAllTasks => prevAllTasks.filter(task => task.id !== taskIdToRemove))
    }

    return (
        <main>
            <h1>Tasks</h1>
            <NewTask
                newTask={newTask}
                handleChange={handleChange}
                handleSubmit={handleSubmit}
            />

            <TasksList
                allTasks={allTasks}
                handleDelete={handleDelete}
            />
        </main>
    );

}

export default AppFunction;
