import { useState, useEffect } from 'react'
import axios from "axios";
import SellCurrencyContainer from "./Components/SellCurrencyContainer.tsx"
import BuyCurrencyContainer from "./Components/BuyCurrencyContainer.tsx"

const App = () => {
  	const [sellCurrency, setSellCurrency] = useState<string>("ETH")
	const [sellAmount, setSellAmount] = useState<number>(0);
  	const [buyCurrency, setBuyCurrency] = useState<string>("USD")
	const [buyAmount, setBuyAmount] = useState<number>(0);
	const [prices, setPrices] = useState<Record<string, number>>({})

	const changeSellCurrency = (currency: string) => {
		return setSellCurrency(currency);
	}

	const changeSellAmount = (amount: number) => {
		return setSellAmount(amount);
	}

	const changeBuyCurrency = (currency: string) => {
		return setBuyCurrency(currency);
	}

	const changeBuyAmount = (amount: number) => {
		return setBuyAmount(amount);
	}

	useEffect(() => {
        axios.get("https://interview.switcheo.com/prices.json")
			.then((prices) => {
				const data = prices.data;
				setPrices((prev) => {
					for (let i = 0; i < data.length; i += 1) {
						prev[data[i]["currency"]] = data[i]["price"]
					}
					return prev;
				})
        	})
			.catch(error => {
            	console.log(error);
        	});
    }, []);

  	return (
    	<div>
      		<div className="px-96 default-border">
        		<h1 className="text-6xl ">Currency Swap</h1>
      		</div>
      		<div className="flex flex-row default-border">
				<SellCurrencyContainer currency={sellCurrency} changeCurrency={changeSellCurrency} amount={sellAmount} changeAmount={changeSellAmount} prices={prices}/>
				<BuyCurrencyContainer currency={buyCurrency} changeCurrency={changeBuyCurrency} amount={sellAmount} changeAmount={changeSellAmount} prices={prices}/>
      		</div>
    	</div>
  	)
}

export default App
