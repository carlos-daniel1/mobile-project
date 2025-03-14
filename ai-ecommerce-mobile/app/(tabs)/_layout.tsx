import { Tabs } from 'expo-router';
import React, { useState } from 'react';
import { IconSymbol } from '@/components/ui/IconSymbol';
import { useColorScheme } from '@/hooks/useColorScheme';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Divider, Menu, PaperProvider } from 'react-native-paper';
import { Text, TouchableOpacity } from 'react-native';
import MenuHeader from '@/components/MenuHeader';


export default function TabLayout() {
  const colorScheme = useColorScheme();
  const [visible, setVisible] = useState(false);
  return (
    <PaperProvider>
      <Tabs>
        <Tabs.Screen
          name="home"
          options={{
            headerTitleStyle: {
              fontSize: 24,
              fontWeight: 'bold',
              color: 'white'
            },
            headerStyle: {
              backgroundColor: '#3E2723'
            },
            title: 'Home',
            headerRight: () => <MenuHeader/>,
            tabBarIcon: () => <MaterialCommunityIcons name="home" size={24} color='white'/>,
            tabBarStyle: {
              backgroundColor: '#3E2723'
            },
            tabBarActiveTintColor: 'white',
            tabBarInactiveTintColor: 'gray'
          }}
        />
        <Tabs.Screen
          name="cart"
          options={{
            title: 'Cart',
            headerTitleStyle: {
              fontSize: 24,
              fontWeight: 'bold',
              color: 'white'
            },
            headerStyle: {
              backgroundColor: '#3E2723'
            },
            headerRight: () => <MenuHeader/>,
            
            tabBarIcon: () => <MaterialCommunityIcons name="account-circle" size={24} color='white'/>,
            tabBarStyle: {
              backgroundColor: '#3E2723'
            },
            tabBarActiveTintColor: 'white',
            tabBarInactiveTintColor: 'gray'
          }}
        />
      </Tabs>
    </PaperProvider>
  );
}