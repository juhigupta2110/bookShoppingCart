import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  Image,
} from 'react-native';
import cartItems from '../redux/reducers/cartItems';
import Icon from 'react-native-vector-icons/Ionicons';
import {connect} from 'react-redux';

// ARRANGE IMPORTS

const Cart = (props) => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#e8e5e5',
      }}>
      <View
        style={{
          height: 60,
          width: 380,
          justifyContent: 'flex-start',
          paddingTop: 20,
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <View
          style={{
            width: 30,
            height: 30,
            borderRadius: 5,
            backgroundColor: 'rgba(247,190,66,1.0)',
            //right: 26,
            bottom: 6,
            alignItems: 'center',
            justifyContent: 'center',
            marginRight: 13, //NORMALIZE
          }}>
          <Text style={{color: 'white', fontWeight: 'bold', fontSize: 15}}>
            {props.cartItems.length}
          </Text>
        </View>

        <View style={{alignSelf: 'flex-start'}}>
          <Text style={{fontWeight: 'bold', fontSize: 22}}>Added</Text>
        </View>
      </View>

      <FlatList
        data={props.cartItems}
        renderItem={({item}) => (
          <TouchableOpacity
            style={styles.booksCompStyle}
            //key={item.uid}
          >
            <View style={styles.imgStyle}>
              <Image />
            </View>

            <View style={styles.contentStyle}>
              <View style={{marginBottom: 5}}>
                <Text style={{fontWeight: 'bold', fontSize: 18}}>
                  {item.name}
                </Text>
              </View>
              <Text style={{textAlign: 'left'}}>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
              </Text>
            </View>

            <View style={styles.iconViewStyle}>
              <Icon
                name="remove"
                size={22}
                style={{marginLeft: 3, marginTop: 1}}
                color="white"
                onPress={() => props.removeItemFromCart(item)}
              />
            </View>
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.uid}
      />
    </View>
  );

  //   return (
  //     <View>
  //       {props.cartItems.map((item, index) => (
  //         <View>
  //           <TouchableOpacity
  //             key={item.id}
  //             onPress={() => props.removeItemFromCart(item)}>
  //             <Text>{item.name}</Text>
  //           </TouchableOpacity>
  //         </View>
  //       ))}
  //     </View>
  //   );
};

const mapStateToProps = (state) => {
  return {
    cartItems: state,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    removeItemFromCart: (cartItem) =>
      dispatch({type: 'REMOVE_FROM_CART', payload: cartItem}),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);

const styles = StyleSheet.create({
  booksCompStyle: {
    flexDirection: 'row',
    width: 380,
    height: 120,
    borderRadius: 10,
    backgroundColor: 'white',
    margin: 10,
    padding: 15,
    alignItems: 'center',
  },
  imgStyle: {
    width: 80,
    height: 90,
    backgroundColor: '#c6c2c2',
    borderRadius: 10,
    marginRight: 10,
  },

  contentStyle: {
    width: 210,
    marginLeft: 10,
  },
  iconViewStyle: {
    backgroundColor: '#5d37f2',
    alignSelf: 'flex-end',
    width: 26,
    height: 26,
    borderRadius: 5,
    marginBottom: 5,
    marginLeft: 8,
    alignItems: 'center',
  },
});
