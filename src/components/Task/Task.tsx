import './Task.css';
import * as React from "react";

interface Props {
    id: string;
    name: string;
}

const Task: React.FC<Props> = ({name}) => {
    return (
        <div className='tasks'>
            <p>{name}</p>
            <button type='button' className='taskButton'>Delete</button>
        </div>
    );
};

export default Task;