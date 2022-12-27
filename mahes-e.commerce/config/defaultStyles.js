import React from 'react'
import { Platform, StyleSheet } from 'react-native'
import colors from './colors'

export default{
    text:{
        fontSize:20,
        color:"red",
        fontFamily:Platform.OS==='android'?'Roboto':'Avanir'
    },
    colors:colors
}