import { NavigationContainer } from '@react-navigation/native'

import { AuthRoutes } from './AuthRoutes'
import React from 'react'

export function Routes() {
    return (
        <NavigationContainer>
            <AuthRoutes />
        </NavigationContainer>
    )
}
