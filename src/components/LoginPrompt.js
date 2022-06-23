import { useState } from 'react';
import Balance from './Balance';
import BankFeature from './BankFeatures';
import MainBank from './MainBank';

function LoginPrompt (props) {
	const [ mainBankIsOpen, setMainBankIsOpen ] = useState(false);

	function logInHandler () {
		setMainBankIsOpen(true);
	}

	return (
		<div className="container">
			<h2 className="user-prompt">Login to TyraBank</h2>
			<div className="login-inputs">
				<input type="text" placeholder="name" className="login-input" required="true" />
				<input type="email" placeholder="email" className="login-input" required="true" />
				<input type="password" placeholder="password" className="login-input" required="true" />
				<button className="login-btn" onClick={logInHandler}>
					Log In
				</button>
			</div>
			{mainBankIsOpen && <MainBank />}
			{mainBankIsOpen && <Balance />}
			<div className="feature-display flex">
				{mainBankIsOpen && <BankFeature text="Deposit" />}
				{mainBankIsOpen && <BankFeature text="Withdraw" />}
				{mainBankIsOpen && <BankFeature text="Transfer" />}
			</div>
		</div>
	);
}

export default LoginPrompt;
