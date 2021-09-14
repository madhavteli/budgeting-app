import React from 'react';

import classes from './BudgetList.module.css';

const BudgetList = (props) => {
	return(
		<div className={classes.budgetItem}>
			<span className={classes.budgetTitle}>{props.BudgetDetails.name}</span>
			<span className={classes.budgetAmount}>${props.BudgetDetails.amount}</span>
			<button onClick={() => props.onRemoveBudgetClick(props.BudgetDetails.id, props.BudgetDetails.amount)} className={classes.closeBtn}>X</button>
		</div>
	)
};

export default BudgetList;