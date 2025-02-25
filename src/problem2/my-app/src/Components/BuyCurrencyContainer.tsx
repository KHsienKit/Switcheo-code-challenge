import { useState } from 'react'
import { CurrencyContainerProps } from '../types'
import CurrencyMenu from './CurrencyMenu'
import CurrencyInput from './CurrencyInput'

const BuyCurrencyContainer = ({currency, setCurrency}: CurrencyContainerProps) => {
    const [count, setCount] = useState(0)

    return (
        <div className="w-1/2">
            <h1 className="default-border text-center">Buy</h1>
            <div className="flex flex-col default-border">
                <CurrencyMenu />
                <CurrencyInput />
            </div>
        </div>
    )
}

export default BuyCurrencyContainer
