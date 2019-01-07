import React, { Component } from 'react';
import Form from 'react-validation/build/form';
import Input from 'react-validation/build/input';
import CheckButton from 'react-validation/build/button';
import { isEmail, isEmpty, isMobilePhone } from 'validator';

const required = (value) => {
  if (isEmpty(value)) {
      return <small className="form-text text-danger">This field is required</small>;
  }
}

const email = (value) => {
  if (!isEmail(value)) {
      return <small className="form-text text-danger">Invalid email format</small>;
  }
}

const phone = (value) => {
  if (!isMobilePhone(value)) {
      return <small className="form-text text-danger">Invalid phone number</small>;
  }
}

class AddNewParticipant extends Component 
{
	state = {
		participant: {}
	}

	changeParticipantData = (participantState, participantData) => {
		let editedParticipant = this.state.participant;
		editedParticipant[participantState] = participantData;
		console.log(editedParticipant);
		this.setState({
			participant : editedParticipant
		});
	}

	addNewParticipant = () => {
		this.form.validateAll();
		console.log(this.state.participant)

		if (this.checkBtn.context._errors.length === 0) {
			this.props.addNewParticipant(this.state.participant);
			this.setState({participant: {}});
		}
	}

	render() {
		return (
			<Form className="add-participant-container" id="add-participant-form" ref={ el => { this.form = el }}>
				<div className="add-participant name">
					<Input name='name' 
							validations={[required]} 
							onChange={(e) => this.changeParticipantData('name', e.target.value)} 
							placeholder="Full name"
					/>
				</div>
				<div className="add-participant email">
					<Input name="email" 
							validations={[required, email]} 
							onChange={(e) => this.changeParticipantData('email', e.target.value)} 
							placeholder="E-mail address"
					/>
				</div>
				<div className="add-participant phone">
					<Input name="phone" 
							validations={[required, phone]} 
							onChange={(e) => this.changeParticipantData('phone', e.target.value)} 
							placeholder="Phone number"
					/>
				</div>
				<div className="add-participant add-new">
					<div className="btn-add-new" onClick={this.addNewParticipant}>Add New</div>
				</div>
				<CheckButton style={{ display: 'none' }} ref={el => { this.checkBtn = el }} />
			</Form>
		)
	}
}

export default AddNewParticipant;