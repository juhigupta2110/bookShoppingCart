import React from 'react';
import {View, Text, TouchableOpacity, Button} from 'react-native';

class HomeScreen extends React.Component {
  render() {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Button
          title="Books"
          onPress={() => this.props.navigation.navigate('BooksScreen')}
        />
        <Button
          title="Electronics"
          onPress={() => this.props.navigation.navigate('ElectronicsScreen')}
        />
      </View>
    );
  }
}

export default HomeScreen;
