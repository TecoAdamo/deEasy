import { useState } from 'react'
import { StatusBar } from 'expo-status-bar'
import { FlatList, StyleSheet, View, Text } from 'react-native'

import Header from '../components/Header'
import GroupFood from '../components/GroupFoods'
import PizzaCard from '../components/PizzaCard'

export default function Home() {
    const [pizzaCards, setPizzaCards] = useState([
        {
            title: 'Frango com Catupiry',
            price: 'R$ 29.90',
            description: 'Pizza de frango com catupiry.',
        },
        {
            title: 'Margherita',
            price: 'R$ 49.90',
            description:
                'Pizza tradicional italiana com tomate, muçarela e manjericão.',
        },
        {
            title: 'Calabresa',
            price: 'R$ 39.90',
            description: 'Pizza de calabresa com cebola e pimentão.',
        },
        {
            title: '4 Queijos',
            price: 'R$ 59.90',
            description:
                'Pizza com uma mistura de quatro queijos: muçarela, parmesão, gorgonzola e catupiry.',
        },
    ])

    return (
        <View style={styles.container}>
            <StatusBar style="dark" />
            <Header title="Menu" cartAdd="0" />

            <GroupFood />

            <FlatList
                data={pizzaCards}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }) => (
                    <PizzaCard
                        titlePizza={item.title}
                        price={item.price}
                        description={item.description}
                    />
                )}
                horizontal
                showsHorizontalScrollIndicator={false}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#191C21',
    },
})
function setPizzaCount(arg0: (prevAddPizza: any) => any) {
    throw new Error('Function not implemented.')
}
