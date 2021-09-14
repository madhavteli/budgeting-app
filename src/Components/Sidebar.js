import React, { useState } from 'react';

import classes from './Sidebar.module.css';

const Sidebar = props => {
	const [monthlyIncome, setMonthlyIncome] = useState(0);

	const unbudgeted = monthlyIncome - props.budgeted;

	const monthlyIncomeChangeHandler = (event) => {
		setMonthlyIncome(event.target.value);
	};

	return(
		<div className={classes.asideStyle}>
			<h2>Monthly Income</h2>
			<div className={classes.lineField}>
				<span>$</span>
				<input type='number' name='montly_income' value={monthlyIncome} min='0' max='100000' step='50' onChange={monthlyIncomeChangeHandler}/>
			</div>
			<h2>Unbudgeted</h2>
			<p className={unbudgeted < 0 && classes.negativeUnbudget}>
				$ {unbudgeted}
			</p>
		</div>
	);
};

export default Sidebar;