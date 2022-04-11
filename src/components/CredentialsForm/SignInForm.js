import React, { Component, createRef } from 'react'
import { arePasswordsEaqual, checkPasswordLength } from '../../validation/validationFunctions';

export default class SignInForm extends Component {
	constructor(){
		super();
		this.firstPassword = createRef();
		this.secondPassword = createRef();
	}
	comparePasswords = () => {
		const { setPassword, setNotification } = this.props;
		let { firstPassword, secondPassword } = this;	
		firstPassword = firstPassword.current.value;
		secondPassword = secondPassword.current.value;
		const areEaqual = arePasswordsEaqual(firstPassword, secondPassword);
		if ( areEaqual.isValid ) {
			const checkLength = checkPasswordLength( firstPassword, 6 );
			if ( checkLength.isValid ){
				setPassword( checkLength.result );
				setNotification(false);
			}else { 
				setNotification( checkLength.result );
			}
		} else {
			setNotification ( areEaqual.result );
		}
	}
render() {
	const { setEmail } = this.props;
	const { comparePasswords, firstPassword, secondPassword } = this;
	return (
	<>
		<label>E-mail:</label>
		<br/>
		<input onBlur={setEmail} className='email' type='email'/>
		<label>Password:</label>
		<br/>
		<input onBlur={comparePasswords} ref={firstPassword} type='password' className='firstPassword'/>
		<label>Repeat password:</label>
		<br/>
		<input onBlur={comparePasswords} ref={secondPassword} type='password' className='secondPassword'/>
	</>
	)
}
}
