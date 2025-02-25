import React from "react"

export interface CurrencyContainerProps {
    currency: string,
    setCurrency: React.Dispatch<React.SetStateAction<string>>
}