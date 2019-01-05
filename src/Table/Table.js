import React, { Component } from 'react';
import AddNewParticipant from './AddNewParticipant';


class Table extends Component 
{
	render() {
		return (
			<React.Fragment>
				<nav className="nav-container">
					<div className="logo"></div>
					<div className="software">Software</div>
				</nav>
				<h1>List of participants</h1>
				<AddNewParticipant />
			</React.Fragment>
		)
	}
}

export default Table;