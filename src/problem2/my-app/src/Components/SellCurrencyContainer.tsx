import { useState } from 'react'
import { CurrencyContainerProps } from '../types'
import CurrencyMenu from './CurrencyMenu'
import CurrencyInput from './CurrencyInput'

const SellCurrencyContainer = ({currency, changeCurrency, prices, amount, changeAmount}: CurrencyContainerProps) => {

    return (
        <div className="w-1/2">
            <h1 className="default-border text-center">Sell</h1>
            <div className="flex flex-col default-border items-center">
                <CurrencyMenu currency={currency} changeCurrency={changeCurrency} prices={prices}/>
                <CurrencyInput amount={amount} changeAmount={changeAmount}/>
            </div>
        </div>
    )
}

export default SellCurrencyContainer
