import { CurrencyInputProps } from '../types'

const isOperator = (code: string): boolean => {
    if (code == "Enter"  || code == "NumpadEnter"    ||
        code == "Minus"  || code == "NumpadSubtract" || 
        code == "Equal"  || code == "NumpadAdd"        ) {
            return true
        }
    return false
}

const CurrencyInput = ({amount, changeAmount, focusOnCurrent}: CurrencyInputProps) => {

    return (
        <form className="flex my-4" onClick={focusOnCurrent}>
            <input type="number"
                    value={amount}
                    min={0}
                    onChange={event => changeAmount(parseFloat(event.target.value))}
                    onKeyDown={(event) => {
                        const key = event.code;
                        if (isOperator(key)) {
                            event.preventDefault();
                            return false;
                        }
                    }}
                    className="border-2 flex-grow appearance-none w-40">
            </input>
        </form>
    )
}

export default CurrencyInput
