import { Stack } from 'expo-router'
import React from 'react'
import { Text, View } from 'react-native'
import { SafeAreaProvider } from 'react-native-safe-area-context'
const RootLayout = () => {
  return (
    <Stack>
      <Stack.Screen name='welcome' options={{headerShown: false}}/>
      <Stack.Screen name='home' options={{headerShown: false}}/>
      <Stack.Screen name='register' options={{headerShown: false}}/>
      <Stack.Screen name='login' options={{headerShown: false}}/>
    </Stack>
    
  )
}

export default RootLayout