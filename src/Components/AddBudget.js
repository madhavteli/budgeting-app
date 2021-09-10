import React, {useState} from 'react';

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
		props.onAddBudgetFormSave(userInput);
		setUserInput({name: '', amount: ''});
	};
	return(
		<form onSubmit={formSaveHandler}>
			<input type='text' name='name' value={userInput.name} onChange={inputChangeHandler} placeholder='Name'/>
			<input type='number' name='amount' value={userInput.amount} onChange={inputChangeHandler} min='0' max='100000' placeholder='$ Amount'/>
			<button type='submit'>+ Add</button>
		</form>
	);
};

export default AddBudget;