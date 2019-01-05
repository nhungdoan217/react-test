import React, { Component } from 'react';


class AddNewParticipant extends Component 
{
	state = {
		participant: {}
	}

	changeParticipantData = (participantState, participantData) => {
		let editedParticipant = this.state.participant;
		editedParticipant[participantState] = participantData;
		this.setState({
			participant : editedParticipant
		});
	}

	render() {
		return (
			<div className="add-participant-container">
				<input className="add-participant name" onChange={(e) => this.changeParticipantData('name', e.target.value)} placeholder="Full name"/>
				<input className="add-participant email" onChange={(e) => this.changeParticipantData('email', e.target.value)} placeholder="E-mail address"/>
				<input className="add-participant phone" onChange={(e) => this.changeParticipantData('phone', e.target.value)} placeholder="Phone number"/>
				<div className="add-participant add-new" onClick={this.addNewParticipant}>Cancel</div>
			</div>
		)
	}
}

export default AddNewParticipant;