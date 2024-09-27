import './Task.css';
import * as React from "react";

interface Props {
    id: string;
    name: string;
    onDelete: React.MouseEventHandler;
}

const Task: React.FC<Props> = ({name, onDelete}) => {
    return (
        <div className='tasks'>
            <p>{name}</p>
            <button type='button' className='taskButton' onClick={onDelete}>Delete</button>
        </div>
    );
};

export default Task;