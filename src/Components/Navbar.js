import React from 'react';

import classes from './Navbar.module.css';

const Navbar = () => {
	return(
		<header className={classes.header}>
			<h1 className={classes.title}>Time to Budget</h1>
		</header>
	);
};

export default Navbar;