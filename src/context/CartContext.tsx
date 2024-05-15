import React, { useState, createContext, ReactNode } from 'react'
import { ProductDTO } from '../dtos/ProductDTS'

export type AuthContextDataProps = {
    nameProduct: ProductDTO
}

type AuthContextProviderProps = {
    children: ReactNode
}

export const AuthContext = createContext<AuthContextDataProps>(
    {} as AuthContextDataProps
)

export function AuthContextProvider({ children }: AuthContextProviderProps) {
    return (
        <AuthContext.Provider
            value={{
                nameProduct: {
                    id: '1',
                    nameProduct: 'Frango com catupiry',
                    price: 'R$ 29,90',
                    description: 'Pizza de frango com catupiry.',
                },
            }}
        >
            {children}
        </AuthContext.Provider>
    )
}
