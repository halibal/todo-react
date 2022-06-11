import React from 'react';
import { RiCloseLine } from 'react-icons/ri';
import { AiOutlineCheck } from 'react-icons/ai';

export default function TodoItem(props) {
    return (
        <div className="list-group-item">
            <div className='check-icon' onClick={() => props.completeTodo(props.todo.id)}>
                {props.todo.completed ? <AiOutlineCheck /> : null}
            </div>
            <div className={props.todo.completed ? "completed" : ""}>
                {props.todo.text}
            </div>
            <div className='close-icon'>
                <RiCloseLine onClick={() => props.removeTodo(props.todo.id)} />
            </div>
        </div>
    )
}
