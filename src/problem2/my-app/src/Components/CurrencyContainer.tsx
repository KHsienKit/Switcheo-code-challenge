import { useEffect} from 'react'
import { CurrencyContainerProps } from '../types'
import CurrencyMenu from './CurrencyMenu'
import CurrencyInput from './CurrencyInput'
import ConvertToUSD from './ConvertToUSD'

const currencyToUSD = (currency: number, rate: number): number => {
    return currency * rate
}

const usdToCurrency = (usd: number, rate: number): number => {
    return usd / rate
}

const changeCurrency = (oldCurrencyRate: number, oldCurrencyAmount: number, newCurrencyRate: number): number => {
    return usdToCurrency(currencyToUSD(oldCurrencyAmount, oldCurrencyRate), newCurrencyRate)
}

const CurrencyContainer = ({
    isSellContainer,
    sellCurrency, changeSellCurrency, 
    sellAmount, changeSellAmount, 
    buyCurrency, changeBuyCurrency, 
    buyAmount, changeBuyAmount, 
    prices, 
    isSellFocused, focusOnCurrent}: CurrencyContainerProps) => {

    useEffect(() => {
        if (isSellFocused && !isSellContainer && sellAmount != 0) {
            changeBuyAmount(changeCurrency(prices[sellCurrency], sellAmount, prices[buyCurrency]))
        }
        else if (!isSellFocused && isSellContainer && buyAmount != 0) {
            changeSellAmount(changeCurrency(prices[buyCurrency], buyAmount, prices[sellCurrency]))
        }
    }, [sellAmount, sellCurrency, buyAmount, buyCurrency])

    return (
        <div className="w-1/2 default-border mx-4 my-8 p-8">
            <h1 className="text-center p-4 text-4xl">{isSellContainer ? "Sell" : "Buy"}</h1>
            <div className="flex flex-col items-center">
                <CurrencyMenu 
                    currency={isSellContainer ? sellCurrency : buyCurrency} 
                    changeCurrency={isSellContainer ? changeSellCurrency : changeBuyCurrency} 
                    prices={prices}/>
                <CurrencyInput 
                    amount={isSellContainer ? sellAmount : buyAmount} 
                    changeAmount={isSellContainer ? changeSellAmount : changeBuyAmount} 
                    focusOnCurrent={focusOnCurrent}/>
                <ConvertToUSD 
                    amount={isSellContainer ? sellAmount : buyAmount} 
                    currency={isSellContainer ? sellCurrency : buyCurrency}
                    prices={prices} />
            </div>
        </div>
    )
}

export default CurrencyContainer
