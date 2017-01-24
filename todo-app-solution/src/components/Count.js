import React, { Component } from 'react';

class Count extends Component {

	render() {
		
		const toDoIds = Object.keys(this.props.toDos);
		let incomplete = 0;
		toDoIds.forEach((key) => {
			const toDo = this.props.toDos[key];
			if(!toDo.completed) {
				incomplete++
			}
		})

		return (
			<div className="Count">
				<p>{incomplete} Things to Do</p>
			</div>
		)
	}
}

Count.propTypes = {
	toDos: React.PropTypes.object.isRequired
}

export default Count;
