import { useContext } from 'react'
import { NavigationContainer } from '@react-navigation/native'

import { AuthRoutes } from './AuthRoutes'
import { useAuth } from '../hooks/useAuth'

export function Routes() {
    const { nameProduct } = useAuth()

    return (
        <NavigationContainer>
            <AuthRoutes />
        </NavigationContainer>
    )
}
