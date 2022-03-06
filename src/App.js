import React from 'react';
import Header from './components/Header/Header';
import MainPage from './pages/MainPage/MainPage';
import './sass/style.scss';
function App() {
	return (
		<div className="container">
			<Header/>
			<MainPage/>
		</div>
	);
}

export default App;
