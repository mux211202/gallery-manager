import React, { Component } from 'react'

export default class GalleryItem extends Component {
	render() {
		const { url, description } = this.props.item;
		return (
			<div className='Gallery-item'>
				<div className='Gallery-item-overlay'></div>
				<div className='Gallery-item-description'>{description}</div>
				<img src={url}/>	
			</div>
		)
	}
}
