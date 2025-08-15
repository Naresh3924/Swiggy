import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

function Footer() {
    return (
        <View style={styles.footerBox} ><Text>Footer</Text></View>
    )
}

const styles = StyleSheet.create({
    footerBox: {
        backgroundColor: 'lightblue',
        padding:12
    }
})

export default Footer;