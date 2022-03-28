import React, { Component } from 'react'

export default class SignInForm extends Component {
  render() {
    return (
      <>
        <label>E-mail:</label>
        <br/>
        <input className='email' type='email'/>
        <label>Password:</label>
        <br/>
        <input type='password' className='firstPassword'/>
        <label>Repeat password:</label>
        <br/>
        <input type='password' className='secondPassword'/>
      </>
    )
  }
}
