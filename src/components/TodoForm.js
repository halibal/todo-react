import React from 'react';
import { IoIosArrowDown } from 'react-icons/io';

export default function TodoForm(props) {

    const [input, setInput] = React.useState("")


    const handleChange = (event) => {
        setInput(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        props.addTodo(input)
        setInput("");
    }

    return (
        <form
            onSubmit={handleSubmit}
            className="todo-form"
        >
            {props.todos.length > 0 && <IoIosArrowDown className='set-all-completed' onClick={props.makeAllTasksCompleted} />}
            <input
                className="todo-input"
                placeholder='What needs to be done?'
                onChange={handleChange}
                value={input}
            />
        </form>
    )
};
