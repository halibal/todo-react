import React from 'react';


const initialInputValue = { todoInput: "", isChecked: false } // setting initial input value not to write down every input object every time


function Form(props) {

    const [todoInput, setTodoInput] = React.useState(
        initialInputValue
    );


    function handleChange(event) {
        setTodoInput(prevTodo => {
            return {
                ...prevTodo,
                [event.target.name]: event.target.value
            }
        })
    }

    React.useEffect(() => {
        setTodoInput(initialInputValue)
    }, [props.todoRegister]) // everytime a to do registered to the array, it checkes and sets the input value back to its initial value


    function onSubmit(event) {
        event.preventDefault();
        props.setTodoRegister([...props.todoRegister, todoInput])

        console.log(todoInput) // checking input value
    }

    return (
        <main className='todo-container'>
            <form className='input-form' onSubmit={onSubmit}>
                <input
                    className='input-field'
                    type="text"
                    placeholder='What needs to be done?'
                    name='todoInput'
                    onChange={handleChange}
                    value={todoInput.todoInput}
                />
            </form>
            <hr />
        </main>
    )
}

export default Form;