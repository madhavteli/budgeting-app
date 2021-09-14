import React, {useState} from 'react';

import classes from './AddBudget.module.css';

const AddBudget = props => {
	const [userInput, setUserInput] = useState({
		name:'',
		amount:''
	});

	const inputChangeHandler = event => {
		setUserInput({
			...userInput, [event.target.name]: event.target.value,
		});
	};

	const formSaveHandler = (event) => {
		event.preventDefault();
		const { name, amount } = userInput;
		if (name === '' || amount === '') return;
		props.onAddBudgetFormSave(userInput);
		setUserInput({name: '', amount: ''});
	};

	return(
		<form onSubmit={formSaveHandler} className={classes.formStyle}>
			<div className={classes.formRow}>
				<input type='text' name='name' value={userInput.name} onChange={inputChangeHandler} placeholder='Name'/>
			</div>
			<div className={classes.formRow}>
				<input type='number' name='amount' value={userInput.amount} onChange={inputChangeHandler} min='0' max='100000' placeholder='$ Amount'/>
			</div>
			<button type='submit'>+ Add</button>
		</form>
	);
};

export default AddBudget;