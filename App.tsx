import React from 'react'
import { Routes } from './src/routes'

import { StatusBar } from 'react-native'

import { NativeBaseProvider } from 'native-base'

export default function App() {
    return (
        <NativeBaseProvider>
            <Routes />
            <StatusBar
                barStyle="light-content"
                backgroundColor="transparent"
                translucent
            />
        </NativeBaseProvider>
    )
}
