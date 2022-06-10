import React from 'react';
import './App.css';
import Header from './components/Header';
import Form from './components/Form';
import Footer from './components/Footer';
import List from './components/List';

function App() {

	const [todoRegister, setTodoRegister] = React.useState([]);

	React.useEffect(() => {
		console.log(todoRegister) // checking todoRegister array
	}, [todoRegister])

	return (
		<div className="App">
			<Header />
			<Form
				todoRegister={todoRegister}
				setTodoRegister={setTodoRegister}
			/>
			<List
				todoRegister={todoRegister}
			/>
			<Footer />
		</div>
	);
}

export default App;
