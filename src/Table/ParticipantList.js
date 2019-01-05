import React, { Component } from 'react';

class ParticipantList extends Component 
{
	state = {
		editing: false,
		participant: this.props.participant
	}

	editCancelParticipant = () => {
		let editState = !this.state.editing;
		this.setState({editing: editState});
	}

	saveParticipant = () => {
		this.setState({editing: false});
		this.props.changeParticipant(this.state.participant, 'save');
	}

	changeParticipantData = (participantState, participantData) => {
		let editedParticipant = this.state.participant;
		editedParticipant[participantState] = participantData;
		this.setState({
			participant : editedParticipant
		});
	}

	render() {
		if (this.state.editing) {
			return (
				<div className="participant-row-container participant-editing">
					<input className="participant participant-name" onChange={(e) => this.changeParticipantData('name', e.target.value)} defaultValue={this.props.participant.name}/>
					<input className="participant participant-email" onChange={(e) => this.changeParticipantData('email', e.target.value)} defaultValue={this.props.participant.email}/>
					<input className="participant participant-phone" onChange={(e) => this.changeParticipantData('phone', e.target.value)} defaultValue={this.props.participant.phone}/>
					<div className="participant participant-cancel" onClick={this.editCancelParticipant}>Cancel</div>
					<div className="participant participant-save" onClick={this.saveParticipant}>Save</div>
				</div>
			)
		} else {
			return (
				<div className="participant-row-container">
					<div className="participant participant-name">{this.props.participant.name}</div>
					<div className="participant participant-email">{this.props.participant.email}</div>
					<div className="participant participant-phone">{this.props.participant.phone}</div>
					<div className="participant participant-edit" onClick={this.editCancelParticipant}><i className="fas fa-pen"></i></div>
					<div className="participant participant-delete" onClick={() => this.props.changeParticipant(this.props.participant, 'delete')}><i className="fas fa-trash"></i></div>
				</div>
			)
		}
	}
}

export default ParticipantList;