import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();
import GenerateQR from './Screens/GenerateQR';
import Scanner from './Screens/Scanner';
import Home from './Screens/Home';
import Capture from './Screens/Capture';
// import GalleryQRScan from './Screens/GalleryQRScan'

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator >
        <Stack.Screen name="Home" component={Home}  options={{headerStyle: {backgroundColor: '#8ECDDD'} }}/>
        <Stack.Screen name="GenerateQR" component={GenerateQR} options={{headerStyle: {backgroundColor: '#4F709C'} }}/>
        <Stack.Screen name="Scanner" component={Scanner} options={{headerStyle: {backgroundColor: '#EDB7ED'} }}/>
        <Stack.Screen name="Capture" component={Capture} options={{headerStyle: {backgroundColor: '#D2DE32'} }}/>
        {/* <Stack.Screen name="GalleryQRScan" component={GalleryQRScan} options={{headerStyle: {backgroundColor: '#BEADFA'} }}/> */}
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App
