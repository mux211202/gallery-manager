import React, { Component } from 'react';
import Form from '../Layout/Form/Form';
import './CredentialsForm.scss';
import SignInForm from './SignInForm';
import LogInForm from './LogInForm';
import Button from '../Layout/Button/Button';
import { connect } from 'react-redux';
import { credentialsFormActions } from '../../store/slices/credentialsForm';
class CredentialsForm extends Component {
	
	formSubmitHandler = (e) => {
		e.preventDefault();
		const form = e.target;
		const email = form.querySelector('.email').value;
		const password = form.querySelector('.firstPassword').value;
		const contentObj = {email, password}
		this.props.submit(contentObj);
	}
	toggleFormMode = (content) => {
		this.props.toggleCredentialsFormMode(content);
	}
	render() {
		console.log(this.props)
		const {credentialsFormMode} = this.props;
		return (
				<Form onSubmit={this.formSubmitHandler} formClass='CredentialsForm'>
					<div className='CredentialsForm-tabs'>
						<div 
						onClick={()=>this.toggleFormMode('sign-in')}
						className={'CredentialsForm-tabs-item' + `${credentialsFormMode === 'sign-in' ? ' active' : ''}`}>
							Sign in
						</div>
						<div 
						onClick={()=>this.toggleFormMode('log-in')}
						className={'CredentialsForm-tabs-item' + `${credentialsFormMode === 'log-in' ? ' active' : ''}`}>
							Log in
						</div>
					</div>
					<div className='CredentialsForm-Form'>
						{ credentialsFormMode === 'sign-in' && <SignInForm/> }
						{ credentialsFormMode === 'log-in' && <LogInForm/> }
					</div>
					<div className='CredentialsForm-sidebar'>
						{ credentialsFormMode === 'sign-in' ? 'SIGN IN' : 'LOG IN' }
					</div>
					<Button className="CredentialsForm-btn" type="submit">{ credentialsFormMode === 'sign-in' ? 'SIGN IN' : 'LOG IN' }</Button>
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
		toggleCredentialsFormMode: (content) => dispatch(credentialsFormActions.toggleCredentialsFormMode(content))
	};
}
  export default connect(mapStateToProps, mapDispatchToProps)(CredentialsForm);
