import {
    createNativeStackNavigator,
    NativeStackNavigationProp,
} from '@react-navigation/native-stack'
import Home from '../screens/Home'
import CartProduct from '../screens/Cart'
import Products from '../screens/Products'
import { ImageProps } from 'react-native'
import React from 'react'

export type ProductsProps = {
    title: string
    description: string
    price: number
    thumbnail: ImageProps
    ingredients: string[]
}

type AuthRoutes = {
    home: undefined
    cart: undefined
    products: { data: ProductsProps }
}

export type AuthNavigatorRoutesProps = NativeStackNavigationProp<AuthRoutes>

const { Navigator, Screen } = createNativeStackNavigator<AuthRoutes>()

export function AuthRoutes() {
    return (
        <Navigator screenOptions={{ headerShown: false }}>
            <Screen name="home" component={Home} />
            <Screen name="products" component={Products} />
            <Screen name="cart" component={CartProduct} />
        </Navigator>
    )
}
