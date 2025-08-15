import React from 'react'
import { Button, Image, StyleSheet, Text, View } from 'react-native'

export default function Header() {
    return (
        <View style={styles.headerBox}>
            <View  style={styles.headerContainer}>
                <Image
                    source={{ uri: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/static-assets/images/swiggy_logo_white.png" }}
                    style={{ width: 100, height: 25 }}
                />
                
                <Image
                    source={{ uri: "https://tse3.mm.bing.net/th/id/OIP.0LvP1YUJ2stgbrp2srwnFQHaHa?pid=Api&P=0&h=180" }}
                    style={{ width: 25, height: 25, borderRadius: 12 }}
                />

            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    headerBox: {
        backgroundColor: 'rgb(255, 82, 0)',  
        padding:12      
    },
    headerContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
    }


})