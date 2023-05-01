// import React, {Component} from 'react';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import {
//   View,
//   Text,
//   TouchableOpacity,
//   ScrollView,
//   Alert,
//   Animated,
//   StyleSheet,
//   TextInput,
//   Modal,
// } from 'react-native';

// import {Button, Card, ProgressBar} from 'react-native-paper';
// import notifee from '@notifee/react-native';

// class TimerCard extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       savedTimes: [],
//       y: 0.5,
//       timeLeft: 25,
//       isTimerRunning: false,
//       minutes: 25,
//       isRunning: false,
//       progress: new Animated.Value(0),
//       showModal: false,
//     };
//   }
//   async onDisplayNotification() {
//     const channelId = await notifee.createChannel({
//       id: 'custom-sound',
//       name: 'Channel with custom sound',
//       sound: 'true',
//     });

//     await notifee.displayNotification({
//       title: 'Great Work',
//       body: 'Successfully Completed the task',
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
//       this.setState({showModal: true});
//     }, 1000);
//   };
//   startTimer = () => {
//     this.setState({isTimerRunning: true, minutes: this.state.timeLeft}, () => {
//       this.timerInterval = setInterval(() => {
//         if (this.state.timeLeft > 0) {
//           this.setState(prevState => ({
//             timeLeft: prevState.timeLeft - 1,
//             y:
//               (this.state.minutes - prevState.timeLeft + 1) /
//               this.state.minutes,
//           }));
//         } else {
//           clearInterval(this.timerInterval);
//           this.setState({isTimerRunning: false});
//           this.onPressButton();
//         }
//       }, 1000);
//     });
//   };

//   stopTimer = () => {
//     this.setState({isTimerRunning: false});
//     clearInterval(this.timerInterval);
//   };

//   handleScroll = event => {
//     const value = event.nativeEvent.contentOffset.y;
//     const index = Math.round(value / 50);
//     const minutes = [25, 30, 45, 60][index];
//     this.setState({minutes});
//   };
//   closeModal = () => {
//     this.setState({showModal: false});
//   };
//   componentDidMount() {
//     this.retrieveData();
//   }
//   componentDidUpdate() {
//     this.storeData();
//   }
//   retrieveData = async () => {
//     try {
//       const savedTimes = await AsyncStorage.getItem('@MyApp:savedTimes');

//       if (savedTimes !== null) {
//         this.setState({savedTimes: JSON.parse(savedTimes)});
//       }
//     } catch (error) {
//       console.log(error);
//     }
//   };
//   storeData = async () => {
//     try {
//       await AsyncStorage.setItem(
//         '@MyApp:savedTimes',
//         JSON.stringify(this.state.savedTimes),
//       );
//     } catch (error) {
//       console.log(error);
//     }
//   };
//   handleSaveTime = () => {
//     const {savedTimes} = this.state;
//     const currentTime = new Date().toString().slice(0, 21); // get the current time from the phone
//     this.setState({
//       savedTimes: [...savedTimes, currentTime],
//     });
//   };

//   handleDeleteTime = index => {
//     const {savedTimes} = this.state;
//     const newSavedTimes = [...savedTimes];
//     newSavedTimes.splice(index, 1); // remove the time at the given index
//     this.setState({
//       savedTimes: newSavedTimes,
//     });
//   };
//   handleTimerStart = () => {
//     this.setState({isTimerRunning: true}, () => {
//       this.timerInterval = setInterval(() => {
//         if (this.state.timeLeft > 0) {
//           this.setState(prevState => ({timeLeft: prevState.timeLeft - 1}));
//         } else {
//           clearInterval(this.timerInterval);
//           this.setState({isTimerRunning: false});
//           Alert.alert('Time is up!');
//         }
//       }, 1000);
//     });
//   };

//   handleTimerStop = () => {
//     this.setState({isTimerRunning: false});
//     clearInterval(this.timerInterval);
//   };

//   handleTimerReset = () => {
//     this.setState({
//       value: 0,
//       timeLeft: 0,
//       isTimerRunning: false,
//     });
//     clearInterval(this.timerInterval);
//   };

