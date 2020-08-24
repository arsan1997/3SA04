import React,{useState} from 'react';
import Forecast from './Forcast';
import { StyleSheet, Text, View ,ImageBackground } from 'react-native';
export default function Weather(props) {
    const [forecastInfo, setForecastInfo] = useState({
       main: '-',
        description: '-',
        temp: 0
    })

    return (
        <View style={styles.sett}>
        <ImageBackground source={require('../awe.jpg')} style={styles.backdrop}>
            <Text>Zip Code</Text>
            <Text>{props.zipCode}</Text>
            <Forecast {...forecastInfo} />
        </ImageBackground>
        </View>
 );
}
const styles = StyleSheet.create({
 backdrop: {
     flex: 1,
     flexDirection: 'column',
     justifyContent: 'center',
     alignItems: 'center',
    width: '100%',
    height: '100%'
 },
 sett: {
    width: '100%',
    height: '100%'
 }
});
