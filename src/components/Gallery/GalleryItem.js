import React, { Component } from 'react'

export default class GalleryItem extends Component {
	render() {
		const { src } = this.props;
		return (
			<div className='Gallery-item'>
				<img src={src}/>	
			</div>
		)
	}
}
