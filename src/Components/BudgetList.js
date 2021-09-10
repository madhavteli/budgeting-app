import React from 'react';

const BudgetList = (props) => {
	return(
		<div>
			<span>{props.BudgetDetails.name}</span>
			<span>{props.BudgetDetails.amount}</span>
			<button onClick={() => props.onRemoveBudgetClick(props.BudgetDetails.id, props.BudgetDetails.amount)}>X</button>
		</div>
	)
};

export default BudgetList;