import AddTaskForm from "./Components/AddTaskForm/AddTaskForm";
import './index.css';
import {useState} from "react";
import Task from "./Components/Task/Task";

interface TaskElements {
    id: string;
    name: string;
}

const App = () => {
    const [task, setTask] = useState<TaskElements[]>([
        {name: 'Buy milk', id: '1'},
        {name: 'Walk with dog', id: '2'},
        {name: 'Do homework', id: '3'},
    ]);

    const deleteTask = (id: string) => {
        setTask((prevState) => {
            return prevState.filter((item) => item.id !== id);
        });
    };

    const createTask = (newTask: TaskElements) => {
        setTask((prevState) => {
            const taskCopy = [...prevState];
            taskCopy.push(newTask);
            return taskCopy;
        });
    };

    return (
        <div className='App'>
            <div className='task-form'>
                <AddTaskForm onSubmit={createTask}/>
            </div>
            <div className='task'>
                {task.map((item) => (
                    <Task key={item.id} name={item.name} onRemove={() => deleteTask(item.id)}/>
                ))}
            </div>
        </div>
    );
};

export default App;