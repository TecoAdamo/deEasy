import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'

type Props = {
    title: string
}

export default function BuyButton({ title }: Props) {
    return (
        <TouchableOpacity style={styles.buttonBtn}>
            <Text style={styles.buttonText}>{title}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    buttonBtn: {
        padding: 10,
        width: '80%',
        borderRadius: 10,
        marginTop: '20%',
        marginLeft: '10%',
        backgroundColor: '#DF2613',
    },
    buttonText: {
        fontSize: 20,
        color: 'white',
        fontWeight: '700',
        textAlign: 'center',
    },
})
