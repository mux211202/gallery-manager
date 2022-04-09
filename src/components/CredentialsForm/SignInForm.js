import React, { Component, createRef } from 'react'

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
		if(firstPassword.length > 0 && secondPassword.length > 0){
			if(firstPassword === secondPassword && firstPassword.length >= 6){
				setPassword(firstPassword);
				setNotification(false)
			} else if(firstPassword === secondPassword && firstPassword.length < 6){
				setNotification({text:'Password must have more then 6 characters', status: 'warning'});
			}else{
				console.log('go')
				setNotification({text:'Passwords are not the same', status: 'warning'});
			}
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
