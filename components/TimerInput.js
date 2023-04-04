import React, {Component} from 'react';
import {View, StyleSheet, TextInput, ScrollView} from 'react-native';
import {Text} from 'react-native-paper';
class TimerInput extends Component {
  render() {
    return (
      <ScrollView>
        <Text>Click On Seconds to start</Text>

        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>Enter Timer Value (mins):</Text>
          <TextInput
            style={styles.input}
            keyboardType="numeric"
            onChangeText={this.props.onChange}
            value={this.props.value}
          />
        </View>
      </ScrollView>
    );
  }
}
const styles = StyleSheet.create({
  inputContainer: {
    marginTop: 16,
    flexDirection: 'row',
    alignItems: 'center',
  },
  inputLabel: {
    fontSize: 16,
    marginRight: 8,
  },
  input: {
    fontSize: 16,
    padding: 8,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: '#CCCCCC',
    flex: 1,
    color: 'grey',
  },
});
export default TimerInput;
