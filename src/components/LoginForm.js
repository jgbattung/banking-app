import { useState } from 'react';
import BankDisplay from './BankDisplay';
import BankFeatures from './BankFeatures';

import classes from './LoginForm.module.css';
import Card from './ui/Card';
import MainCard from './ui/MainCard';

function LoginForm (props) {
	const [ userLoggedIn, setUserLoggedIn ] = useState(false);
	const [ errorMessage, setErrorMessages ] = useState({});

	const database = [
		{
			username: 'user1',
			email: 'email@gmail.com',
			password: 'pass123'
		},
		{
			username: 'user2',
			email: 'email@yahoo.com',
			password: 'password'
		}
	];

	const errors = {
		uname: 'invalid username',
		email: 'invalid email',
		pass: 'invalid password'
	};

	function loginHandler (e) {
		e.preventDefault();
		// setUserLoggedIn(true);

		let { uname, email, pass } = document.forms[0];

		const userData = database.find((user) => user.username === uname.value);

		if (userData) {
			if (userData.password !== pass.value) {
				setErrorMessages({ name: 'pass', message: errors.pass });
			} else if (userData.email !== email.value) {
				setErrorMessages({ name: 'email', message: errors.email });
			} else {
				setUserLoggedIn(true);
			}
		} else {
			setErrorMessages({ name: 'uname', message: errors.uname });
		}
	}

	function renderErrorMessage (name) {
		name === errorMessage.name && <div className="error">{errorMessage.message}</div>;
		console.log(errorMessage.message);
	}

	const renderForm = (
		<MainCard>
			<form onSubmit={loginHandler}>
				<div className={classes.control}>
					<input type="text" name="uname" required placeholder="username..." />
					{renderErrorMessage('uname')}
				</div>

				<div className={classes.control}>
					<input type="email" name="email" required placeholder="email..." />
					{renderErrorMessage('email')}
				</div>

				<div className={classes.control}>
					<input type="password" name="pass" required placeholder="password..." />
					{renderErrorMessage('pass')}
				</div>

				<div>
					<input className={classes.actions} type="submit" value="Log in" />
				</div>
			</form>
		</MainCard>
	);

	return <div>{userLoggedIn ? <BankDisplay /> : renderForm}</div>;
}

export default LoginForm;
