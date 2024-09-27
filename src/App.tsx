import './App.css';
import AddTaskForm from "./components/AddTaskForm/AddTaskForm.tsx";
import Task from "./components/Task/Task.tsx";
import {useState} from "react";
import * as React from "react";

interface ITask {
    id: string;
    name: string;
}

const App = () => {
    const [task, setTasks] = useState<ITask[]>([
        {id: '1', name: 'Buy milk'},
        {id: '2', name: 'Walk with dog'},
        {id: '3', name: 'Do homework'},
    ]);
    const [currentTask, setCurrentTask] = useState('');

    const addTask = () => {
        const copyTasks = [...task];
        copyTasks.push({id: String(Date.now()), name: currentTask});

        setTasks(copyTasks);
        setCurrentTask('');
    };

    const addTaskFromInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setCurrentTask(e.target.value);
    };

    const deleteTask = (id: string) => {
        const copyTasks = task.filter(t => t.id !== id);
        setTasks(copyTasks);
    };

    return (
        <div className='container'>
            <div className='input-container'>
                <AddTaskForm name={currentTask} onButtonClick={addTask} onAddTask={addTaskFromInput}/>
            </div>
            {task.map(t => (
                <Task key={t.id} id={t.id} name={t.name} onDelete={() => deleteTask(t.id)} />
            ))}
        </div>
    );
};

export default App;