//   handleCardClick = () => {
//     if (!this.state.isTimerRunning) {
//       this.handleTimerStart();
//     }
//   };

//   handleValueChange = value => {
//     this.setState({
//       value: parseInt(value),
//       timeLeft: parseInt(value) * 60,
//     });
//   };

//   render() {
//     const {navigation} = this.props;
//     const {savedTimes} = this.state;
//     const {minutes, isRunning, progress, isTimerRunning} = this.state;
//     const max = minutes * 60 * 1000;
//     const remaining = progress.interpolate({
//       inputRange: [0, 1],
//       outputRange: [max, 0],
//     });
//     const progressStyle = {
//       strokeDashoffset: remaining,
//     };
//     const buttonLabel = isTimerRunning ? 'Stop' : 'Start';
//     const buttonAction = isTimerRunning ? this.stopTimer : this.startTimer;

//     return (
//       <View
//         style={{
//           flexDirection: 'column',
//           height: '100%',
//         }}>
//         <View style={styles.container2}>
//           <View style={{flex: 1, height: '100%'}}>
//             <View
//               style={{
//                 position: 'absolute',
//               }}>
//               <ProgressBar
//                 progress={this.state.y}
//                 color={'#6200ee'}
//                 style={{
//                   width: 200,
//                   height: 200,
//                   borderRadius: 100,
//                   borderWidth: 0,
//                   overflow: 'hidden',
//                   backgroundColor: '#f2f2f2',
//                 }}
//               />
//             </View>
//             <View
//               style={{
//                 opacity: 0.9,
//               }}>
//               <View style={styles.circle}>
//                 <View style={styles.selectedValue}></View>
//                 <Animated.View style={[styles.progress, progressStyle]}>
//                   <View style={styles.progressBackground} />
//                 </Animated.View>
//                 <TouchableOpacity style={styles.button2} onPress={buttonAction}>
//                   <Text style={styles.buttonLabel}>{buttonLabel}</Text>
//                 </TouchableOpacity>
//                 <View>
//                   <TextInput
//                     style={styles.input}
//                     value={this.state.timeLeft}
//                     onChangeText={text => this.setState({timeLeft: text})}
//                     placeholder={this.state.timeLeft.toString()}
//                     keyboardType="numeric"
//                     placeholderTextColor={'#213255'}
//                     caretHidden={true}
//                   />
//                 </View>
//               </View>
//             </View>
//           </View>
//           <Modal
//             visible={this.state.showModal}
//             onRequestClose={() => this.setState({showModal: false})}
//             animationType="slide"
//             transparent={true}>
//             <View style={styles.modalContainer}>
//               <View style={styles.modalContent}>
//                 <Text style={styles.modalText}>Greak Work! Keep it UP</Text>
//               </View>
//               <Button
//                 mode="contained"
//                 style={{width: '50%', height: 50}}
//                 onPress={() => this.closeModal()}>
//                 close
//               </Button>
//             </View>
//           </Modal>
//         </View>
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   modalContainer: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: 'rgba(0, 0, 0, 0.5)',
//   },
//   modalContent: {
//     backgroundColor: 'white',
//     padding: 20,
//     borderRadius: 10,
//     alignItems: 'center',
//     margin: 10,
//   },
//   modalText: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginBottom: 20,
//     color: 'red',
//   },
//   picker: {
//     backgroundColor: '#f1f1f1',
//     opacity: 0.2,
//     width: 100,
//     height: 250,
//   },
//   container2: {
//     flex: 1,
//     flexDirection: 'column',
//     padding: '5%',
//     justifyContent: 'center',
//     textAlign: 'center',
//     alignItems: 'center',
//   },
//   circle: {
//     width: 200,
//     height: 200,
//     borderRadius: 100,
//     backgroundColor: '#f1f1f1',
//     justifyContent: 'center',
//     alignItems: 'center',
//     position: 'relative',
//   },
//   selectedValue: {
//     position: 'absolute',
//     top: 70,
//     left: 0,
//     right: 0,
//     alignItems: 'center',
//   },
//   selectedValueText: {
//     fontSize: 60,
//     fontWeight: 'bold',
//     color: '#333',
//   },
//   selectedValueLabel: {
//     fontSize: 20,
//     color: '#666',
//   },
//   progress: {
//     position: 'absolute',
//     top: 0,
//     left: 0,
//     width: 200,
//     height: 200,
//     transform: [{rotate: '-90deg'}],
//   },
//   progressBackground: {
//     position: 'absolute',
//     top: 0,
//     left: 0,
//     width: 200,
//     height: 200,
//     borderRadius: 100,
//     borderWidth: 10,
//     borderColor: '#e5e5e5',
//     borderStyle: 'solid',
//     transform: [{rotate: '0deg'}],
//   },
//   button2: {
//     position: 'absolute',
//     bottom: 20,
//     left: 0,
//     right: 0,
//     backgroundColor: '#333',
//     borderRadius: 30,
//     paddingVertical: 10,
//     paddingHorizontal: 20,
//   },
//   buttonLabel: {
//     color: '#fff',
//     fontSize: 18,
//     fontWeight: 'bold',
//     textAlign: 'center',
//   },
//   input: {
//     height: 80,
//     width: 120,
//     padding: 10,
//     textAlign: 'center',
//     fontSize: 50,
//   },

