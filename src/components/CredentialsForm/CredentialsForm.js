import React, { Component } from 'react';
import Form from '../Layout/Form/Form';
import './CredentialsForm.scss';
import SignInForm from './SignInForm';
import LogInForm from './LogInForm';
import Button from '../Layout/Button/Button';
import { connect } from 'react-redux';
import { credentialsFormActions } from '../../store/slices/credentialsForm';
import Notification from '../Layout/Notification/Notification';
import { signUpAction } from '../../store/slices/auth';

class CredentialsForm extends Component {
	constructor(){
		super();
		this.state = {
			isNotificationVisible: false, 
			email:'',
			password:'',
		}
	}
	
	setEmail = (e) => {
		console.log(e.target.value)
		this.setState({email: e.target.value});
	}
	setPassword = (password) => { 
		console.log(password)
		this.setState({password}) 
	}
	setNotification = (isNotificationVisible) => {
		this.setState({isNotificationVisible});
	}
	formSubmitHandler = (e) => {
		e.preventDefault();
		const { email, password } = this.state;
		const { credentialsFormMode, signUp } = this.props;
		const contentObj = {email, password}
		this.props.submit(contentObj);

		if ( credentialsFormMode === 'log-in' ) {
			return
		}
		
		if ( credentialsFormMode === 'sign-in' ) {
			signUp(email.trim(), password)
		}
	}
	toggleFormMode = (content) => {
		this.props.toggleCredentialsFormMode(content);
	}
	render() {
		console.log(this.props)
		const { credentialsFormMode } = this.props;
		const { isNotificationVisible } = this.state;
		const { setEmail, setNotification, setPassword } = this;
		return (
				<Form onSubmit={this.formSubmitHandler} formClass='CredentialsForm'>
					<div className='CredentialsForm-tabs'>
						<div 
						onClick={()=>this.toggleFormMode('sign-in')}
						className={`CredentialsForm-tabs-item ${credentialsFormMode === 'sign-in' ? ' active' : ''}`}>
							Sign in
						</div>
						<div 
						onClick={()=>this.toggleFormMode('log-in')}
						className={`CredentialsForm-tabs-item ${credentialsFormMode === 'log-in' ? ' active' : ''}`}>
							Log in
						</div>
					</div>
					<div className='CredentialsForm-Form'>
						{ credentialsFormMode === 'sign-in' && <SignInForm setNotification={setNotification} setEmail={setEmail} setPassword={setPassword}/> }
						{ credentialsFormMode === 'log-in' && <LogInForm setNotification={setNotification} setEmail={setEmail} setPassword={setPassword}/> }
					</div>
					<div className='CredentialsForm-sidebar'>
						{ credentialsFormMode === 'sign-in' ? 'SIGN IN' : 'LOG IN' }
					</div>
					<Button className="CredentialsForm-btn" type="submit">{ credentialsFormMode === 'sign-in' ? 'SIGN IN' : 'LOG IN' }</Button>
					{ isNotificationVisible && isNotificationVisible.text.length > 0 && isNotificationVisible.status.length > 0 && <Notification text={ isNotificationVisible.text } status = {isNotificationVisible.status}/> }
				</Form>
		)
	}
}

const mapStateToProps = state => {
	const slice = state.credentialsFormReducer;
	return {
		credentialsFormMode: slice.credentialsFormMode,
		email: slice.email, 
		password: slice.password
	};
};
const mapDispatchToProps = dispatch => {
	return {
		submit: (contentObj)=> dispatch(credentialsFormActions.submit(contentObj)), 
		toggleCredentialsFormMode: (content) => dispatch(credentialsFormActions.toggleCredentialsFormMode(content)),
		signUp: (email, password) => dispatch(signUpAction(email, password))
	};
}
  export default connect(mapStateToProps, mapDispatchToProps)(CredentialsForm);
