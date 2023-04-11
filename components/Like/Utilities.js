import React, {Component} from 'react';
import {Button} from 'react-native-paper';
import {View} from 'react-native';
class Utilities extends Component {
  render() {
    const {navigation} = this.props;
    return (
      <View>
        <Button
          mode="contained"
          style={{padding: '5%', margin: '5%'}}
          onPress={() => navigation.navigate('SavedData')}>
          SavedData
        </Button>
        <Button
          mode="contained"
          style={{padding: '5%', margin: '5%'}}
          onPress={() => navigation.navigate('Timer')}>
          Timer
        </Button>
        <Button
          mode="contained"
          style={{padding: '5%', margin: '5%'}}
          onPress={() => navigation.navigate('TestingFeature')}>
          TestingFeatures
        </Button>
      </View>
    );
  }
}

export default Utilities;
