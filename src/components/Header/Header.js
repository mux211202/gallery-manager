import { PureComponent } from "react";
import Button from "../Layout/Button/Button";
import './Header.scss';

export default class Header extends PureComponent {
	constructor(){
		super();
		this.state = {
			isLogged: false
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
				<Button className="Header-buttons-item">My albums</Button>
				<Button className="Header-buttons-item">Log out</Button>
			</>)
		return (
			<header className="Header">
				<div className="Header-logo">GM</div>
				<div className="Header-buttons">
					{ headerButtons }
				</div>
			</header>
		)
	}
}
