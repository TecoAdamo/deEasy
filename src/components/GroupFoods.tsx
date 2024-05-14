import { useState } from 'react'

import { FlatList, StyleSheet, View } from 'react-native'

import FoodList from './FoodList'

export default function GroupFood() {
    const [groups, setGroups] = useState([
        'Mais pedidas',
        'Tradicionais',
        'Doces',
    ])
    const [groupSelected, setGroupSelected] = useState('Frango')

    return (
        <View style={styles.boxHeader}>
            <FlatList
                data={groups}
                keyExtractor={(item) => item}
                renderItem={({ item }) => (
                    <FoodList
                        title={item}
                        isActive={
                            groupSelected.toLocaleUpperCase() ===
                            item.toLocaleUpperCase()
                        }
                        onPress={() => setGroupSelected(item)}
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
