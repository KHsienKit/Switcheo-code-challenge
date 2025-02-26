import { useState, useEffect } from 'react'
import axios from "axios";
import CurrencyContainer from './Components/CurrencyContainer.tsx';
import SwapIcon from './Components/SwapIcon.tsx';

const App = () => {

  	const [sellCurrency, setSellCurrency] = useState<string>("ETH")
	const [sellAmount, setSellAmount] = useState<number>(0);
  	const [buyCurrency, setBuyCurrency] = useState<string>("USD")
	const [buyAmount, setBuyAmount] = useState<number>(0);
	const [prices, setPrices] = useState<Record<string, number>>({})
	const [isSellFocused, setIsSellFocused] = useState<boolean>(false)

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

	const focusOnSell = () => {
		return setIsSellFocused(true);
	}

	const focusOnBuy = () => {
		return setIsSellFocused(false);
	}

	const swap = () => {
		setSellCurrency(buyCurrency)
		setSellAmount(buyAmount)
		setBuyCurrency(sellCurrency)
		setBuyAmount(sellAmount)
	}

	useEffect(() => {
        axios.get("https://interview.switcheo.com/prices.json")
			.then((prices) => {
				const data = prices.data;
				setPrices(() => {
					let oj: Record<string,number> = {}
					for (let i = 0; i < data.length; i += 1) {
						// prev[data[i]["currency"]] = data[i]["price"]
						oj[data[i]["currency"]] = data[i]["price"]
					}
					return oj;
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
      		<div className="flex flex-row default-border relative">
				<CurrencyContainer
					isSellContainer={true} 
					sellCurrency={sellCurrency} 
					changeSellCurrency={changeSellCurrency} 
					sellAmount={sellAmount} 
					changeSellAmount={changeSellAmount} 
					buyCurrency={buyCurrency} 
					changeBuyCurrency={changeBuyCurrency} 
					buyAmount={buyAmount} 
					changeBuyAmount={changeBuyAmount} 
					prices={prices}
					isSellFocused={isSellFocused}
					focusOnCurrent={focusOnSell}/>
				<SwapIcon 
					swap={swap}/>
				<CurrencyContainer  
					isSellContainer={false}
					sellCurrency={sellCurrency} 
					changeSellCurrency={changeSellCurrency} 
					sellAmount={sellAmount} 
					changeSellAmount={changeSellAmount} 
					buyCurrency={buyCurrency} 
					changeBuyCurrency={changeBuyCurrency} 
					buyAmount={buyAmount} 
					changeBuyAmount={changeBuyAmount}
					prices={prices}
					isSellFocused={isSellFocused}
					focusOnCurrent={focusOnBuy}/>
      		</div>
    	</div>
  	)
}

export default App
