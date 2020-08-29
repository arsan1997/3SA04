import React from 'react';
import { Text, View,StyleSheet } from 'react-native';
export default function Forcast(props) {
    return (
        <View>
        <Text style={styles.temp}>{props.main}</Text>
         <Text style={styles.temp}>{props.description}</Text>
        <View>
            <Text style={styles.temp}>{props.temp}°C</Text>
            
        </View>
    </View>
    );
   }
   const styles = StyleSheet.create({
    temp: {
        fontSize:'25px',
        fontWeight: 'bold',
        color: 'gray',
        textShadowOffset: { width: 1, height: 2 },
         textShadowColor: '#000',

    },
})