import { useState } from 'react'
import { CurrencyMenuProps } from '../types'

const CurrencyMenu = ({currency, changeCurrency, prices}: CurrencyMenuProps) => {
    const [isDropdownFocused, setIsDropdownFocused] = useState<boolean>(false);

    const changeFocus = (isFocused: boolean) => {
        return !isFocused ? setIsDropdownFocused(true) : setIsDropdownFocused(false)
    }

    return (
        <div className="relative flex flex-col text-xl">
            <button 
                className={`bg-gray-600 w-40 h-10 ${isDropdownFocused ? "rounded-t-2xl" : "rounded-3xl"} flex flex-row items-center justify-between hover:cursor-pointer`} 
                onClick={() => changeFocus(isDropdownFocused)} 
                onBlur={() => setIsDropdownFocused(false)}>
                <img 
                    src={`https://raw.githubusercontent.com/Switcheo/token-icons/refs/heads/main/tokens/${currency}.svg`}
                    className="size-10"></img>
                <div className="flex-grow pr-6">{currency}</div>
                <menu className={`${isDropdownFocused ? "flex " : "hidden "} 
                                    absolute flex-col -bottom-48 w-40 max-h-48 mx-0 px-0 overflow-y-scroll overflow-x-auto bg-gray-600`}>
                    {
                        Object.keys(prices).map((key) => {
                            return(
                                <ul 
                                    key={key} 
                                    className="cursor-pointer py-1 hover:bg-gray-800 flex flex-row items-center justify-between " 
                                    onClick={() => {changeCurrency(key)}}>
                                    <img 
                                        src={`https://raw.githubusercontent.com/Switcheo/token-icons/refs/heads/main/tokens/${key}.svg`}
                                        className="size-10"></img>
                                        <div className="flex-grow pr-6">{key}</div>
                                </ul>)
                        })
                    }
                </menu>
            </button>
        </div>
    )
}

export default CurrencyMenu
