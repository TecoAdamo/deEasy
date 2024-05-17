import React from 'react'

import { useCartStore } from '../stores/cart-store'
import { StyleSheet, View, ScrollView, FlatList, Text } from 'react-native'
import CartHeader from '../components/CartHeader'

export default function CartProduct() {
    const products = useCartStore((state) => state.products)
    return (
        <ScrollView
            contentContainerStyle={{ flexGrow: 1 }}
            showsVerticalScrollIndicator={false}
        >
            <View style={styles.container}>
                <CartHeader title="Meu carrinho" />

                {products.length === 0 ? (
                    <Text style={styles.emptyCart}>
                        Seu carrinho está vazio
                    </Text>
                ) : (
                    <FlatList
                        data={products}
                        keyExtractor={(item) => item.id}
                        renderItem={({ item }) => (
                            <View style={styles.productContainer}>
                                <Text style={styles.productTitle}>
                                    {item.title}
                                </Text>
                                <Text style={styles.productQuantity}>
                                    Quantidade: {item.quantity}
                                </Text>
                                <Text style={styles.productPrice}>
                                    Preço: R$ {item.price}
                                </Text>
                            </View>
                        )}
                    />
                )}
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: '#191C21',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'white',
        marginBottom: 16,
        marginTop: 50,
    },
    emptyCart: {
        fontSize: 18,
        color: 'gray',
        textAlign: 'center',
        marginTop: 20,
    },
    productContainer: {
        backgroundColor: '#2C2C2E',
        padding: 16,
        borderRadius: 8,
        marginBottom: 16,
    },
    productTitle: {
        fontSize: 18,
        color: 'white',
        marginBottom: 8,
    },
    productQuantity: {
        fontSize: 16,
        color: 'gray',
    },
    productPrice: {
        fontSize: 16,
        color: '#84cc16',
    },
})
