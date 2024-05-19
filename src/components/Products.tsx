import {
    Image,
    ImageProps,
    StyleSheet,
    Text,
    TouchableOpacity,
    TouchableOpacityProps,
    View,
} from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { AuthNavigatorRoutesProps, ProductsProps } from '../routes/AuthRoutes'
import React from 'react'

type Props = TouchableOpacityProps & {
    data?: ProductsProps
}

export default function ProductItem({ data, ...rest }: Props) {
    const navigation = useNavigation<AuthNavigatorRoutesProps>()

    const handleFoodScreen = () => {
        navigation.navigate('products', { data })
    }

    return (
        <TouchableOpacity
            style={styles.buttonBtn}
            {...rest}
            onPress={handleFoodScreen}
        >
            {data && data.thumbnail && (
                <Image source={data.thumbnail} style={styles.imgLunch} />
            )}
            <View style={styles.containerView}>
                <Text style={styles.textTitle}>{data?.title}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    buttonBtn: {
        width: '98%',
        flexDirection: 'column',
        alignItems: 'center',
        paddingBottom: 4,
        padding: 20,
        borderRadius: 15,
        marginBottom: 50,
        backgroundColor: '#333',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.5,
        shadowRadius: 6,
        elevation: 8,
        marginLeft: 4,
    },
    imgLunch: {
        width: '80%',
        height: 190,
        borderRadius: 10,
    },
    containerView: {
        width: '100%',
        padding: 12,
        alignItems: 'center',
    },
    textTitle: {
        color: 'white',
        fontSize: 18,
        fontWeight: '500',
        textAlign: 'center',
        marginBottom: 4,
    },
    textPrice: {
        color: '#a3e635',
        fontWeight: '500',
        textAlign: 'center',
        fontSize: 20,
    },
})
