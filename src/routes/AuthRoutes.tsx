import {
    createNativeStackNavigator,
    NativeStackNavigationProp,
} from '@react-navigation/native-stack'

import Home from '../screens/Home'
import Products from '../screens/Products'
import Cart from '../screens/Cart'
import CartProduct from '../screens/Cart'

type AuthRoutes = {
    home: undefined
    cart: undefined
    products: undefined
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
