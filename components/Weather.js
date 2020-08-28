import React,{useState,useEffect} from 'react';
import Forecast from './Forcast';
import { StyleSheet, Text, View ,ImageBackground } from 'react-native';
export default function Weather(props) {
    useEffect(() => {
        console.log(`fetching data with zipCode = ${props.zipCode}`)
        if (props.zipCode) {
        fetch(`http://api.openweathermap.org/data/2.5/weather?q=${props.zipCode},th&units=metric&APPID=fcf4a6c0a054974f3cfcf930f3e49155`)
        .then((response) => response.json())
        .then((json) => {
        setForecastInfo({
            main: json.weather[0].main,
            description: json.weather[0].description,
            temp: json.main.temp});

        })
            .catch((error) => {
                console.warn(error);
        });
    }
        }, [props.zipCode])
    const [forecastInfo, setForecastInfo] = useState({
       main: '-',
        description: '-',
        temp: 0
    })

    return (
        <View style={styles.sett}>
        <ImageBackground source={require('../awe.jpg')} style={styles.backdrop}>
            <View style={styles.pett}>
                <Text>Zip Code</Text>
                <Text>{props.zipCode}</Text>
                <Forecast {...forecastInfo} />
            </View>
        </ImageBackground>
        </View>
 );
}
const styles = StyleSheet.create({
 backdrop: {
     flex: 1,
     flexDirection: 'column',

    width: '100%',
    height: '100%'
 },
 sett: {
    width: '100%',
    height: '100%'
 },
 pett: {
    width: '100%',
    height: '50px',
    flex: 1,
     flexDirection: 'column',

     justifyContent: 'center',

     alignItems: 'center',

     //backgroundColor:'black', 
 }
});
