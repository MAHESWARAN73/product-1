import React from 'react'
import { StyleSheet, View } from 'react-native'
import {MaterialCommunityIcons}  from '@expo/vector-icons'

function Icons({name,size,color, icon,backgroundColor}) {
  return (
    <View style={[styles.container]}>
      <MaterialCommunityIcons name={name} size={size} color={color}></MaterialCommunityIcons>
    </View>
  )
}

export default Icons

const styles=StyleSheet.create({
  container:{
    flexDirection:'row',
    alignContent:'center',
    justifyContent:"center",
    width:50,
    height:50,
    borderRadius:25
    
  },
  icon:{
    paddingTop:7
  }
})
