// import { useState } from 'react';

import LoginForm from './LoginForm';
import Logo from './Logo';
import Center from './ui/Center';

function MainDisplay (props) {
	// const [ loggedIn, setLoggedIn ] = useState(false);

	// function userLoggedIn () {
	// 	setLoggedIn(true);
	// }

	return (
		<Center>
			<Logo />
			<LoginForm />
		</Center>
	);
}

export default MainDisplay;
