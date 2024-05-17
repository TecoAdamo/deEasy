import React, { useState, createContext, ReactNode } from 'react'
import { ProductDTO } from '../dtos/ProductDTS'

export type AuthContextDataProps = {
    nameProduct: ProductDTO
    cartTotal: number
    updateCartTotal: (count: number) => void
    selectedPizza: ProductDTO | null
    setSelectedPizza: (pizza: ProductDTO) => void
}

type AuthContextProviderProps = {
    children: ReactNode
}

export const AuthContext = createContext<AuthContextDataProps>(
    {} as AuthContextDataProps
)
