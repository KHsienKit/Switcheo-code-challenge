import { useState } from 'react'
import axios from "axios";
import SellCurrencyContainer from "./Components/SellCurrencyContainer.tsx"
import BuyCurrencyContainer from "./Components/BuyCurrencyContainer.tsx"

const App = () => {
  	const [sellCurrency, setSellCurrency] = useState<string>("ETH")
  	const [buyCurrency, setBuyCurrency] = useState<string>("USD")
	const [prices, setPrices] = useState<Record<string, number>>({})

	useEffect(() => {
        axios.then((prices) => {
            setPrices((prev) => {
                for (let i = 0; i < data.length; i += 1) {
                    prev[prices[i]["currency"]] = prices[i]["price"]
                }
                return prev;
              })
        }).catch(error => {
            console.err(error);
        });
    }, []);

  	return (
    	<div>
      		<div className="px-96 default-border">
        		<h1 className="text-6xl ">Currency Swap</h1>
      		</div>
      		<div className="flex flex-row default-border">
				<SellCurrencyContainer currency={sellCurrency} setCurrency={setSellCurrency}/>
				<BuyCurrencyContainer currency={buyCurrency} setCurrency={setBuyCurrency}/>
      		</div>
    	</div>
  	)
}

export default App
