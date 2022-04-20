import React, { Component } from 'react';
import Form from '../Layout/Form/Form';
import './CredentialsForm.scss';
import SignInForm from './SignInForm';
import LogInForm from './LogInForm';
import Button from '../Layout/Button/Button';
import { connect } from 'react-redux';
import { credentialsFormActions } from '../../store/slices/credentialsForm';
import Notification from '../Layout/Notification/Notification';
import { authAction } from '../../store/slices/auth';
import { uiActions } from '../../store/slices/ui';
import { arePasswordsValid, isEmailValid } from '../../validation/validationFunctions';

class CredentialsForm extends Component {
	constructor(){
		super();
		this.state = {
			email:'',
			password:'',
			secondPassword:''
		}
	}
	
	setEmail = (e) => {
		this.setState({email: e.target.value});
	}
	setPassword = (password) => { 
		this.setState({password}) 
	}
	setSecondPassword = (secondPassword) => { 
		this.setState({secondPassword}) 
	}
	formSubmitHandler = (e) => {
		e.preventDefault();
		const { email, password, secondPassword } = this.state;
		const { credentialsFormMode, auth } = this.props;
		const contentObj = {email, password}
		this.props.submit(contentObj);

		if ( credentialsFormMode === 'log-in' ) {
			auth(email.trim(), password, 'log-in')
		}
		
		if ( credentialsFormMode === 'sign-in' ) {
			//validation
			const passwordsValid = arePasswordsValid(password, secondPassword);
			const emailValid = isEmailValid(email);
			if( passwordsValid.isValid && emailValid.isValid ) {
				console.log(emailValid)
				auth(email.trim(), password, 'sign-up')
			} else {
				let obj = {
					isVisible: true,
					status: 'warning',
					title: '',
					message: ''
				}
				if( passwordsValid.isValid && !emailValid.isValid ) {
					obj.message = emailValid.result;
					this.props.toggleNotification(obj);
				} else if ( !passwordsValid.isValid && emailValid.isValid ) {
					obj.message = passwordsValid.result;
					this.props.toggleNotification(obj);
				} else {
					obj.message = `${emailValid.result} and ${passwordsValid.result.toLowerCase()}`;
					this.props.toggleNotification(obj);
				}
			}
		}
	}
	toggleFormMode = (content) => {
		this.props.toggleCredentialsFormMode(content);
	}
	render() {
		const { credentialsFormMode, isNotificationVisible, notification } = this.props;
		const { setEmail, setPassword, setSecondPassword } = this;
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
						{ credentialsFormMode === 'sign-in' && 
						<SignInForm setEmail={setEmail} setPassword={setPassword} setSecondPassword={setSecondPassword}/> }
						{ credentialsFormMode === 'log-in' && 
						<LogInForm  setEmail={setEmail} setPassword={setPassword}/> }
					</div>
					<div className='CredentialsForm-sidebar'>
						{ credentialsFormMode === 'sign-in' ? 'SIGN UP' : 'LOG IN' }
					</div>
					<Button className="CredentialsForm-btn" type="submit">{ credentialsFormMode === 'sign-in' ? 'SIGN IN' : 'LOG IN' }</Button>
					{ isNotificationVisible && <Notification notsignUpification={ notification }/> }
				</Form>
		)
	}
}

const mapStateToProps = state => {
	const slice = state.credentialsFormReducer;
	const uiSlice = state.uiSliceReducer;
	return {
		credentialsFormMode: slice.credentialsFormMode,
		email: slice.email, 
		password: slice.password,
		isNotificationVisible: uiSlice.isNotificationVisible,
		notification: uiSlice.notification
	};
};
const mapDispatchToProps = dispatch => {
	return {
		submit: (contentObj)=> dispatch(credentialsFormActions.submit(contentObj)), 
		toggleCredentialsFormMode: (content) => dispatch(credentialsFormActions.toggleCredentialsFormMode(content)),
		auth: (email, password, mode) => dispatch(authAction(email, password, mode)),
		toggleNotification: (notificationObject) => dispatch(uiActions.toggleNotification(notificationObject)) //{isVisible,status, title, message}		
	};
}
  export default connect(mapStateToProps, mapDispatchToProps)(CredentialsForm);
