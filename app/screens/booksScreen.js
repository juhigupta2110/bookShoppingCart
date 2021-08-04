import React from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  Image,
  FlatList,
} from 'react-native';
import {books} from '../../data';

import {connect} from 'react-redux';
import Icon from 'react-native-vector-icons/Ionicons';

const BooksScreen = (props) => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#e8e5e5',
      }}>
      <FlatList
        data={books}
        renderItem={({item}) => (
          <TouchableOpacity
            style={styles.booksCompStyle}
            //key={item.id}
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
                name="add"
                size={22}
                style={{marginLeft: 3, marginTop: 1}}
                color="white"
                onPress={() => props.addItemsToCart(item)}
              />
            </View>
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.id}
      />

      {/* {books.map((item) => (
        <TouchableOpacity
          style={styles.booksCompStyle}
          key={item.id}
          onPress={() => props.addItemsToCart(item)}>
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
              name="md-add"
              size={22}
              style={{marginLeft: 3, marginTop: 1}}
              color="white"
            />
          </View>
        </TouchableOpacity>
      ))} */}
    </View>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    addItemsToCart: (itemAdded) =>
      dispatch({type: 'ADD_TO_CART', payload: itemAdded}),
  };
};

export default connect(null, mapDispatchToProps)(BooksScreen);

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
