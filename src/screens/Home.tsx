import React from 'react'
import {
    StatusBar,
    Text,
    StyleSheet,
    View,
    SectionList,
    ScrollView,
} from 'react-native'

import Header from '../components/Header'
import GroupFood from '../components/GroupFoods'
import Products from '../components/Products'

import { MENU } from '../utils/products'

export default function Home() {
    return (
        <ScrollView
            contentContainerStyle={{ flexGrow: 1 }}
            showsVerticalScrollIndicator={false}
        >
            <View style={styles.container}>
                <Header title="Home" cartQuantityItems={3} />
                <GroupFood />
                <SectionList
                    style={styles.sectionStyle}
                    sections={MENU}
                    keyExtractor={(item) => item.id}
                    stickySectionHeadersEnabled={false}
                    renderItem={({ item }) => <Products data={item} />}
                    renderSectionHeader={({ section: { title } }) => (
                        <Text style={styles.containerText}>{title}</Text>
                    )}
                    contentContainerStyle={{ paddingBottom: 20 }}
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
    containerText: {
        color: 'white',
        fontSize: 20,
        fontWeight: '700',
        marginLeft: 12,
        marginBottom: 14,
    },
    sectionStyle: {
        flex: 1,
        padding: 8,
    },
    priceText: {
        color: 'white',
        fontSize: 16,
        textAlign: 'center',
        marginTop: 20,
    },
})
