import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AccountScreen from '../../screens/AccountScreen'
// import MessageScreen from '../../screens/MessagesScreen'
const Stack= createNativeStackNavigator();
const AccountNavigator = () => {
    return (
        <Stack.Navigator  name="modal" screenOptions={{presentation:"modal", gestureEnabled:true}}>
        <Stack.Screen name="account" component={AccountScreen} options={{headerShown:false}}/>
        <Stack.Screen name="ProductsService" component={MessageScreen} options={{gestureEnabled:true, headerShown:false, presentation:"modal"}}/>
        {/* <Stack.Screen name="listingdetails" component={ListingDetailsScreen} screenOptions={{gestureEnabled:true, headerShown:false, presentation:"modal" }}/> */}
    </Stack.Navigator>
    );
}

export default AccountNavigator;