import React, { useContext } from 'react'

import { StyleSheet, View, ScrollView } from 'react-native'

import Header from '../components/Header'

type Props = {
    route: {
        params: {
            selectedPizza: {
                titlePizza: string
                price: string
                description: string
            } | null
        }
    }
}

export default function CartProduct() {
    return (
        <ScrollView
            contentContainerStyle={{ flexGrow: 1 }}
            showsVerticalScrollIndicator={false}
        >
            <View style={styles.container}></View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#191C21',
    },
    cartProducts: {
        width: '80%',
        marginLeft: '10%',
        marginTop: '10%',
        marginBottom: 10,
        flexDirection: 'row',
        alignItems: 'center',
    },
    image: {
        height: 80,
        width: 80,
        marginRight: 20,
    },
    details: {
        flex: 1,
    },
    title: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    price: {
        color: '#22c55e',
        fontSize: 14,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    description: {
        color: 'gray',
        fontSize: 12,
        marginBottom: 10,
    },
    btn: {
        width: 40,
        height: 40,
        borderRadius: 5,
        backgroundColor: '#22c55e',
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 4,
    },
    textBtn: {
        color: 'white',
        fontSize: 24,
    },
})
