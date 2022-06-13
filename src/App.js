import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import TodoForm from './components/TodoForm';
import TodoItem from './components/TodoItem';
import { nanoid } from 'nanoid';
import './App.css';

function App() {

	const [todos, setTodos] = React.useState([])

	const addTodo = (text) => {
		// let id = 1;
		// if (todos.length > 0) {
		// 	id = todos[0].id + 1
		// }

		let todo = {
			id: nanoid(),
			text: text,
			completed: false
		}

		let newTodos = [todo, ...todos];
		setTodos(newTodos);
	}

	const removeTodo = (id) => {
		let updatedTodos = [...todos].filter((todo) => todo.id !== id);
		setTodos(updatedTodos)
	}

	const removeCompletedTodo = () => {
		let completedTodos = [...todos].filter((todo) => todo.completed !== true);
		setTodos(completedTodos)
	}

	const completeTodo = (id) => {
		let updatedTodos = todos.map((todo) => {
			if (todo.id === id) {
				todo.completed = !todo.completed
			}
			return todo;
		})
		setTodos(updatedTodos)
	}

	const uncompletedItems = todos.filter(({ completed }) => completed === false)
	const completedItems = todos.filter(({ completed }) => completed === true)
	console.log("uncompleted items:")
	console.log(uncompletedItems)
	console.log("completed items:")
	console.log(completedItems)

	return (
		<div className="App">
			<Header />
			<TodoForm addTodo={addTodo} />
			<hr />
			{todos.length > 0 && <div className='list-container'>
				{todos.map((todo) => {
					return (
						<TodoItem
							key={todo.id}
							todo={todo}
							removeTodo={removeTodo}
							completeTodo={completeTodo}
						/>
					)
				})}
				<div className='status-container'>
					<p className='completed-items-text'>
						{uncompletedItems.length} {todos.length === 1 ? "task" : "tasks"} left
					</p>
					<div className='buttons-container'>
						<button className="all-button">All</button>
						<button className="active-button">Active</button>
						<button className="completed-button">Completed</button>
					</div>
					{completedItems.length === 0
						? <button style={{ visibility: 'hidden' }}>Clear Completed</button>
						: <button onClick={removeCompletedTodo}>Clear Completed</button>
					}
				</div>
			</div>}
			<Footer />
		</div>
	);
}

export default App;
