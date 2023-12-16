import React, { useEffect } from 'react'
import { Image, Text, View } from 'react-native'
import styles from '../Style.js'

function Loading({ navigation }) {
    useEffect(() => {
        setTimeout(() => {
            navigation.navigate("Home")
        }, 1500)
    }, [])
    return (
        <View style={styles.loadingpage}>
            <Image style={styles.loadingimage} source={require("../images/Loading.png")} />
        </View>
    )
}

export default Loading