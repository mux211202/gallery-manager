import { PureComponent } from "react";
import Button from "../Layout/Button/Button";
import { Link } from "react-router-dom";
import './Header.scss';

export default class Header extends PureComponent {
	constructor(){
		super();
		this.state = {
			isLogged: true
		}
	}
	render() {
		const { isLogged } = this.state;
		const headerButtons = !isLogged ? (
		<>
			<Button className="Header-buttons-item">Sign in</Button>
			<Button className="Header-buttons-item">Sign up</Button>
		</>
		) :(<>
				<Link to='/gallery1'><Button className="Header-buttons-item">My albums</Button></Link>
				<Button className="Header-buttons-item">Log out</Button>
			</>)
		return (
			<header className="Header">
				<Link to='/'><div className="Header-logo">GM</div></Link>
				<div className="Header-buttons">
					{ headerButtons }
				</div>
			</header>
		)
	}
}
