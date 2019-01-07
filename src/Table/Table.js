import React, { Component } from 'react';
import AddNewParticipant from './AddNewParticipant';
import ParticipantList from './ParticipantList';
import TableHeader from './TableHeader';
import Participants from './participants';
import '../css/table.css';

class Table extends Component 
{
	state = {
		participants: Participants.sort((a, b) => {return a.name > b.name ? 1 : -1})
	};

	renderParticipantList = () => {
		let sortedParticipants = this.state.participants;
		return sortedParticipants.map((participant, index) => {
			return <ParticipantList 
					participant={participant}
					changeParticipant={this.changeParticipant}
					key={index}
					/>
		});
	};

	changeParticipant = (saveParticipant, action) => {
		let participants = this.state.participants;
		let participantIndex = participants.findIndex(participant => participant.id === saveParticipant.id);

		if (action === 'save') {
			participants[participantIndex] = saveParticipant;
		} else {
			participants.splice(participantIndex, 1);
		}

		this.setState({
			participants: participants
		})
	};

	sortParticipants = (direction, dataToSort) => {
		let sortedParticipants = this.state.sortedParticipants;
		if (direction === 'desc') {
			sortedParticipants = this.state.participants.sort((a, b) => {return a[dataToSort] > b[dataToSort] ? 1 : -1});	
		} else {
			sortedParticipants = this.state.participants.sort((a, b) => {return a[dataToSort] < b[dataToSort] ? 1 : -1});
		}

		this.setState({
			participants: sortedParticipants
		})
	}

	addNewParticipant = (newParticipant) => {
		let newParticipants = this.state.participants;
		newParticipants.push(newParticipant);

		this.setState({participants: newParticipants});
	}

	render() {
		return (
			<React.Fragment>
				<nav className="nav-container">
					<div className="logo"></div>
					<div className="software">Software</div>
				</nav>
				<h1>List of participants</h1>
				<AddNewParticipant addNewParticipant={this.addNewParticipant}/>
				<TableHeader sortParticipants={this.sortParticipants}/>
				{this.renderParticipantList()}
			</React.Fragment>
		)
	}
}

export default Table;