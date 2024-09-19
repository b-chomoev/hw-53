import './AddTaskForm.css';
import React, {useState} from "react";

interface Props {
    onSubmit: (newTask: TaskElements) => void;
}

interface TaskElements {
    id: string;
    name: string;
}

const AddTaskForm: React.FC<Props> = ({onSubmit}) => {
    const [taskData, setTaskData] = useState({
        name: '',
    });

    const onFieldChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const name = e.target.name;
        const value = e.target.value;

        setTaskData((prevState) => {
            return {
                ...prevState,
                [name]: value,
            };
        });
    };

    const onFormSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const task: TaskElements = {
            ...taskData,
            id: Math.random().toString(),
        };

        onSubmit(task);
    };

    return (
        <form onSubmit={onFormSubmit}>
            <input type="text" className='inputAddTask' name='name' onChange={onFieldChange} />
            <button type='submit' className='btnAdd'>Add Task</button>
        </form>
    );
};

export default AddTaskForm;