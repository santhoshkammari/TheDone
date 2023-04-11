// import React, {Component} from 'react';
// import {View, Button, Modal, Text, StyleSheet} from 'react-native';
// import notifee from '@notifee/react-native';

// class Screen extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       showModal: false, // state to control the modal visibility
//     };
//   }

//   async onDisplayNotification() {
//     const channelId = await notifee.createChannel({
//       id: 'custom-sound',
//       name: 'Channel with custom sound',
//       sound: 'true',
//     });

//     // Display a notification
//     await notifee.displayNotification({
//       title: 'Notification Title',
//       body: 'Main body content of the notification',
//       android: {
//         channelId,
//         smallIcon: 'ic_launcher',
//         pressAction: {
//           id: 'default',
//         },
//         timestamp: Date.now(),
//         showTimestamp: true,
//       },
//     });
//   }

//   onPressButton = () => {
//     setTimeout(() => {
//       this.onDisplayNotification();
//       this.setState({showModal: true}); // Set showModal state to true after 5 seconds
//     }, 5000); // Delay the execution for 5 seconds (5000 milliseconds)
//   };

//   render() {
//     return (
//       <View>
//         <Button
//           title="Display Notification"
//           onPress={() => this.onPressButton()}
//         />
//         <Modal
//           visible={this.state.showModal}
//           onRequestClose={() => this.setState({showModal: false})}
//           animationType="fade"
//           transparent={true}>
//           <View style={styles.modalContainer}>
//             <View style={styles.modalContent}>
//               <Text style={styles.modalText}>Yo, done notification!</Text>
//               {/* Add any other content you want in the modal */}
//             </View>
//           </View>
//         </Modal>
//       </View>
//     );
//   }
// }

// export default Screen;
import React, {Component} from 'react';
import {
  View,
  TextInput,
  Animated,
  Easing,
  Button,
  Modal,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Picker, DatePicker} from 'react-native-wheel-pick';

import SoundPlayer from 'react-native-sound-player';

class SongPlayer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isPlaying: false,
      showModal: false,
      hours: '',
      minutes: '',
      seconds: '',
      milliseconds: 0,
      savedTimes: [],
    };
    this.animatedValue = new Animated.Value(0);
    this.animation = null;
  }
  calculateMilliseconds = () => {
    const {hours, minutes, seconds} = this.state;
    const inputTime = new Date();
    inputTime.setHours(hours);
    inputTime.setMinutes(minutes);
    inputTime.setSeconds(seconds);
    const currentTime = Date.now();
    const timeDifference = -currentTime + inputTime.getTime();
    this.setState({milliseconds: timeDifference}, () => {
      this.handlePlayButton();
      this.handleModel();
    });
  };
  handlePlayButton = () => {
    const {isPlaying} = this.state;
    if (isPlaying) {
      SoundPlayer.pause();
    } else {
      SoundPlayer.playSoundFile('ma', 'mp3');
    }
    this.setState({isPlaying: !isPlaying});
  };
  handleModel = () => {
    const {showModal} = this.state;
    this.handlePlayButton();
    this.setState({showModal: !showModal});
  };

  startShaking = () => {
    this.animatedValue.setValue(0);
    this.animation = Animated.timing(this.animatedValue, {
      toValue: 1,
      duration: 100,
      useNativeDriver: true,
      easing: Easing.linear,
    }).start(() => {
      this.animation = Animated.timing(this.animatedValue, {
        toValue: -1,
        duration: 200,
        useNativeDriver: true,
        easing: Easing.linear,
      }).start(() => {
        this.animation = Animated.timing(this.animatedValue, {
          toValue: 0,
          duration: 100,
          useNativeDriver: true,
          easing: Easing.linear,
        }).start(() => {
          this.startShaking(); // Loop the animation
        });
      });
    });
  };
  onItemSelected = index => {
    this.setState({hours: index});
  };

  render() {
    const interpolateRotation = this.animatedValue.interpolate({
      inputRange: [-1, 1],
      outputRange: ['-5deg', '5deg'],
    });

    const animatedStyle = {
      transform: [{rotate: interpolateRotation}],
    };
    const {isPlaying, hours, minutes, seconds, milliseconds, savedTimes} =
      this.state;
    return (
      <View style={styles.container2}>
        <View style={styles.pickerContainer}>
          <Picker
            style={styles.picker}
            selectedValue="12"
            pickerData={Array.from({length: 24}).map((_, index) =>
              index.toString(),
            )}
            onValueChange={value => {
              this.setState({hours: value});
            }}
          />
          <Picker
            selectedValue="30"
            style={styles.picker}
            pickerData={Array.from({length: 60}).map((_, index) =>
              index.toString(),
            )}
            onValueChange={value => {
              this.setState({minutes: value});
            }}
          />
          <Picker
            selectedValue="30"
            style={styles.picker}
            pickerData={Array.from({length: 60}).map((_, index) =>
              index.toString(),
            )}
            onValueChange={value => {
              this.setState({seconds: value});
            }}
          />
        </View>

        <Text style={styles.result2}>Milliseconds: {milliseconds}</Text>

        <TouchableOpacity
          style={styles.button2}
          onPress={this.calculateMilliseconds}>
          <Text style={styles.buttonText2}>SetAlarm</Text>
        </TouchableOpacity>

        <Modal
          visible={this.state.showModal}
          onRequestClose={() => this.setState({showModal: false})}
          animationType="fade"
          transparent={true}>
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              <View style={styles.container}>
                <Animated.View style={[styles.card, animatedStyle]}>
                  <Text style={styles.text}>Alarm Clock</Text>
                </Animated.View>
              </View>
              <Button title="Done" onPress={this.handleModel} />
            </View>
          </View>
        </Modal>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  pickerContainer: {
    flex: 1,
    flexDirection: 'row',
    height: 150,
    backgroundColor: '#FFFFF8',
    borderRadius: 10,
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  picker: {
    backgroundColor: '#FFFFF4',
    width: 100,
    height: 180,
  },
  container2: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 16,
  },
  title2: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 30,
    color: '#333',
  },
  inputContainer2: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  input2: {
    borderWidth: 1,
    borderColor: 'black',
    flex: 1,
    height: 40,
    borderRadius: 8,
    paddingHorizontal: 16,
    backgroundColor: '#F3F3F3',
    color: '#333',
    marginRight: 16,
  },
  button2: {
    backgroundColor: '#ff6b6b', // Button background color
    borderRadius: 50, // Button border radius
    paddingVertical: 16, // Vertical padding
    paddingHorizontal: 32, // Horizontal padding
    alignItems: 'center', // Align items to center
    justifyContent: 'center', // Justify content to center
    shadowColor: '#000', // Add shadow color
    shadowOpacity: 0.2, // Add shadow opacity
    shadowOffset: {width: 0, height: 4}, // Add shadow offset
    shadowRadius: 6, // Add shadow radius
    elevation: 8, // Add elevation for Android
  },
  buttonText2: {
    fontSize: 24, // Increase font size
    fontWeight: 'bold',
    color: '#fff', // Button text color
  },
  result2: {
    fontSize: 16,
    color: '#666',
  },

  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  modalText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: 'red',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    width: 200,
    height: 200,
    borderRadius: 20,
    backgroundColor: 'lightblue',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
  button: {
    marginTop: 20,
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 4,
    backgroundColor: 'blue',
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
});

export default SongPlayer;
