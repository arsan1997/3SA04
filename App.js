import { StatusBar } from 'expo-status-bar';
import Weather from './components/Weather';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
    const doIt = () => {
    console.log("Hello from console")
 }
    return (
      <View style={styles.container}>
      <Weather zipCode="90110"/>
      <StatusBar style="auto" />
      </View>
 );
}

const styles = StyleSheet.create({
 container: {
     paddingTop: 25,
     width: '100%',
     height: '100%'
     },
});
