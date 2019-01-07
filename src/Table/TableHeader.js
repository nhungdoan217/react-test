import React, { Component } from 'react';


class TableHeader extends Component 
{
	state = {
		sortDirection: 'asc',
		sortObj: {
			name: 'asc',
			email: 'asc',
			phone: 'asc'
		}
	}

	sortParticipants = (dataToSort) => {
		let sortDirection = this.state.sortObj;

		if (sortDirection[dataToSort] === 'asc') {
			this.setState({
				sortObj: {[dataToSort]: 'desc'}
			});
		} else {
			this.setState({
				sortObj: {[dataToSort]: 'asc'}
			});
		}

		this.props.sortParticipants(this.state.sortDirection, dataToSort);
	}	

	arrowClass = (sortDirection) => {
		return sortDirection === 'desc' ? 'fa-arrow-down' : 'fa-arrow-up';
	}

	render() {
		return (
			<div className="header-row-container">
				<div className="header-row name" 
					onClick={() => {this.sortParticipants('name')}}
				>
					Name 
					<i className={`fas ${this.arrowClass(this.state.sortObj.name)}`}></i>
				</div>
				<div className="header-row email" 
					onClick={() => {this.sortParticipants('email')}}
				>
					E-mail address 
					<i className={`fas ${this.arrowClass(this.state.sortObj.email)}`}></i>
				</div>
				<div className="header-row phone" 
					onClick={() => {this.sortParticipants('phone')}}
				>
					Phone number 
					<i className={`fas ${this.arrowClass(this.state.sortObj.phone)}`}></i>
				</div>
			</div>
		)
	}
}

export default TableHeader;