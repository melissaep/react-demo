import React, { Component } from 'react';

class ToDoList extends Component {
		
	constructor() {
		super();
		this.renderToDo = this.renderToDo.bind(this);
	}

	renderToDo(key) {
		const toDo = this.props.toDos[key];

		return (
			<li key={key}>
				<input type="checkbox" checked={toDo.completed} onChange={() => this.props.updateToDo(key)}/>
				<span className="name"><p>{toDo.name}</p></span>
				<button className="remove" onClick={() => this.props.removeToDo(key)}>&times;</button>
			</li>
		)
	}

	render() {
		return (
			<ul className="ToDoList">
				{ Object.keys(this.props.toDos).map(this.renderToDo) }
			</ul>
		)
	}
}

ToDoList.propTypes = {
	toDos: React.PropTypes.object.isRequired,
	updateToDo: React.PropTypes.func.isRequired,
	removeToDo: React.PropTypes.func.isRequired
}

export default ToDoList;
