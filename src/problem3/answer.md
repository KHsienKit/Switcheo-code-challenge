# Anti-Patterns

- Declaration of Interfaces should be declared elsewhere and then imported when used
- (Line 32) Since this is TypeScript, avoid using the `any` type
    - i.e In the getPriority function, the parameter `blockchain` should be of type `String` 
- (Line 32) The getPriority function can be declared outside of the component
- (Line 50-66) Function used in sortedBalances can be abstracted out rather than as an anonymous function
    - The function can also be declared outside of the component
- (Line 52) Variable lhsPriority was not declared earlier. Probably a typo of balancePriority
- (Line 52-53) Instead of having nested if statements, better to combine the if statements
    - i.e if ((balancePriorty > -99) && (balance.amount <= 0)) {return true}
- (Line 65) Missing a `return 0` line in the sort function
    - This is to make sure the comparator has the property of reflexitivity (a is equal to itself)