import React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ProductsList } from './screens/ProductsList.js';
import { ProductDetails } from './screens/ProductDetails.js';
import { Cart } from './screens/Cart.js';
import { CartIcon } from './components/CartIcon.js';
import { CartProvider } from './CartContext.js';
import Login2 from './screens/login2'
import WelcomeScreen from './screens/WelcomScreen.js';
import Register from './screens/Register.js'
import AccountScreen from './screens/AccountScreen.js';
const Stack = createNativeStackNavigator();

function App() {
  return (
      <NavigationContainer>
        <CartProvider>
         {/* <Login2></Login2> */}
        
         <Stack.Navigator>
         <Stack.Screen name="welcomeScreen" component={WelcomeScreen} />  
        <Stack.Screen name="Login" component={Login2} />  
        <Stack.Screen name="Register" component={Register} /> 
        <Stack.Screen name="AccountScreen" component={AccountScreen} /> 
          <Stack.Screen name='Products' component={ProductsList} 
          options={({ navigation }) => ({
            title: 'Products',
            headerTitleStyle: styles.headerTitle,
            headerRight: () => <CartIcon navigation={navigation}/>
          })}/>
          <Stack.Screen name='ProductDetails' component={ProductDetails} 
          options={({ navigation }) => ({
            title: 'Product details',
            headerTitleStyle: styles.headerTitle,
            headerRight: () => <CartIcon navigation={navigation}/>,
          })} />
          <Stack.Screen name='Cart' component={Cart} 
          options={({ navigation }) => ({
            title: 'My cart',
            headerTitleStyle: styles.headerTitle,
            headerRight: () => <CartIcon navigation={navigation}/>,
          })}
          
          /> 
        </Stack.Navigator>
       
        </CartProvider>
       
        </NavigationContainer>
       
      // <Login2></Login2>
    
    
  );
}

const styles = StyleSheet.create({

  headerTitle: {
    fontSize: 20
  }
});

export default App;
