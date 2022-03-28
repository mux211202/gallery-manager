import React, { Component } from 'react';
class LogInForm extends Component {

  

  render() {
    return (
      <>
        <label>E-mail:</label>
        <br/>
        <input className='email' type='email'/>
        <label>Password:</label>
        <br/>
        <input type='password' className='firstPassword'/>
      </>
    )
  }
}



export default LogInForm;
