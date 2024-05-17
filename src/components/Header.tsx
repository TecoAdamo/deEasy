import { useContext } from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { AuthNavigatorRoutesProps } from '../routes/AuthRoutes'

import Ionicons from '@expo/vector-icons/Ionicons'

import React from 'react'
import { useCartStore } from '../stores/cart-store'

type Props = {
    title: string
    cartQuantityItems: number
}

export default function Header({ title }: Props) {
    const navigation = useNavigation<AuthNavigatorRoutesProps>()
    const cartQuantityItems = useCartStore((state) => state.products.length)

    const handleGoBack = () => {
        navigation.goBack()
    }

    const handleGoCart = () => {
        navigation.navigate('cart')
    }
    return (
        <View style={styles.header}>
            <TouchableOpacity onPress={handleGoBack}>
                <Ionicons name="chevron-back-outline" size={30} color="white" />
            </TouchableOpacity>
            <Text style={styles.textHeader}>{title}</Text>

            <TouchableOpacity onPress={handleGoCart}>
                <View style={styles.headerBag}>
                    <Ionicons name="bag-outline" size={26} color="white" />
                    <View style={styles.badge}>
                        <Text style={styles.textBag}>{cartQuantityItems}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        justifyContent: 'space-between',
        padding: 20,
        marginTop: 24,
        flexDirection: 'row',
    },
    textHeader: {
        fontWeight: '600',
        fontSize: 18,
        color: '#7C7C8A',
    },
    headerBag: {
        position: 'relative',
        alignItems: 'center',
    },
    badge: {
        position: 'absolute',
        marginTop: 6,
        width: 20,
        height: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    textBag: {
        color: '#DF2613',
        fontSize: 14,
    },
})
