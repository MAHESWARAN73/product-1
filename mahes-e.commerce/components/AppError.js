import React from 'react';
import CustomText from '../CustomText';
import {StyleSheet, View  } from 'react-native';

const AppError = ({error,visiable}) => {
    if(!error || visiable ) return null
    return (
        
        <CustomText style={{color:'red'}}>{error}</CustomText>
    );
}
const styles = StyleSheet.create({
    
})
export default AppError;