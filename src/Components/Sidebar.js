import React, { useState } from 'react';

const hhhhh = {
	width: '25%',
	float:'left'
}

const Sidebar = props => {
	const [monthlyIncome, setMonthlyIncome] = useState(0);

	const unbudgeted = monthlyIncome - props.budgeted;

	const monthlyIncomeChangeHandler = (event) => {
		setMonthlyIncome(event.target.value);
	};

	return(
		<div style={hhhhh}>
			<h2>Monthly Income</h2>
			<span>$</span>
			<input type='number' name='montly_income' value={monthlyIncome} min='0' max='100000' step='50' onChange={monthlyIncomeChangeHandler}/>
			<h3>Unbudgeted</h3>
			<p>
				$ {unbudgeted}
			</p>
		</div>
	);
};

export default Sidebar;