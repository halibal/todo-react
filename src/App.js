import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import TodoForm from './components/TodoForm';
import TodoItem from './components/TodoItem';
import FormStatus from './components/FormStatus';
import { nanoid } from 'nanoid';
import './App.css';

function App() {
	// States
	const [todos, setTodos] = React.useState([]);
	const [status, setStatus] = React.useState("all");
	const [filteredTodos, setFilteredTodos] = React.useState([]);


	//RUN ONCE when the application starts
	React.useEffect(() => {
		const getLocalTodos = () => {
			if (localStorage.getItem('todos') === null) {
				localStorage.setItem('todos', JSON.stringify([]));
			} else {
				let localTodo = JSON.parse(localStorage.getItem('todos'));
				setTodos(localTodo);
			}
		}
		getLocalTodos();
	}, []);


	// Functions
	const addTodo = (text) => {

		let todo = {
			id: nanoid(),
			text: text,
			completed: false
		}

		let newTodos = [todo, ...todos];
		setTodos(newTodos);
	}

	// Remove a Task By Clicking the -X- Button
	const removeTodo = (id) => {
		let updatedTodos = [...todos].filter((todo) => todo.id !== id);
		setTodos(updatedTodos)
	}

	// Remove All Completed Tasks by Clicking -Clear Completed- Button
	const removeCompletedTodo = () => {
		let completedTodos = [...todos].filter((todo) => todo.completed !== true);
		setTodos(completedTodos)
	}

	// Set a Task Completed By Clicking Inside the Circle Before It
	const completeTodo = (id) => {
		let updatedTodos = todos.map((todo) => {
			if (todo.id === id) {
				todo.completed = !todo.completed
			}
			return todo;
		})
		setTodos(updatedTodos)
	}

	// Setting All Tasks to Completed
	const makeAllTasksCompleted = () => {
		let updatedTodos = []
		if (todos.every((item) => {
			return item.completed === true
		})) {
			updatedTodos = todos.map((todo) => {
				todo.completed = !todo.completed // or false
				return todo;
			})
		}
		else {
			updatedTodos = todos.map((todo) => {
				todo.completed = true
				return todo;
			})
		}
		setTodos(updatedTodos)
	}


	// Checking Status of the Tasks By Clicking on Buttons
	const selectTasks = (e) => {
		setStatus(e.target.value)
	}

	// Filtering Tasks By Clicking on the Buttons => All, Active, Completed
	React.useEffect(() => {
		const filterHandler = () => {
			switch (status) {
				case 'completed':
					setFilteredTodos(todos.filter(todo => todo.completed === true));
					break;
				case 'active':
					setFilteredTodos(todos.filter(todo => todo.completed === false));
					break;
				default:
					setFilteredTodos(todos);
					break;
			}
		}
		filterHandler();

		// Saving Tasks to localStorage
		const saveLocalTodos = () => { localStorage.setItem('todos', JSON.stringify(todos)) }
		saveLocalTodos()
	}, [todos, status]) // And We Want This Code to Run Whenever A Task Is Added and the Status Changed





	return (
		<div className="App">
			<Header />
			<div className='input-and-list-container'>
				<TodoForm
					todos={todos}
					addTodo={addTodo}
					makeAllTasksCompleted={makeAllTasksCompleted}
				/>
				<hr />
				{todos.length > 0 && <div className='list-container'>
					{filteredTodos.map((todo) => {
						return (
							<TodoItem
								key={todo.id}
								todo={todo}
								removeTodo={removeTodo}
								completeTodo={completeTodo}
							/>
						)
					})}
					<FormStatus
						selectTasks={selectTasks}
						todos={todos}
						removeCompletedTodo={removeCompletedTodo}
					/>
				</div>}
			</div>
			<Footer />
		</div>
	);
}

export default App;
