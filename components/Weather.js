import React,{useState,useEffect} from 'react';
import Forecast from './Forcast';
import { StyleSheet, Text, View ,ImageBackground } from 'react-native';
import { max } from 'lodash';
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
                <Text style={styles.sizeText}>Zip Code</Text>
                <Text style={styles.sizenumber}>{props.zipCode}</Text>
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
    height: '100%',
    maxHeight:'100vh'
    
 },
 pett: {
    width: '100%',
    height: '50px',
    flex: 1,
     flexDirection: 'column',

     justifyContent: 'center',

     alignItems: 'center',
    
     textAlign:'center'
     
     
 },
 sizeText: {
    fontSize:'30px',
    fontWeight: 'bold',
    color: '#f5f5f5',
    textShadowOffset: { width: 1, height: 2 },
    textShadowRadius: 1,
    textShadowColor: '#000',
    
 },
 sizenumber: {
    fontSize:'25px',
    color: '#f5f5f5',
    textShadowOffset: { width: 1, height: 2 },
    textShadowColor: '#000',

 }
});
