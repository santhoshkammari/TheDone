// import React, {Component} from 'react';
// import {View} from 'react-native';
// import {Text} from 'react-native-paper';
// class SavedData extends Component {
//   state = {};
//   render() {
//     return (
//       <View>
//         <Text>this is your saved data Lol</Text>
//       </View>
//     );
//   }
// }

// export default SavedData;
// <View>
//   <Text>this is your saved data Lol</Text>
// </View>;
import React, {Component} from 'react';
import {View, StyleSheet, ScrollView, Dimensions} from 'react-native';
import {Text, Button, Card} from 'react-native-paper';
const {width, height} = Dimensions.get('window');
import AsyncStorage from '@react-native-async-storage/async-storage';

class SavedData extends Component {
  state = {
    savedTimes: [],
  };
  componentDidMount() {
    this.retrieveData();
  }
  componentDidUpdate() {
    this.storeData();
  }
  retrieveData = async () => {
    try {
      const savedTimes = await AsyncStorage.getItem('@MyApp:savedTimes');

      if (savedTimes !== null) {
        this.setState({savedTimes: JSON.parse(savedTimes)});
      }
    } catch (error) {
      console.log(error);
    }
  };
  storeData = async () => {
    try {
      await AsyncStorage.setItem(
        '@MyApp:savedTimes',
        JSON.stringify(this.state.savedTimes),
      );
    } catch (error) {
      console.log(error);
    }
  };
  handleSaveTime = () => {
    const {savedTimes} = this.state;
    const currentTime = new Date().toLocaleTimeString(); // get the current time from the phone
    this.setState({
      savedTimes: [...savedTimes, currentTime],
    });
  };

  handleDeleteTime = index => {
    const {savedTimes} = this.state;
    const newSavedTimes = [...savedTimes];
    newSavedTimes.splice(index, 1); // remove the time at the given index
    this.setState({
      savedTimes: newSavedTimes,
    });
  };

  render() {
    const {savedTimes} = this.state;
    return (
      <View style={styles.container}>
        <Button mode="contained" onPress={this.handleSaveTime}>
          Save Time
        </Button>
        <Text style={styles.title}>Saved Times:</Text>
        <ScrollView>
          {savedTimes.map((time, index) => (
            <Card key={index} style={styles.card}>
              <View style={styles.cardContent}>
                <Text style={styles.time}>{time}</Text>
                <Button
                  icon="delete"
                  onPress={() => this.handleDeleteTime(index)}
                  size={45}
                />
              </View>
            </Card>
          ))}
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 16,
    marginBottom: 8,
  },
  card: {
    marginVertical: 8,
    margin: 5,
    padding: 16,
  },
  cardContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  time: {
    fontSize: 18,
    marginRight: 16,
  },
});

export default SavedData;
