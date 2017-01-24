import React from 'react';

const Header = (props) => {
	return (
		<header>
			<h1>{props.name}'s To Do List</h1>
		</header>
	)	
}

Header.propTypes = {
	name: React.PropTypes.string.isRequired
}

export default Header;
