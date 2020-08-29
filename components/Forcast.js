import React from 'react';
import { Text, View,StyleSheet, Image } from 'react-native';


export default function Forcast(props) {
    const check  = () => {
        console.log(props.description)
    }
 
    return (
        <View>
        <View style={styles.box}>
           <Text style={styles.temp} onPress={check}>{props.main}</Text>
           <Text style={styles.temp}>{props.description}</Text>
            <Text style={styles.temp}>{props.temp}°C</Text>
            <Image source={require('../assets/cloud.png')} style={styles.imageShow}/>
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
    imageShow: {
        marginTop: '20px',
        width: '30px',
        height: '20px'
    },
    box: {
        display: "flex",
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    }
})