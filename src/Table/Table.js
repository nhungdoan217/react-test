import React, { Component } from 'react';
import AddNewParticipant from './AddNewParticipant';
import ParticipantList from './ParticipantList';
import Participants from './participants';
import '../css/table.css';

class Table extends Component 
{
	state = {
		participants: Participants
	};

	renderParticipantList = () => {
		return this.state.participants.map((participant, index) => {
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

	deleteParticipants = (participant) => {

	}

	render() {
		return (
			<React.Fragment>
				<nav className="nav-container">
					<div className="logo"></div>
					<div className="software">Software</div>
				</nav>
				<h1>List of participants</h1>
				<AddNewParticipant />
				{this.renderParticipantList()}
			</React.Fragment>
		)
	}
}

export default Table;