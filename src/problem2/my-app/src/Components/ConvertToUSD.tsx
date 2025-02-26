import { ConvertToUSDProps} from '../types'
import { JSX } from 'react'

const currencyToUSD = (currency: number, rate: number): number => {
    return currency * rate
}

const convert = (amount: number, currency: string, prices: Record<string, number>): JSX.Element => {
    const lhsAmount: number = (amount == 0 || Number.isNaN(amount)) ? 1 : amount
    const rhsAmount: number = (amount == 0 || Number.isNaN(amount)) ? (prices[currency] == undefined ? 1 : prices[currency]) : currencyToUSD(amount, prices[currency])
    return <p>{`${lhsAmount.toFixed(5)} ${currency} = ${rhsAmount.toFixed(5)} USD`}</p>
}

const ConvertToUSD = ({ amount, currency, prices }: ConvertToUSDProps) => {

    return (
        <div>
            {convert(amount, currency, prices)}
        </div>
    )
}

export default ConvertToUSD
