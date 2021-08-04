import React from 'react';
import ShoppingCartApp from './app/shoppingCartApp';
import {NavigationContainer} from '@react-navigation/native';
import {Provider} from 'react-redux';
import Products from './app/components/products';
import store from './app/redux/store';

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <NavigationContainer>
          <ShoppingCartApp />
        </NavigationContainer>
      </Provider>
    );
  }
}
