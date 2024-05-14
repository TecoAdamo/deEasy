import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

type Props = {
    title: string
    isActive: boolean
}

export default function FoodList({ title, isActive, ...rest }: Props) {
    return (
        <View style={styles.header}>
            <TouchableOpacity {...rest}>
                <Text
                    style={[
                        styles.header,
                        { color: isActive ? '#DF2613' : '#CCCCCC' },
                    ]}
                >
                    {title}
                </Text>
                {isActive && (
                    <View
                        style={[
                            styles.lineFoods,
                            {
                                backgroundColor: isActive
                                    ? '#DF2613'
                                    : '#CCCCCC',
                            },
                        ]}
                    />
                )}
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        padding: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    textHeader: {
        fontSize: 18,
        color: '#7C7C8A',
        fontWeight: '600',
    },
    headerBag: {
        alignItems: 'center',
    },
    badge: {
        width: 20,
        height: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
    textBag: {
        fontSize: 14,
    },
    lineFoods: {
        height: 2,
        alignItems: 'center',
    },
})
