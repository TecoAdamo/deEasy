import React, { useState } from 'react'
import { useToast } from 'native-base'
import { ProductCartProps, useCartStore } from '../stores/cart-store'
import {
    StyleSheet,
    View,
    ScrollView,
    FlatList,
    Text,
    TextInput,
    Alert,
    TouchableOpacity,
    Linking,
} from 'react-native'

import CartHeader from '../components/CartHeader'
import BuyButton from '../components/BuyButton'

const PHONE_NUMBER = '5547920026900'

export default function CartProduct() {
    const [street, setStreet] = useState('')
    const [neighborhood, setNeighborhood] = useState('')
    const [cep, setCep] = useState('')
    const [number, setNumber] = useState('')
    const [complement, setComplement] = useState('')
    const [paymentMethod, setPaymentMethod] = useState('')
    const products = useCartStore((state) => state.products)
    const cartStore = useCartStore()
    const toast = useToast()

    const calculateTotalPrice = () => {
        return products.reduce((total, product) => {
            return total + product.price * product.quantity
        }, 0)
    }

    const handleProductRemove = (product) => {
        Alert.alert('Remover', `Deseja remover ${product.title} do carrinho?`, [
            { text: 'Cancelar' },
            { text: 'Remover', onPress: () => cartStore.remove(product.id) },
        ])
    }

    const handleOrder = () => {
        if (
            !street.trim() ||
            !neighborhood.trim() ||
            !cep.trim() ||
            !number.trim() ||
            !complement.trim() ||
            !paymentMethod.trim()
        ) {
            return toast.show({
                title: 'Campo incompleto.',
                description:
                    'Preencha o campo com suas informações para prosseguir com o pedido.',
                placement: 'bottom',
                bgColor: 'red.500',
            })
        } else {
            const formattedProducts = products
                .map((product) => `\n ${product.quantity} x ${product.title}`)
                .join('')
            const totalPrice = calculateTotalPrice().toFixed(2)

            const message = `
                NOVO PEDIDO
                \n Entregar em: Rua ${street}, Bairro ${neighborhood}, CEP ${cep}, Número ${number}, Complemento ${complement}
                \n Método de pagamento: ${paymentMethod}
                \n Produtos: ${formattedProducts}
                \n Valor total: R$ ${totalPrice}
            `
            cartStore.clearCart()
            setStreet('')
            setNeighborhood('')
            setCep('')
            setNumber('')
            setComplement('')
            setPaymentMethod('')

            Linking.openURL(
                `http://api.whatsapp.com/send?phone=${PHONE_NUMBER}&text=${message}`
            )
        }
    }

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
                    <View>
                        <FlatList
                            data={products}
                            keyExtractor={(item) => item.id + item.size}
                            renderItem={({ item }) => (
                                <TouchableOpacity
                                    onPress={() => handleProductRemove(item)}
                                >
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
                                </TouchableOpacity>
                            )}
                        />

                        <View style={styles.line} />
                        <Text style={styles.totalPrice}>
                            Preço Total: R$ {calculateTotalPrice().toFixed(2)}
                        </Text>
                        <View style={styles.boxInput}>
                            <Text style={styles.labelInput}>
                                Preencha os campos para concluir o pedido:
                            </Text>
                            <TextInput
                                value={street}
                                onChangeText={setStreet}
                                style={styles.boxTextInput}
                                placeholder="Rua"
                                placeholderTextColor="gray"
                            />
                            <TextInput
                                value={neighborhood}
                                onChangeText={setNeighborhood}
                                style={styles.boxTextInput}
                                placeholder="Bairro"
                                placeholderTextColor="gray"
                            />
                            <TextInput
                                value={cep}
                                onChangeText={setCep}
                                style={styles.boxTextInput}
                                placeholder="CEP"
                                placeholderTextColor="gray"
                                keyboardType="numeric"
                            />
                            <TextInput
                                value={number}
                                onChangeText={setNumber}
                                style={styles.boxTextInput}
                                placeholder="Número"
                                placeholderTextColor="gray"
                                keyboardType="numeric"
                            />
                            <TextInput
                                value={complement}
                                onChangeText={setComplement}
                                style={styles.boxTextInput}
                                placeholder="Complemento"
                                placeholderTextColor="gray"
                            />
                            <TextInput
                                value={paymentMethod}
                                onChangeText={setPaymentMethod}
                                style={styles.boxTextInput}
                                placeholder="Forma de pagamento (Dinheiro - Cartão ou PIX)"
                                placeholderTextColor="gray"
                            />
                        </View>
                        <BuyButton
                            title="Enviar pedido"
                            onPress={handleOrder}
                        />
                    </View>
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
        marginTop: '80%',
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
    productSize: {
        fontSize: 16,
        color: 'gray',
    },
    productQuantity: {
        fontSize: 16,
        color: 'gray',
    },
    productPrice: {
        fontSize: 16,
        color: '#84cc16',
    },
    line: {
        height: 1,
        width: '100%',
        backgroundColor: 'gray',
    },
    totalPrice: {
        fontSize: 18,
        color: '#84cc16',
        textAlign: 'center',
        marginTop: 16,
    },
    boxInput: {
        backgroundColor: '#2C2C2E',
        borderRadius: 10,
        marginTop: 60,
        padding: 10,
    },
    boxTextInput: {
        marginVertical: 5,
        padding: 10,
        color: 'white',
        backgroundColor: '#3a3a3a',
        borderRadius: 5,
    },
    labelInput: {
        marginTop: 2,
        marginBottom: 4,
        color: 'white',
        textAlign: 'center',
    },
})
