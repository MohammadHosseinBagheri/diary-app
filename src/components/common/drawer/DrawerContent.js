import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const CustomDrawerContent = () => {
    return (
        <View style={styles.constainer} >
            <Text>Drawer</Text>
        </View>
    )
}

export default CustomDrawerContent

const styles = StyleSheet.create({
    constainer:{
        flex:1,
        backgroundColor:"#2c3e50"
    }
})
