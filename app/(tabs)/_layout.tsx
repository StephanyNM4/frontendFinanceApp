import { Tabs } from 'expo-router';

import Ionicons from '@expo/vector-icons/Ionicons';

export default function TabLayout() {
  return (
      <Tabs
        screenOptions={{
          tabBarActiveTintColor: '#fff',
          headerStyle: {
            backgroundColor: '#fff',
          },
          headerTitleStyle: {
            color: '#387F39',
            fontSize: 20,
            fontWeight: 'bold',
          },
          headerShadowVisible: true,
          tabBarStyle: {
            backgroundColor: '#387F39',
            height: 80,
            borderRadius: 10,
            paddingTop: 15,
            margin: 18,
          },
          tabBarLabelStyle: {
            fontSize: 12,
            marginBottom: 5,
          },
        }}
      > 

      <Tabs.Screen
        name="index"
        options={{
          title: 'Balance',
          tabBarIcon: ({ color, focused }) => (
            <Ionicons name={focused ? 'wallet' : 'wallet-outline'} color={color} size={24} />
          ),
        }}
      />
      <Tabs.Screen
        name="transactions"
        options={{
          title: 'Transactions',
          tabBarIcon: ({ color, focused }) => (
            <Ionicons name={focused ? 'swap-vertical' : 'swap-vertical-outline'} color={color} size={24} />
          ),
        }}
      />
    </Tabs>
  );
}
