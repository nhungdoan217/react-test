import React, { Component } from 'react';


class TableHeader extends Component 
{
	state = {
		sortDirection: 'asc'
	}

	sortParticipants = () => {
		let sortDirection = this.state.sortDirection;

		if (sortDirection === 'asc') {
			this.setState({
				sortDirection: 'desc'
			});
		} else {
			this.setState({
				sortDirection: 'asc'
			});
		}

		this.props.sortParticipants(this.state.sortDirection);
	}	

	render() {
		let arrowClass = this.state.sortDirection === 'desc' ? 'fa-arrow-down' : 'fa-arrow-up';
		return (
			<div className="header-row-container">
				<div className="header-row name" onClick={this.sortParticipants}>Name <i className={`fas ${arrowClass}`}></i></div>
				<div className="header-row email">E-mail address</div>
				<div className="header-row phone">Phone number</div>
			</div>
		)
	}
}

export default TableHeader;