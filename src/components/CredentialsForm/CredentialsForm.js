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
	render() {
		const { formType } = this.props;
		return (
				<Form onSubmit={this.formSubmitHandler} formClass='CredentialsForm'>
					<div className='CredentialsForm-tabs'>
						<div className={'CredentialsForm-tabs-item' + `${formType === 'sign-in' ? ' active' : ''}`}>Sign in</div>
						<div className={'CredentialsForm-tabs-item' + `${formType === 'log-in' ? ' active' : ''}`}>Log in</div>
					</div>
					<div className='CredentialsForm-Form'>
						{ formType === 'sign-in' && <SignInForm/> }
						{ formType === 'log-in' && <LogInForm/> }
					</div>
					<div className='CredentialsForm-sidebar'>
						{ formType === 'sign-in' ? 'SIGN IN' : 'LOG IN' }
					</div>
					<Button className="CredentialsForm-btn" type="submit">{ formType === 'sign-in' ? 'SIGN IN' : 'LOG IN' }</Button>
				</Form>
		)
	}
}

const mapStateToProps = state => {
	return {
	  email: state.email, 
	  password: state.password
	};
  };
  const mapDispatchToProps = dispatch => {
	return {
	  submit: (contentObj)=> dispatch(credentialsFormActions.submit(contentObj))
	};
  }
  export default connect(mapStateToProps, mapDispatchToProps)(CredentialsForm);
