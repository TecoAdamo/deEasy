import React, { useState } from 'react'
import { StatusBar } from 'expo-status-bar'
import {
    StyleSheet,
    View,
    Image,
    TouchableOpacity,
    Text,
    ScrollView,
} from 'react-native'

import Header from '../components/Header'
import Pizza from '../assets/pizza2.png'

import Ionicons from '@expo/vector-icons/Ionicons'
import BuyButton from '../components/BuyButton'

export default function Products() {
    const [heartSelected, setHeartSelected] = useState(false)
    const [showFullDescription, setShowFullDescription] = useState(false)
    const [selectedSize, setSelectedSize] = useState(null)

    const toggleHeart = () => {
        setHeartSelected(!heartSelected)
    }

    const toggleDescription = () => {
        setShowFullDescription(!showFullDescription)
    }
    const selectSize = (size: any) => {
        setSelectedSize(size)
    }

    return (
        <ScrollView
            contentContainerStyle={{ flexGrow: 1 }}
            showsVerticalScrollIndicator={false}
        >
            <View style={styles.container}>
                <Header title="" />
                <StatusBar style="dark" />
                <Image source={Pizza} style={styles.image} />
                <View style={styles.btnHeart}>
                    <TouchableOpacity onPress={toggleHeart}>
                        {heartSelected ? (
                            <Ionicons
                                name="heart"
                                size={30}
                                color="#DF2613"
                                style={styles.iconHeart}
                            />
                        ) : (
                            <Ionicons
                                name="heart-outline"
                                size={30}
                                color="#DF2613"
                                style={styles.iconHeart}
                            />
                        )}
                    </TouchableOpacity>
                </View>
                <View style={styles.boxTitlePizza}>
                    <Text style={styles.titlePizza}>Quatro queijos</Text>
                    <Text style={styles.pricePizza}>R$ 49.90</Text>
                    <View style={styles.boxDescription}>
                        <Text
                            style={styles.descriptionPizza}
                            numberOfLines={showFullDescription ? undefined : 4}
                        >
                            A base macia e crocante da pizza é coberta com uma
                            generosa quantidade de queijos derretidos e fatias
                            de tomate suculentas, resultando em uma explosão de
                            sabores que agrada a todos os paladares. É uma opção
                            clássica e irresistível para os amantes de pizza.
                        </Text>
                        {!showFullDescription && (
                            <TouchableOpacity onPress={toggleDescription}>
                                <Text style={styles.verMais}>Ver mais</Text>
                            </TouchableOpacity>
                        )}
                    </View>
                </View>
                <View style={styles.boxBtn}>
                    <TouchableOpacity
                        style={[
                            styles.btn1,
                            selectedSize === 'Pequena' && styles.selectedBtn,
                        ]}
                        onPress={() => selectSize('Pequena')}
                    >
                        <Text style={styles.textBtn}>Pequena</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={[
                            styles.btn1,
                            selectedSize === 'Média' && styles.selectedBtn,
                        ]}
                        onPress={() => selectSize('Média')}
                    >
                        <Text style={styles.textBtn}>Média</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={[
                            styles.btn1,
                            selectedSize === 'Grande' && styles.selectedBtn,
                        ]}
                        onPress={() => selectSize('Grande')}
                    >
                        <Text style={styles.textBtn}>Grande</Text>
                    </TouchableOpacity>
                </View>
                <BuyButton title="Comprar" />
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
        height: '30%',
        width: '80%',
        marginLeft: '12%',
    },
    btnHeart: {
        marginLeft: 30,
        marginTop: 30,
        height: 38,
    },

    iconHeart: {
        marginTop: 4,
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
    boxBtn: {
        gap: 50,
        marginTop: 40,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'center',
    },
    btn1: {
        padding: 8,
        borderWidth: 1,
        borderColor: '#DF2613',
        borderRadius: 10,
    },
    textBtn: {
        color: 'white',
    },
    selectedBtn: {
        backgroundColor: '#DF2613',
    },
})
