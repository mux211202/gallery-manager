import React, { Component } from 'react'
import './Form.scss'
export default class Form extends Component {
  render() {
    const { onSubmit, formClass, children } = this.props;
    return (
        <>
            <div className='overlay'></div>
            <form onSubmit={onSubmit} 
            className={'Form'+ ` ${formClass}`}> 
              {children} 
            </form>
        </>
    )
  }
}
