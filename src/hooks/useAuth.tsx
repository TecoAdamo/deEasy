import React, { useContext } from 'react'

import { AuthContext } from '../context/CartContext'

export function useAuth() {
    const context = useContext(AuthContext)
    return context
}
