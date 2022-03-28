import React from 'react';
import Header from './components/Header/Header';
import MainPage from './pages/MainPage/MainPage';
import GalleryPage from './pages/GalleryPage/GalleryPage';
import { Route, Routes } from 'react-router-dom';
import CredentialsForm from './components/CredentialsForm/CredentialsForm';
import './sass/style.scss';
function App() {
	return (
		<div className="container">
			<Header/>
			<Routes>
				<Route path='/' element={ <MainPage/> }/>
				<Route path='/gallery:id' element={ <GalleryPage/> }/>
			</Routes>
			
			<CredentialsForm formType='log-in'/>
		</div>
	);
}

export default App;
