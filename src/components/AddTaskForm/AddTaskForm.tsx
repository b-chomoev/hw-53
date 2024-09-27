import './AddTaskForm.css';
import * as React from "react";

interface Props {
    name: string;
    onButtonClick: React.MouseEventHandler;
    onAddTask: React.ChangeEventHandler<HTMLInputElement>;
}

const AddTaskForm: React.FC<Props> = ({name, onButtonClick, onAddTask}) => {


    return (
        <div>
            <input type="text" value={name} name='inputTask' className='inputAddTaskForm' onChange={onAddTask} required/>
            <button type='button' className='btnAdd' onClick={onButtonClick}>Add Task</button>
        </div>
    );
};

export default AddTaskForm;