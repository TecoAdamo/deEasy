import React, { useState } from 'react'

import { FlatList, StyleSheet, View } from 'react-native'

import FoodList from './FoodList'
import { CATEGORIES } from '../utils/products'

export default function GroupFood() {
    const [category, setCategory] = useState(CATEGORIES[0])

    function handleCategorySelect(selectedCategory: string) {
        setCategory(selectedCategory)
    }

    return (
        <View style={styles.boxHeader}>
            <FlatList
                data={CATEGORIES}
                keyExtractor={(item) => item}
                renderItem={({ item }) => (
                    <FoodList
                        title={item}
                        isActive={item === category}
                        onPress={() => handleCategorySelect(item)}
                    />
                )}
                horizontal
                showsHorizontalScrollIndicator={false}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    boxHeader: {
        marginBottom: 10,
        alignItems: 'center',
    },
})
