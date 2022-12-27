import React from 'react';
import {Platform, StyleSheet,Text} from 'react-native';
import colors from './config/colors';


const CustomText=({children,style})=>{
    return(
        <Text style={[styles.text,style]}>{children}</Text>
     );
   
}

const styles=StyleSheet.create({
    text:{
       fontSize:15,
       color:colors.secondary,
    //   color:'brown',
    // color:Platform.OS==="android"?'red':'green'
    // ...Platform.select({
    //     ios:{
    //         fontSize:15,
    //         color:'blue'
    //     },
    //     android:{
    //         fontSize:25,
    //         color:'brown'
    
    //     }
    // })
         
    }
})

export default CustomText