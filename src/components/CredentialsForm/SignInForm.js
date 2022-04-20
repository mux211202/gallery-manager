import React, { Component, createRef } from 'react';

export default class SignInForm extends Component {
	constructor(){
		super();
		this.firstPassword = createRef();
		this.secondPassword = createRef();
	}
	setPassword = () => {
		const { setPassword } = this.props;
		setPassword(this.firstPassword.current.value);	
	}
	setSecondPassword = () => {
		const { setSecondPassword } = this.props;
		setSecondPassword(this.secondPassword.current.value);	
	}
render() {
	const { setEmail } = this.props;
	const { setPassword, firstPassword, secondPassword, setSecondPassword } = this;
	return (
	<>
		<label>E-mail:</label>
		<br/>
		<input noValidate onBlur={setEmail} className='email' type='email'/>
		<label>Password:</label>
		<br/>
		<input onBlur={setPassword} ref={firstPassword} type='password' className='firstPassword'/>
		<label>Repeat password:</label>
		<br/>
		<input onBlur={setSecondPassword} ref={secondPassword} type='password' className='secondPassword'/>
	</>
	)
}
}
