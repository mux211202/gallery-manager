import React, { Component } from 'react';
import { DUMMYURLS } from '../../dummyURLS';
import GalleryItem from './GalleryItem';
import './Gallery.scss';

export default class Gallery extends Component {
	render() {
		return (
		<div className='Gallery'>
			{ DUMMYURLS.map( url => <GalleryItem src={url}/> ) }
		</div>
		)
	}
}
