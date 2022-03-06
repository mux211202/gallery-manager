import React, { PureComponent } from 'react';
import Button from '../../components/Layout/Button/Button';
import './MainPage.scss';

import Gallery from '../../components/Gallery/Gallery';
export default class MainPage extends PureComponent {
  render() {
    return (
      <div className='MainPage'>
        <div className='MainPage-title'>Welcome to Gallery Manager</div>
        <Button className='MainPage-button'>
            <div className='MainPage-button-text'>
                <span className='MainPage-button-text_bigger'>+</span> create gallery
            </div>
        </Button>
      </div>  
    )
  }
}
