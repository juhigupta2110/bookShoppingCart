import React from 'react';
import {View, Text, Button} from 'react-native';

const Products = () => {
  console.log(products);
  return (
    <View>
      {books.map((item, index) => (
        <View style={{marginTop: 30}}>
          <Button
            title={item.name + '   ' + item.price}
            //onPress={(item) => addItemsToCart(item)}
          />
        </View>
      ))}
    </View>
  );
};

// class Products extends React.Component {
//     constructor(props){
//         super();
//     }
//   render() {
//     return this.props.products.map((item, index) => {
//       <View key={index}>
//         <Button
//           title={item.name + '-' + item.price}
//           onPress={() => alert('add to cart')}
//         />
//       </View>;
//     });
//   }
// }

export default Products;
