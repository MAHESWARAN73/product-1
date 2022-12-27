import React,{useState} from 'react'
import { StyleSheet, View ,Image, BackHandler} from 'react-native'
import AppButton from '../components/AppButton';
import AppTextInput from '../components/AppTextInput';
import colors from '../config/colors';
import { Formik } from 'formik';
import * as Yup from 'yup'
import CustomText from "../CustomText";
// import axios from 'axios'
import AppError from '../components/AppError';
import AppFormField from '../components/AppFormField';
import { useNavigation } from '@react-navigation/native';



const LoginScreen1= () => {

    const navigation=useNavigation()
    // const[data,setData]=useState({email:'',password:''})

    // function handle(data){
    //   console.log(data)
    // }
   

    const validationSchema= Yup.object().shape({
      name:Yup.string().required().label('Name'),
        email:Yup.string().required().email().label("Email"),
        password:Yup.string().required().min(2).label("Password")
       })
 let rawdata=
    JSON.stringify( {
        name:Formik.name,
        email:Formik.email,
        password:Formik.password
        })
 
  async function fetchData(){
  let raw=  await  fetch('http://localhost:2003/api/auth/login',{
        method:'POST',
        headers:{
            'Content-Type': 'application/x-www-form-urlencoded',
            'Accept': 'application/json'},
            body:rawdata
    }).then((response) =>{
        console.log(response);
      return response.json();
    })
    .catch(err=>{
            console.log(err.message);
  })
   
  }
    return (
        <View style={styles.container}>
        <Image source={require("../assets/products/logo El.jpg")} style={styles.image}></Image>
        {/* <View style={styles.form}> */}
        <Formik initialValues={{email:'',password:'',name:''}} onSubmit={(values)=>{
            console.log(values)
            navigation.navigate('Login')
            }} validationSchema={validationSchema}>
            {({handleSubmit,errors})=>(
                <>
                 <AppFormField name="name" placeholder="Enter Name" icon="contacts" size={20}></AppFormField>
                <AppFormField name="email" placeholder="Enter Email" icon="email" size={20} error={errors.email}></AppFormField>
                <AppFormField name="password" placeholder="Enter Password" icon="lock" size={20}></AppFormField>
                
             <AppButton title="Register" onPress={handleSubmit} backgroundColor="green"></AppButton>
                </>
            )}
        </Formik>
       
        {/* </View/> */}
      
        </View>  
    );
}


export default LoginScreen1;


const styles = StyleSheet.create({
    container:{
       marginTop:0,
       backgroundColor:"lightblue",
       flex:1
    },
    button:{
        backgroundColor:"pink",
        height:50,
        fontSize:30,
        paddingLeft:50,
        marginVertical:50,
        borderRadius:50
    },
    form:{
        marginTop:30,
        marginVertical:20
    },
    image:{
        height:100,
        width:100,
        borderRadius:50,
        marginLeft:120,
        justifyContent:'center',
        alignItems:'center'
        

    }
})