import { useState, useContext } from 'react'
import { StatusBar } from 'expo-status-bar'
import { FlatList, StyleSheet, View, Text, ScrollView } from 'react-native'

import Header from '../components/Header'
import GroupFood from '../components/GroupFoods'
import PizzaCard from '../components/PizzaCard'
import { AuthContext } from '../context/CartContext'

export default function Home() {
    const { nameProduct } = useContext(AuthContext)

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
    const [pizzaCardsDc, setPizzaCardsDc] = useState([
        {
            title: 'Sedução',
            price: 'R$ 25.90',
            description: 'Pizza ddoce.',
        },
        {
            title: 'Sedução',
            price: 'R$ 25.90',
            description: 'Pizza ddoce.',
        },
        {
            title: 'Sedução',
            price: 'R$ 25.90',
            description: 'Pizza ddoce.',
        },
        {
            title: 'Sedução',
            price: 'R$ 25.90',
            description: 'Pizza ddoce.',
        },
    ])

    return (
        <ScrollView
            contentContainerStyle={{ flexGrow: 1 }}
            showsVerticalScrollIndicator={false}
        >
            <View style={styles.container}>
                <StatusBar style="dark" />
                <Header title="Home" />
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
                <FlatList
                    data={pizzaCardsDc}
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
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#191C21',
    },
})
