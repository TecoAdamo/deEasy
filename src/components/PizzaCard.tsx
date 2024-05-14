import React, { useState } from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

import Ionicons from '@expo/vector-icons/Ionicons'

import Pizza from '../assets/pizza.png'

type Props = {
    titlePizza: string
    price: string
    description: string
}

export default function PizzaCard({ titlePizza, price, description }: Props) {
    const [heartSelected, setHeartSelected] = useState(false)
    const [pizzaCount, setPizzaCount] = useState(0)

    const toggleHeart = () => {
        setHeartSelected(!heartSelected)

        setPizzaCount((prevAddPizza) => prevAddPizza + 1)
    }

    return (
        <View style={styles.card}>
            <TouchableOpacity onPress={toggleHeart}>
                {heartSelected ? (
                    <Ionicons
                        name="heart"
                        size={24}
                        color="#DF2613"
                        style={styles.iconHeart}
                    />
                ) : (
                    <Ionicons
                        name="heart-outline"
                        size={24}
                        color="#DF2613"
                        style={styles.iconHeart}
                    />
                )}
            </TouchableOpacity>

            <TouchableOpacity>
                <Image source={Pizza} style={styles.image} />
            </TouchableOpacity>
            <View style={styles.boxTextPizza}>
                <Text style={styles.textPizza}>{titlePizza}</Text>
                <Text style={styles.pricePizza}>{price}</Text>
                <Text style={styles.descriptionPizza} numberOfLines={2}>
                    {description}
                </Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        height: 230,
        width: 150,
        backgroundColor: '#191C21',
        borderRadius: 10,
        marginLeft: 18,
        marginTop: 30,
        shadowColor: 'white',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        marginRight: 10,
    },

    iconHeart: {
        marginLeft: 4,
        marginTop: 4,
    },

    image: {
        height: '80%',
        width: '150%',
        marginLeft: '10%',
        bottom: 28,
    },
    boxTextPizza: {
        marginLeft: 8,
        bottom: 60,
    },
    textPizza: {
        fontSize: 12,
        fontWeight: '600',
        color: 'white',
    },
    pricePizza: {
        color: 'white',
        fontWeight: 'bold',
    },
    descriptionPizza: {
        fontSize: 12,
        color: 'gray',
        fontWeight: '300',
    },
})
