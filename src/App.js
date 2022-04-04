import React from 'react';
import Header from './components/Header/Header';
import MainPage from './pages/MainPage/MainPage';
import GalleryPage from './pages/GalleryPage/GalleryPage';
import { Route, Routes } from 'react-router-dom';
import CredentialsForm from './components/CredentialsForm/CredentialsForm';
import { connect } from 'react-redux';
import { credentialsFormActions } from './store/slices/credentialsForm';
import './sass/style.scss';
function App(props) {
	const {isCredentialsFormVisible} = props;
	return (
		<div className="container">
			<Header/>
			<Routes>
				<Route path='/' element={ <MainPage/> }/>
				<Route path='/gallery:id' element={ <GalleryPage/> }/>
			</Routes>
			
			{isCredentialsFormVisible && <CredentialsForm />}
		</div>
	);
}
const mapStateToProps = state => {
	const CredentialsSlice = state.credentialsFormReducer;
	return {
		isCredentialsFormVisible: CredentialsSlice.isCredentialsFormVisible,
	};
};

export default connect(mapStateToProps, null)(App);
