import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
export default function Forcast(props) {
    return (
        <View >
        <Text>{props.main}</Text>
         <Text>{props.description}</Text>
        <View>
    <Text>{props.temp}</Text>
    <Text>°C</Text>
    </View>
    </View>
    );
   }
   