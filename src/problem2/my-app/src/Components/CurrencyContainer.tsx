import { useEffect, useState } from 'react'
import { CurrencyContainerProps } from '../types'
import CurrencyMenu from './CurrencyMenu'
import CurrencyInput from './CurrencyInput'

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
        if (isSellFocused && !isSellContainer) {
            changeBuyAmount(changeCurrency(prices[sellCurrency], sellAmount, prices[buyCurrency]))
        }
        else if (!isSellFocused && isSellContainer) {
            changeSellAmount(changeCurrency(prices[buyCurrency], buyAmount, prices[sellCurrency]))
        }
    }, [sellAmount, buyAmount])

    return (
        <div className="w-1/2">
            <h1 className="default-border text-center">{isSellContainer ? "Sell" : "Buy"}</h1>
            <div className="flex flex-col default-border items-center">
                <CurrencyMenu 
                    currency={isSellContainer ? sellCurrency : buyCurrency} 
                    changeCurrency={isSellContainer ? changeSellCurrency : changeBuyCurrency} 
                    prices={prices}/>
                <CurrencyInput 
                    amount={isSellContainer ? sellAmount : buyAmount} 
                    changeAmount={isSellContainer ? changeSellAmount : changeBuyAmount} 
                    focusOnCurrent={focusOnCurrent}/>
            </div>
        </div>
    )
}

export default CurrencyContainer
