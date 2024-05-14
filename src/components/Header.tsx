import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Ionicons from '@expo/vector-icons/Ionicons'
import { useState } from 'react'

type Props = {
    title: string
    cartAdd: string
}

export default function Header({ title, cartAdd }: Props) {
    return (
        <View style={styles.header}>
            <TouchableOpacity>
                <Ionicons name="chevron-back-outline" size={30} color="white" />
            </TouchableOpacity>
            <Text style={styles.textHeader}>{title}</Text>

            <TouchableOpacity>
                <View style={styles.headerBag}>
                    <Ionicons name="bag-outline" size={26} color="white" />
                    <View style={styles.badge}>
                        <Text style={styles.textBag}>{cartAdd}</Text>
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
