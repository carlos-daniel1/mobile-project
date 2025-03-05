import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const index = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>index</Text>
      <Link href="/next" style={styles.link}>Go to next page</Link>
    </View>
  )
}

export default index

const styles = StyleSheet.create({
    text: {
      color: 'white'
    },

    container: {
        flex: 1,
        backgroundColor: 'black',
        alignItems: 'center',
        justifyContent: 'center'
    },
    link: {
      alignItems: 'center',
      justifyContent: 'center',
      color: 'blue'
    }
})