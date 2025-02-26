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
                className={`${isDropdownFocused ? "rounded-t-2xl" : "rounded-3xl"} 
                            bg-gray-600 w-40 h-10 flex flex-row items-center justify-between hover:cursor-pointer
                            transition-all delay-100`} 
                onClick={() => changeFocus(isDropdownFocused)} 
                onBlur={() => setIsDropdownFocused(false)}>
                <img 
                    src={`https://raw.githubusercontent.com/Switcheo/token-icons/refs/heads/main/tokens/${currency}.svg`}
                    className="size-10"></img>
                <div className="flex-grow pr-6">{currency}</div>
                <menu className={`${isDropdownFocused ? "flex max-h-48 " : " max-h-0 invisible "} 
                                    absolute flex-col w-40 mx-0 px-0 top-10 overflow-y-scroll bg-gray-600
                                    transition-all duration-75 ease-linear`}>
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

{/* <div class="hs-dropdown relative inline-flex">
  <button id="hs-dropdown-default" type="button" class="hs-dropdown-toggle py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none" aria-haspopup="menu" aria-expanded="false" aria-label="Dropdown">
  </button>

  <div class="hs-dropdown-menu transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 hidden min-w-60 bg-white shadow-md rounded-lg mt-2 after:h-4 after:absolute after:-bottom-4 after:start-0 after:w-full before:h-4 before:absolute before:-top-4 before:start-0 before:w-full" role="menu" aria-orientation="vertical" aria-labelledby="hs-dropdown-default">
    <div class="p-1 space-y-0.5">
      <a class="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100" href="#">
        Newsletter
      </a>
      <a class="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100" href="#">
        Purchases
      </a>
      <a class="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100" href="#">
        Downloads
      </a>
      <a class="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100" href="#">
        Team Account
      </a>
    </div>
  </div>
</div> */}