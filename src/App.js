import React, { Fragment, useState } from 'react';

import Navbar from "./Components/Navbar";
import Sidebar from "./Components/Sidebar";
import AddBudget from "./Components/AddBudget";
import BudgetList from "./Components/BudgetList";

const hhhhh = {
	width: '75%'
}

function App() {
	const [budgeted, setBudgeted] = useState(0);
	const [BudgetItems, setBudgetItems] = useState([]);

	const onAddBudgetFormSave = (enteredBugetDetails) => {
		setBudgeted(prevState => parseInt(enteredBugetDetails.amount) + parseInt(prevState));
		setBudgetItems(prevState => {
			const enteredBudgetItem = {
				id:prevState.length + 1, ...enteredBugetDetails
			};
			return [...prevState, enteredBudgetItem];
		});
	};

	const onRemoveBudgetClick = (id, amount) => {
		setBudgeted(prevState => prevState - parseInt(amount));
		setBudgetItems(prevState => prevState.filter(value => value.id !== id) );
	};

	const createBudgetList = (BudgetItem) => {
		return (
			<BudgetList BudgetDetails={BudgetItem} key={BudgetItem.id} onRemoveBudgetClick={onRemoveBudgetClick}/>
		);
	};

	return (
		<Fragment>
			<Navbar/>
			<Sidebar budgeted={budgeted}/>
			<div style={hhhhh}>
				<AddBudget onAddBudgetFormSave={onAddBudgetFormSave}/>
				<div>
					{BudgetItems.length === 0 && <span>Add a budget to get started</span>}
					{BudgetItems.length > 0 && BudgetItems.map(createBudgetList)}
				</div>
			</div>
		</Fragment>
	);
};

export default App;