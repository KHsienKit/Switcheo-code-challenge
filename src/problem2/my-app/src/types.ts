export interface CurrencyContainerProps {
    currency: string,
    changeCurrency: (currency: string) => void,
    prices: Record<string, number>,
    amount: number,
    changeAmount: (amount: number) => void
}

export interface CurrencyMenuProps {
    currency: string,
    changeCurrency: (currency: string) => void,
    prices: Record<string, number>,
}

export interface CurrencyInputProps {
    amount: number,
    changeAmount: (currency: number) => void
}