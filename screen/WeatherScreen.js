import React from 'react';
import Weather from '../components/Weather';
import {StyleSheet,View } from 'react-native';
import { StatusBar } from 'expo-status-bar';


export default function WeatherScreen({route}) {
    return (
        <View style={styles.sss}>
            <Weather zipCode={route.params.zipCode} />
            <StatusBar style="auto" />
        </View>
    );
}
const styles = StyleSheet.create({
    sss: {
        width: '100%',
        height: '100%',

        
    },
})
