import { useState } from 'react'
import { CurrencyMenuProps } from '../types'

const CurrencyMenu = ({currency, changeCurrency, prices}: CurrencyMenuProps) => {
    const [isDropdownFocused, setIsDropdownFocused] = useState<boolean>(false);

    const changeFocus = (isFocused: boolean) => {
        return !isFocused ? setIsDropdownFocused(true) : setIsDropdownFocused(false)
    }

    return (
        <div className="default-border relative flex flex-col">
            <button className="bg-gray-600 w-25 h-10" onClick={() => changeFocus(isDropdownFocused)} onBlur={() => setIsDropdownFocused(false)}>{currency}
            <menu className={`${isDropdownFocused ? "flex " : "hidden "} absolute flex-col -bottom-48 w-25 max-h-48 mx-0 px-0 overflow-y-scroll overflow-x-auto bg-gray-600`}>
                {
                    Object.keys(prices).map((key) => {
                        return <ul key={key} className="cursor-pointer default-border" onClick={() => {changeCurrency(key)}}>{key}</ul>
                    })
                }
            </menu></button>
        </div>
    )
}

export default CurrencyMenu
