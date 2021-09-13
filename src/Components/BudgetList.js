import React from 'react';
import classes from './BudgetList.module.css'

const BudgetList = (props) => {
	return(
		<div className={classes.budgetItem}>
			<span>{props.BudgetDetails.name}</span>
			<span>${props.BudgetDetails.amount}</span>
			<button onClick={() => props.onRemoveBudgetClick(props.BudgetDetails.id, props.BudgetDetails.amount)}>X</button>
		</div>
	)
};

export default BudgetList;