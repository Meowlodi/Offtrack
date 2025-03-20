import { StyleSheet, Text, View, Button, Alert, ImageBackground, Pressable } from 'react-native'
import React from 'react'

export default function App() {
  return (
    <ImageBackground
    source={require("../assets/images/background.png")}
    style={styles.background}
    >
    <View style={styles.container}>
        <Text style= {styles.name}>Offtrack</Text>
      <Text style={styles.title}>Explore a new world with us</Text>

      <View style={styles.buttonView}>
        <Pressable style={styles.buttonBorder}>
            <Text style= {styles.buttonText}>Login</Text>
        </Pressable>
        <Pressable style={styles.buttonBorder}>
            <Text style= {styles.buttonText}>Register</Text>
        </Pressable>
        </View>
    </View>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
   name:{
        color: "black",
        fontsize: 25,
        marginTop: 60,
        left: 0
    },
    title: {
        color: "white",
        fontSize: 50,
        fontWeight: 'bold',
        allignItems: "left"
    },
    container: {
        flex: 1,
        justifyContent: "space-between",
      padding: 20   
        
    },
    background: {
        flex: 1,
        resizeMode: "cover"
    },
    buttonBorder:{
        backgroundColor: 'black',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
        borderWidth: 2,
        marginTop: 4
    },
    buttonText:{
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    buttonView: {
        marginBottom: 80
    }
})