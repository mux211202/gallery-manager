import { PureComponent } from "react";
import Button from "../Layout/Button/Button";
import { Link } from "react-router-dom";
import './Header.scss';
import { connect } from 'react-redux';
import { credentialsFormActions } from '../../store/slices/credentialsForm';
class Header extends PureComponent {
	constructor(){
		super();
		this.state = {
			isLogged: false
		}
	}

	buttonClickHandler = (content) => {
		this.props.toggleCredentialsForm(content);
	}
	render() {
		const { isLogged } = this.state;
		const headerButtons = !isLogged ? (
		<>
			<Button
			onClick={()=>this.buttonClickHandler('sign-in')}
			className="Header-buttons-item">Sign in</Button>
			<Button
			onClick={()=>this.buttonClickHandler('log-in')}  
			className="Header-buttons-item">Log in</Button>
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

;
const mapDispatchToProps = dispatch => {
	return {
		toggleCredentialsForm: (content) => dispatch(credentialsFormActions.toggleCredentialsForm(content))
	};
}
export default connect(null, mapDispatchToProps)(Header);
