import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';
import {connect} from 'react-redux';

const ShoppingCartIcon = (props) => {
  return (
    <View>
      <View
        style={{
          position: 'absolute',
          width: 30,
          height: 30,
          borderRadius: 15,
          backgroundColor: 'rgba(247,190,66,1.0)',
          right: 26,
          bottom: 6,
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 2000,
        }}>
        <Text style={{color: 'white', fontWeight: 'bold', fontSize: 15}}>
          {props.cartItems.length}
        </Text>
      </View>

      <Icon
        name="ios-cart"
        color="#7962f7"
        size={25}
        onPress={() => props.navigation.navigate('Cart')}
      />
    </View>
  );
};

const mapStateToProps = (state) => {
  return {
    cartItems: state,
  };
};

export default connect(mapStateToProps)(ShoppingCartIcon);
