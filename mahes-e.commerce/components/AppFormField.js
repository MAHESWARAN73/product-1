import React from 'react'
import { StyleSheet } from 'react-native'
import AppTextInput from './AppTextInput';
import AppError from "./AppError";
import { useFormikContext } from 'formik';
const AppFormField = ({name,...otherProps}) => {
    const{setFieldTouched,handleChange,errors,touched}=useFormikContext()
    return (
        <>
         <AppTextInput 
         onChangeText={handleChange(name)} 
         onBlur={()=>setFieldTouched(name)} {...otherProps}></AppTextInput>
        {touched[name]&&<AppError error={errors[name]}></AppError>}
        </>
        
    );
}

export default AppFormField;



const styles = StyleSheet.create({
    
})