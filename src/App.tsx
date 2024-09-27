import './App.css';
import AddTaskForm from "./components/AddTaskForm/AddTaskForm.tsx";
import Task from "./components/Task/Task.tsx";
import {useState} from "react";

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

    const addTask = () => {
        console.log('clicked');
    };

    return (
        <div className='container'>
            <div className='input-container'>
                <AddTaskForm onButtonClicked={addTask} />
            </div>
            {task.map(t => (
                <Task key={t.id} id={t.id} name={t.name} />
            ))}
        </div>
    );
};

export default App;