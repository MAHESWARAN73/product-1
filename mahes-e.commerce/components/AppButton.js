import React from "react";
import { View, Text, StyleSheet ,TouchableOpacity} from "react-native";


 
import colors from "../config/colors";
const AppButton = ({title,color="primary",onPress}) => {
  return (
    <TouchableOpacity onPress={onPress}>
    <View style={[styles.button, {backgroundColor:colors[color]}]}>
      <Text style={styles.text} >{title} </Text>
    </View>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.secondary,
    width: "100%",
    borderRadius: 25,
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
    marginVertical:5,
    // marginTop:100
  
  },
   text: {
    color: colors.white,
    fontFamily: "Roboto",
    fontWeight: "bold",
    fontSize: 20,
    textTransform: "uppercase",
  },
});
export default AppButton;
