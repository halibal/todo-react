import React from 'react';

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
            <input
                className="todo-input"
                placeholder='What needs to be done?'
                onChange={handleChange}
                value={input}
            />
        </form>
    )
};
