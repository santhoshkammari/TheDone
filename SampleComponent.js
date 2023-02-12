import React from 'react';
import { TextInput,View, Text } from 'react-native';

const SampleComponent = (props) => {
  return (
    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
      <TextInput
style={{margin:10,width:100,height: 40, borderColor: 'gray', borderWidth: 1}}        onChangeText={(name) => this.setState({name})}
        value={this.state.name}
        placeholde="input habit name"
      />
      <TextInput
        style={{margin:10,width:100,height: 40, borderColor: 'gray', borderWidth: 1}}
        onChangeText={this.props.onChangeText}
        value={this.props.name}
        placeholder="number"
        keyboardType="numeric"
      />
    </View>
  );
};

export default SampleComponent;