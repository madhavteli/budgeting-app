# Instructions
Create a simple budgeting app that tracks a user's income and expenses and shows the remainder.

See the final result [here](https://zx37jw1n23.codesandbox.io/). Make sure to add monthly expenses and monthly income to see all of the ways the UI can change.

## Requirements

It should:
- look like the final result linked above
- allow a user to enter their monthly income
- allow a user to add monthly expenses (name and cost amount)
- allow a user to delete monthly expenses
- deduct monthly expenses from monthly income and display the difference under "Unbudgeted"

## Approach

- Figure out how to break the UI into components
- Figure out what state you need to track and which component should keep it
- HINT: Don't track the unbugeted amount in state
- HINT: Track expenses as an array
- Use proper react methods to update app state
- Use `map` to render monthly expenses (remember to add keys!)
- Use spread syntax to add a monthly expense to state
- Use the array `filter` method to delete a monthly expense from state
- Use the array `reduce` method to calculate the unbudgeted amount (hint: use monthly expenses as the source and monthly income as the starting value)
