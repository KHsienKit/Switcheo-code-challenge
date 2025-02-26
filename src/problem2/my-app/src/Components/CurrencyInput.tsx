import { useState } from 'react'
import { CurrencyInputProps } from '../types'

const CurrencyInput = ({amount, changeAmount}: CurrencyInputProps) => {

    return (
        <form className="flex">
            <input type="number"
                    value={amount}
                    onChange={event => changeAmount(parseInt(event.target.value))}
                    onKeyDown={(event) => {
                        if (event.code == "Enter" || event.code == "NumpadEnter") {
                            event.preventDefault();
                            return false;
                        }
                    }}
                    className="border-2 flex-grow">
            </input>
        </form>
    )
}

export default CurrencyInput
