import './AddTaskForm.css';
import * as React from "react";

interface Props {
    onButtonClicked: React.MouseEventHandler;
}

const AddTaskForm: React.FC<Props> = ({onButtonClicked}) => {
    return (
        <div>
            <input type="text" value='' name='inputTask' className='inputAddTaskForm' required />
            <button type='button' className='btnAdd' onClick={onButtonClicked}>Add Task</button>
        </div>
    );
};

export default AddTaskForm;