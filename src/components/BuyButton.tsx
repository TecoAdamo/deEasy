import React from 'react'
import {
    StyleSheet,
    Text,
    TouchableOpacity,
    TouchableOpacityProps,
} from 'react-native'

type Props = TouchableOpacityProps & {
    title: string
    variant?: 'solid' | 'outline'
    onPress?: () => void
}

export default function ButtonNativeBase({
    title,
    variant = 'solid',
    onPress,
}: Props) {
    const buttonStyle =
        variant === 'outline'
            ? {
                  backgroundColor: '#DF2613',
              }
            : { backgroundColor: 'green', borderWidth: 0 }
    const textStyle =
        variant === 'outline' ? { color: 'white' } : { color: 'white' }

    return (
        <TouchableOpacity
            style={[styles.buttonBtn, buttonStyle]}
            onPress={onPress}
        >
            <Text style={[styles.buttonText, textStyle]}>{title}</Text>
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
