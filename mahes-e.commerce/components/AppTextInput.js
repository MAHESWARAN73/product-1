import React from 'react'
import { View ,TextInput,StyleSheet,Text} from 'react-native'
import Icon from './Icon';
import colors from '../config/colors'
import defaultStyles from '../config/defaultStyles';
// import Icon from 'react-native-vector-icons/MaterialCommunityIcons'



const AppTextInput = ({icon,color,size,...otherProps}) => {

    return (
        <View style={styles.container}>
        {icon&&(<Icon name={icon} size={size} color={color}></Icon>)}
        <TextInput  style={defaultStyles.text} {...otherProps}></TextInput>    
        </View>
    );
}
// onChangeText={text=>setVal(text)}
export default AppTextInput;


const styles = StyleSheet.create({
    container:{
        marginLeft:5,
        flexDirection:'row',
        marginVertical:10,
        backgroundColor:colors.white
    }
})