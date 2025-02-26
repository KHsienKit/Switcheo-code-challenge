export interface CurrencyContainerProps {
    isSellContainer: boolean,
    sellCurrency: string,
    changeSellCurrency: (currency: string) => void,
    sellAmount: number,
    changeSellAmount: (amount: number) => void,
    buyCurrency: string,
    changeBuyCurrency: (currency: string) => void,
    buyAmount: number,
    changeBuyAmount: (amount: number) => void,
    prices: Record<string, number>,
    isSellFocused: boolean,
    focusOnCurrent: () => void
}

export interface CurrencyMenuProps {
    currency: string,
    changeCurrency: (currency: string) => void,
    prices: Record<string, number>,
}

export interface CurrencyInputProps {
    amount: number,
    changeAmount: (currency: number) => void,
    focusOnCurrent: () => void
}