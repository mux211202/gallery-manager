import React, { Component } from 'react';
class LogInForm extends Component {

  

  render() {
    const { setEmail, setPassword } = this.props;
    return (
      <>
        <label>E-mail:</label>
        <br/>
        <input noValidate onBlur={setEmail} className='email' type='email'/>
        <label>Password:</label>
        <br/>
        <input onBlur={(e)=>setPassword(e.target.value)} type='password' className='firstPassword'/>
      </>
    )
  }
}



export default LogInForm;
