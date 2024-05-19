import React, { useState } from 'react'
import { RouteProp, useRoute } from '@react-navigation/native/'

import { StatusBar } from 'expo-status-bar'
import {
    StyleSheet,
    View,
    Image,
    TouchableOpacity,
    Text,
    ScrollView,
} from 'react-native'

import Ionicons from '@expo/vector-icons/Ionicons'

import { useCartStore } from '../stores/cart-store'

import Header from '../components/Header'
import BuyButton from '../components/BuyButton'

type ProductsScreenRouteProp = RouteProp<AuthRoutes, 'products'>

export default function ProductDetails() {
    const route = useRoute<ProductsScreenRouteProp>()
    const { data } = route.params

    const [showFullDescription, setShowFullDescription] = useState(false)
    const [selectedSize, setSelectedSize] = useState<string | null>(null)
    const [showIngredients, setShowIngredients] = useState(false)

    const addProductToCart = useCartStore((state) => state.add)

    const toggleDescription = () => {
        setShowFullDescription(!showFullDescription)
    }

    const toggleIngredients = () => {
        setShowIngredients(!showIngredients)
    }

    const handleAddToCart = () => {
        addProductToCart({ ...data })
    }

    return (
        <ScrollView
            contentContainerStyle={{
                flexGrow: 1,
                paddingBottom: 100,
                backgroundColor: '#191C21',
            }}
            showsVerticalScrollIndicator={false}
        >
            <View style={styles.container}>
                <Header title="" cartQuantityItems={3} />
                <StatusBar style="dark" />
                <Image source={data.thumbnail} style={styles.image} />

                <View style={styles.boxTitlePizza}>
                    <Text style={styles.titlePizza}>{data.title}</Text>
                    <Text style={styles.pricePizza}>R$ {data.price}</Text>
                    <View style={styles.boxDescription}>
                        <Text
                            style={styles.descriptionPizza}
                            numberOfLines={showFullDescription ? undefined : 4}
                        >
                            {data.description}
                        </Text>

                        {!showFullDescription && (
                            <TouchableOpacity onPress={toggleDescription}>
                                <Text style={styles.verMais}>Ver mais</Text>
                            </TouchableOpacity>
                        )}
                    </View>
                    <View style={styles.ingredientsContainer}>
                        {!showIngredients && (
                            <TouchableOpacity onPress={toggleIngredients}>
                                <Text style={styles.verIngredients}>
                                    Ver Ingredientes
                                </Text>
                            </TouchableOpacity>
                        )}
                        {showIngredients && (
                            <>
                                <Text style={styles.ingredientsTitle}>
                                    Ingredientes:
                                </Text>
                                {data.ingredients.map(
                                    (ingredient: string, index: number) => (
                                        <Text
                                            key={index}
                                            style={styles.ingredient}
                                        >
                                            {ingredient}
                                        </Text>
                                    )
                                )}
                                <TouchableOpacity onPress={toggleIngredients}>
                                    <Text style={styles.verMais}>
                                        Ocultar Ingredientes
                                    </Text>
                                </TouchableOpacity>
                            </>
                        )}
                    </View>
                </View>

                <TouchableOpacity onPress={handleAddToCart}>
                    <BuyButton title="Adicionar ao pedido" variant="outline" />
                    <Ionicons
                        style={styles.iconAdd}
                        size={30}
                        color="white"
                        name="add-circle-outline"
                    />
                </TouchableOpacity>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#191C21',
    },
    image: {
        height: 280,
        width: '100%',
        borderRadius: 10,
    },
    btnHeart: {
        marginLeft: 30,
        marginTop: 30,
        height: 38,
    },
    iconHeart: {
        marginTop: 4,
    },
    iconAdd: {
        bottom: 40,
        left: 70,
    },
    iconHeartPlus: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    boxTitlePizza: {
        marginTop: 20,
        marginLeft: 30,
    },
    titlePizza: {
        fontSize: 28,
        width: '70%',
        color: 'white',
        fontWeight: '700',
    },
    pricePizza: {
        fontSize: 24,
        color: '#84cc16',
        fontWeight: '500',
    },
    boxDescription: {
        width: '84%',
    },
    descriptionPizza: {
        color: 'gray',
    },
    verMais: {
        color: '#DF2613',
        marginTop: 5,
    },
    verIngredients: {
        color: '#DF2613',
    },

    ingredientsContainer: {
        marginTop: 20,
    },
    ingredientsTitle: {
        fontSize: 20,
        color: 'white',
        fontWeight: '600',
    },
    ingredient: {
        fontSize: 16,
        color: 'gray',
    },
})
