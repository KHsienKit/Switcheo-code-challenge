# Anti-Patterns

- Declaration of Interfaces should be declared elsewhere and then imported when used
- `WalletBalance` and `FormattedWalletBalance` interfaces are missing `blockchain` property
- (Line 21) Not declaring type in `useState`
    - i.e It should be `const [prices, setPrices] = useState<Record<string, number>>({})`
- (Line 32) Since this is TypeScript, avoid using the `any` type
    - i.e In the getPriority function, the parameter `blockchain` should be of type `string` 
- (Line 32) The getPriority function can be declared outside of the component
- (Line 50-66) Function used in sortedBalances can be abstracted out rather than as an anonymous function
    - The function can also be declared outside of the component
- (Line 52) Variable lhsPriority was not declared earlier. Probably a typo of balancePriority
- (Line 52-53) Instead of having nested if statements, better to combine the if statements
    - i.e if ((balancePriorty > -99) && (balance.amount <= 0)) {return true}
- (Line 65) Missing a `return 0` line in the sort function
    - This is to make sure the comparator has the property of reflexitivity (a is equal to itself)
- (Line 76) Should be using formattedBalances instead of sortedBalances as the input takes in balance of interface `FormattedWalletBalance`

# Others

- Since there was no constraints stated for the question, I decided to use axios for my get request
- Looking at the https://interview.switcheo.com/prices.json data, there seems to be duplicates in the currencies but with different prices. I am assuming that I am only supposed to take the price of the duplicate currency with the highest index
- (Line 21) The default value of prices is an empty object `{}`. Given that the data is an array of objects with duplicates and looking at the code, I decided that the best way to process the data is to add key value pairs (the key being the currency and the value being the price) to the prices state.
    - This is to prevent duplicates in the final prices