import React, { Component } from 'react';

class AddToDo extends Component {

	createToDo(event) {
		event.preventDefault();
		const toDo = {
			name: this.name.value,
			completed: false
		}
		this.props.addToDo(toDo);
		this.toDoForm.reset();
	}

	render() {
		return (
			<form className="AddToDo" onSubmit={(e) => this.createToDo(e)} ref={(input) => this.toDoForm = input}>
				<input type="text" placeholder="To Do" ref={(input) => this.name = input}/>
				<button type="submit">Add</button>
			</form>
		)
	}
}

AddToDo.propTypes = {
	addToDo: React.PropTypes.func.isRequired
}

export default AddToDo;