//   cardContainer: {
//     backgroundColor: '#FFFFFF',
//     borderRadius: 10,
//     padding: 16,
//     margin: 16,
//     shadowColor: '#000000',
//     shadowOffset: {
//       width: 0,
//       height: 2,
//     },
//     shadowOpacity: 0.25,
//     shadowRadius: 3.84,
//     elevation: 5,
//   },
//   timerText: {
//     fontSize: 24,
//     color: 'red',
//     textAlign: 'center',
//   },
//   resetText: {
//     fontSize: 16,
//     marginTop: 16,
//     color: '#007AFF',
//     textAlign: 'center',
//     borderRadius: 5,
//     borderColor: 'black',
//   },
//   buttonContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-around',
//     marginVertical: 16,
//   },
//   button: {
//     flex: 1,
//     paddingVertical: 12,
//     borderRadius: 5,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   startButton: {
//     backgroundColor: 'green',
//     marginRight: 8,
//   },
//   resetButton: {
//     backgroundColor: 'red',
//     marginRight: 8,
//   },
// });

// export default TimerCard;
import React, {Component} from 'react';
import {View, Button, Text} from 'react-native';
import SoundPlayer from 'react-native-sound-player';
import DocumentPicker from 'react-native-document-picker';

class MusicPlayer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isPlaying: false,
      selectedAudio: null,
      playButton: true,
    };
  }

  handlePlay = () => {
    try {
      SoundPlayer.playSoundFile(this.state.selectedAudio, 'mp3');
      this.setState({isPlaying: true});
    } catch (e) {
      console.log(`cannot play the sound file`, e);
    }
  };

  handleStop = () => {
    try {
      SoundPlayer.stop();
      this.setState({isPlaying: false});
    } catch (e) {
      console.log(`cannot stop the sound file`, e);
    }
  };
  selectAudio = async () => {
    try {
      const results = await DocumentPicker.pickMultiple({
        type: [DocumentPicker.types.audio],
      });
      this.setState({
        selectedAudio: results[0].uri,
        isPlaying: false,
        playButton: true,
      });
      console.log(this.state.selectedAudio);
    } catch (err) {
      if (DocumentPicker.isCancel(err)) {
        console.log('User cancelled the picker');
      } else {
        console.log('Unknown Error: ' + JSON.stringify(err));
        throw err;
      }
    }
  };
  render() {
    const {isPlaying} = this.state;
    return (
      <View>
        <Button
          title={isPlaying ? 'Stop' : 'Play'}
          onPress={isPlaying ? this.handleStop : this.handlePlay}
        />
        <Button title={'SDCard'} onPress={this.selectAudio} />
        <Text style={{color: 'red'}}>
          {JSON.stringify(this.state.selectedAudio)}
        </Text>
      </View>
    );
  }
}

export default MusicPlayer;
