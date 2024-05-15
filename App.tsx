import React from 'react'
import { AuthContextProvider } from './src/context/CartContext'
import Home from './src/screens/Home'

export default function App() {
    return (
        <AuthContextProvider>
            <Home />
        </AuthContextProvider>
    )
}
