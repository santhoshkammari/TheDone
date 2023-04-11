import React, {Component} from 'react';
import {View, Text, Switch, StyleSheet, Linking} from 'react-native';
import {Button} from 'react-native-paper';

class Settings extends Component {
  state = {
    account: true,
    darkTheme: false,
    cellularData: true,
    notifications: true,
    locationServices: false,
    touchID: false,
    language: 'English',
  };

  render() {
    const {navigation, clicked} = this.props;
    const {
      account,
      darkTheme,
      cellularData,
      notifications,
      locationServices,
      touchID,
      language,
    } = this.state;

    return (
      <View style={styles.container}>
        <Button
          mode="contained"
          style={{margin: 10}}
          onPress={() =>
            Linking.openURL(
              'https://drive.google.com/file/d/1reeajb7qVopMi7C-nYIaul6tu7Yhk5lT/view?usp=share_link',
            )
          }>
          Update
        </Button>
        <View style={styles.setting}>
          <Text style={styles.settingText}>Account</Text>
          <Switch
            value={account}
            onValueChange={value => this.setState({account: value})}
          />
        </View>
        <View style={styles.setting}>
          <Text style={styles.settingText}>Dark Theme</Text>
          <Switch
            value={darkTheme}
            onValueChange={value => this.setState({darkTheme: value})}
          />
        </View>
        <View style={styles.setting}>
          <Text style={styles.settingText}>Cellular Data</Text>
          <Switch
            value={cellularData}
            onValueChange={value => this.setState({cellularData: value})}
          />
        </View>
        <View style={styles.setting}>
          <Text style={styles.settingText}>Notifications</Text>
          <Switch
            value={notifications}
            onValueChange={value => this.setState({notifications: value})}
          />
        </View>
        <View style={styles.setting}>
          <Text style={styles.settingText}>Location Services</Text>
          <Switch
            value={locationServices}
            onValueChange={value => this.setState({locationServices: value})}
          />
        </View>
        <View style={styles.setting}>
          <Text style={styles.settingText}>Touch ID</Text>
          <Switch
            value={touchID}
            onValueChange={value => this.setState({touchID: value})}
          />
        </View>
        <View style={styles.setting}>
          <Text style={styles.settingText}>Language</Text>
          <Text>{language}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  setting: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 10,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: '#ccc',
  },
  settingText: {
    fontSize: 16,
    color: 'black',
  },
});

export default Settings;
