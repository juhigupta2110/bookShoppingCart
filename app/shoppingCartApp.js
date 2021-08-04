import React, {Component} from 'react';
import {View, Text, Button} from 'react-native';
import HomeScreen from './screens/homeScreen';
import BooksScreen from './screens/booksScreen';
import ElectronicsScreen from './screens/electronicsScreen';
import ShoppingCartIcon from './components/shoppingCartIcon';
import Cart from './screens/cart';
import Icon from 'react-native-vector-icons/Ionicons';

import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

class ShoppingCartApp extends Component {
  render() {
    return (
      <Stack.Navigator
        initialRouteName="HomeScreen"
        screenOptions={(props) => ({
          headerLeft: () => (
            <Icon
              name="arrow-back"
              size={30}
              onPress={() => props.navigation.goBack()}
            />
          ),
          headerStyle: {
            backgroundColor: '#f7f4f4',
          },
          headerRight: () => <ShoppingCartIcon {...props} />,
        })}
        // screenOptions={{
        //   //headerTitle: 'Shopping App',

        //   headerStyle: {
        //     backgroundColor: '#f4511e',
        //   },
        //   headerTintColor: '#fff',
        //   headerTitleStyle: {
        //     fontWeight: 'bold',
        //   },

        // }}
      >
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{
            title: 'Book Shop',
          }}
        />
        <Stack.Screen
          name="BooksScreen"
          component={BooksScreen}
          options={{
            title: 'Book Shop',
            headerTitleStyle: {fontWeight: 'bold'},
          }}
        />
        <Stack.Screen
          name="ElectronicsScreen"
          component={ElectronicsScreen}
          //options={{title: 'Electronics Screen'}}
        />
        <Stack.Screen
          name="Cart"
          component={Cart}
          //options={{title: 'My Cart'}}
        />
      </Stack.Navigator>
    );
  }
}

export default ShoppingCartApp;
