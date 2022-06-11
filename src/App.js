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

	const completeTodo = (id) => {
		let updatedTodos = todos.map((todo) => {
			if (todo.id === id) {
				todo.completed = !todo.completed
			}
			return todo;
		})
		setTodos(updatedTodos)
	}

	return (
		<div className="App">
			<Header />
			<TodoForm addTodo={addTodo} />
			<hr />
			<div className='list-container'>
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
			</div>
			<Footer />
		</div>
	);
}

export default App;
