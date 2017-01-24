import React, { Component } from 'react';
import Header from './Header';
import Count from './Count';
import ToDoList from './ToDoList';
import AddToDo from './AddToDo';

class App extends Component {

	constructor() {
		super();

		this.addToDo = this.addToDo.bind(this);
		this.updateToDo = this.updateToDo.bind(this);
		this.removeToDo = this.removeToDo.bind(this);

		this.state = {
			toDos: {}
		}
	}

	componentWillMount() {
		const localStorageRef = localStorage.getItem(`toDos-${this.props.params.name}`);

		if(localStorageRef) {
			this.setState({
				toDos: JSON.parse(localStorageRef)
			});
		}
	}

	componentWillUpdate(nextProps, nextState) {
		localStorage.setItem(`toDos-${this.props.params.name}`, JSON.stringify(nextState.toDos));
	}

	addToDo(toDo) {
		// take a copy of state
		const toDos = this.state.toDos;
		// add new to do
		const timestamp = Date.now();
		toDos[`todo-${timestamp}`] = toDo;
		// set state
		this.setState({ toDos });
	}

	updateToDo(key) {
		// take a copy of state
		const toDos = this.state.toDos;
		// update to do
		toDos[key].completed = !toDos[key].completed;
		// set state
		this.setState({ toDos });
	}

	removeToDo(key) {
		// take a copy of state
		const toDos = this.state.toDos;
		// remove to do
		delete toDos[key];
		// set state
		this.setState({ toDos });
	}

	render() {
		return (
			<div className="App">
				<Header name={this.props.params.name} />
				<Count toDos={this.state.toDos} /> 
				<ToDoList
					toDos={this.state.toDos}
					updateToDo={this.updateToDo}
					removeToDo={this.removeToDo}
				/>
				<AddToDo addToDo={this.addToDo}/>
			</div>
		)
	}
}

App.propTypes = {
	params: React.PropTypes.object.isRequired
}

export default App;
