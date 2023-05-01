import React, {Component} from 'react';
import {Button} from 'react-native-paper';
import {View} from 'react-native';
class Utilities extends Component {
  render() {
    const {navigation} = this.props;

    return (
      <View>
        <Button
          buttonColor="#C8A2C8"
          style={{padding: '5%', margin: '5%'}}
          onPress={() => navigation.navigate('Timer')}>
          Timer
        </Button>
        <Button
          buttonColor="#C8A2C8"
          style={{padding: '5%', margin: '5%'}}
          onPress={() => navigation.navigate('Track')}>
          Track
        </Button>
      </View>
    );
  }
}

export default Utilities;
