import React from "react";
import { View, ImageBackground, StyleSheet,Image,Text } from "react-native";
import AppButton from "../components/AppButton";
import { useNavigation } from '@react-navigation/native';
const WelcomeScreen = () => {
    const navigation=useNavigation()
   return (
    <ImageBackground
      style={styles.background}
      source={require("../assets/bulb.jpg")}
    >
       <View style={styles.logoContainer}>
            <Image style={styles.logo} source={require("../assets/products/logo El.jpg")} />
            
            <Text>Eletrical Sales App</Text>
        </View>
        <View style={{width:"100%"}}>
          <AppButton title="login" color="dark" onPress={()=>(navigation.navigate('Login'))}></AppButton>
          <AppButton title="register" color="mahes" onPress={()=>(navigation.navigate('Register'))}></AppButton>
         
        </View>
        {/* <View style={styles.loginButton}></View>
        <View style={styles.registerButton}></View> */}

    </ImageBackground>
  )
};
 
const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent:"flex-end",
    alignItems:"center"
  },
  loginButton: {
    backgroundColor: "dodgerblue",
    width: "100%",
    height: 70,
    marginVertical:10
  },
  registerButton: {
    backgroundColor: "deeppink",
    width: "100%",
    height: 70,

  },
  logo: {
    width:100,
    height:100,
},
logoContainer: {
    position: "absolute",
    top: 50,
    alignItems:"center"
  },
});
export default WelcomeScreen;