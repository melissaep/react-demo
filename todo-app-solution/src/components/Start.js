import React, { Component } from 'react';

class Start extends Component {

	goToList(event) {
		event.preventDefault();
		// Get list name from input
		const name = this.nameInput.value;
		// Transition to To Do List
		this.context.router.transitionTo(`/todolist/${name}`);
	}

	render() {
		return (
			<div>
				<form className="create-list" onSubmit={(e) => this.goToList(e)}>
					<h2>Let's make a To Do List!</h2>
					<input type="text" required placeholder="Your First Name" ref={(input) => {this.nameInput = input}}/>
					<button type="submit">Let's Go</button>
				</form>
			</div>
		)
	}
}

Start.contextTypes = {
	router: React.PropTypes.object
}

export default Start;
