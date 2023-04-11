import React, {Component} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {KeyboardAvoidingView, Platform} from 'react-native';
import {
  // StyleSheet,
  // Text,
  // View,
  TextInput,
  Dimensions,
  Modal,
  Linking,
  Button,
  Alert,
} from 'react-native';
import {ProgressBar, Button as Button2} from 'react-native-paper';
// import React, { Component } from "react";
import Icon from 'react-native-vector-icons/FontAwesome';
import Icon1 from 'react-native-vector-icons/AntDesign';
import Icon2 from 'react-native-vector-icons/Entypo';
import Icon3 from 'react-native-vector-icons/MaterialIcons';
import Icon4 from 'react-native-vector-icons/Feather';
import Icon5 from 'react-native-vector-icons/FontAwesome5';

import {styles} from './appStyles';
const {width, height} = Dimensions.get('window');

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  TouchableOpacity,
} from 'react-native';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      background: ['#fff', '#243447'],
      Dm: 0,
      bc: [
        '#f1f6fb', //white
        '#15202B',
        '#e9eef3',
        '#2b3a5c',
        '#213255', //text color
        '#D2D6DD',
        '#213255',
        ,
        '#ffffff',
        '#2a4262',
        '#ffffff',
        '#2a4262',
      ],
      inputName: '',
      nameInput: '',
      x: [2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      h: [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      cardName: [
        'Sample',
        'Scroll For More',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
      ],
      cardNameValue: '',
      inputCount: 0,
      xp: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      cardColor: [
        '#6FC3F7',
        '#1E3799',
        '#76C043',
        '#0E6655',
        '#F7CA18',
        '#F39C12',
        '#C19FD3',
        '#4A148C',
        '#2BC3A9',
        '#008080',
        '#F08A5D',
        '#C95E0C',
        '#FF6B6B',
        '#D81B60',
        '#B0BEC5',
        '#757575',
        '#1ABC9C',
        '#2ECC71',
        '#3498DB',
        '#9B59B6',
        '#34495E',
        '#95A5A6',
        '#E67E22',
        '#F1C40F',
      ],
      data: '',
      dataPrint: 'no value initially',
      cardInputHeight: 0,
      iconName: ['pluscircleo', 'closecircleo'],
      cardIconNames: [
        'smile-o',
        'futbol-o',
        'gratipay',
        'trophy',
        'paw',
        'music',
        'smile-o',
        'futbol-o',
        'gratipay',
        'trophy',
        'paw',
        'music',
        'smile-o',
        'futbol-o',
        'gratipay',
      ],

      storedArrayString: '',
      sampleArray: [0, 0, 0, 0, 0],
      storedData: '',
      sx: '',
      sh: '',
      scn: '',
      sxp: '',
      time: new Date().getHours(),
      isVisible: false,
      inputValue: '',
      onLongPressValue: 0,
    };
  }
  componentDidMount() {
    this.retrieveData();
  }
  componentWillUnmount() {}
  componentDidUpdate() {
    this.storeData();
  }
  getTimeBasedMessage() {
    const {time} = this.state;
    if (time >= 0 && time < 2) {
      return 'Midnight';
    } else if (time >= 2 && time < 5) {
      return 'Early morning';
    } else if (time >= 5 && time < 9) {
      return 'Morning';
    } else if (time >= 9 && time < 11) {
      return 'Late morning';
    } else if (time >= 11 && time < 13) {
      return 'Afternoon';
    } else if (time >= 13 && time < 17) {
      return 'Dusk';
    } else if (time >= 17 && time < 19) {
      return 'Evening';
    } else if (time >= 19 && time < 22) {
      return 'Late night';
    } else if (time >= 22 && time < 24) {
      return 'Night';
    } else {
      return 'Dawn';
    }
  }
  retrieveData = async () => {
    try {
      const x = await AsyncStorage.getItem('@MyApp:x');
      const h = await AsyncStorage.getItem('@MyApp:h');
      const cardName = await AsyncStorage.getItem('@MyApp:cardName');
      const xp = await AsyncStorage.getItem('@MyApp:xp');
      const Dm = await AsyncStorage.getItem('@MyApp:Dm');

      if (x !== null) {
        this.setState({x: JSON.parse(x)});
      }
      if (h !== null) {
        this.setState({h: JSON.parse(h)});
      }
      if (cardName !== null) {
        this.setState({cardName: JSON.parse(cardName)});
      }
      if (xp !== null) {
        this.setState({xp: JSON.parse(xp)});
      }
      if (Dm !== null) {
        this.setState({Dm: JSON.parse(Dm)});
      }
    } catch (error) {
      console.log(error);
    }
  };
  storeData = async () => {
    try {
      await AsyncStorage.setItem('@MyApp:x', JSON.stringify(this.state.x));
      await AsyncStorage.setItem('@MyApp:h', JSON.stringify(this.state.h));
      await AsyncStorage.setItem(
        '@MyApp:cardName',
        JSON.stringify(this.state.cardName),
      );
      await AsyncStorage.setItem('@MyApp:xp', JSON.stringify(this.state.xp));
      await AsyncStorage.setItem('@MyApp:Dm', JSON.stringify(this.state.Dm));
    } catch (error) {
      console.log(error);
    }
  };

  updateArrayValue = () => {
    const {h} = this.state;
    const sampleArray2 = [...h];
    for (let i = 0; i < h.length; i++) {
      if (h[i] == 0) {
        sampleArray2[i] = 1;
        break;
      }
    }
    this.setState({h: sampleArray2});
  };
  emptyArrayValue = () => {
    const arrayNewThing = [0, 0, 0, 0, 0];
    this.setState({sampleArray: arrayNewThing});
  };

  handleInputChange = text => this.setState({inputName: text});

  addCardToScreen = () => {
    this.setState({
      cardInputHeight: this.state.cardInputHeight ? 0 : 1,
    });
  };
  handleInputChangecount = val => {
    this.setState({inputCount: val});
  };

  onPressed = () => {
    this.setState(
      {
        Dm: this.state.Dm ? 0 : 1,
      },
      () => {
        // Callback function to be executed after state is updated
        this.props.onTheme();
      },
    );
  };
  addDataHandler = async () => {
    AsyncStorage.setItem('myData', 'this is my data')
      .then(() => console.log('Data stored successfully'))
      .catch(err => console.log('Error storing data: ', err));

    AsyncStorage.getItem('myData')
      .then(data => this.setState({data: data}))
      .catch(err => console.log('Error retrieving data: ', err));
  };
  printDataHandler = async () => {
    AsyncStorage.getItem('myData').then(data =>
      this.setState({dataPrint: data}),
    );
  };
  plusClicked = Ind => {
    if (this.state.xp[Ind] >= this.state.x[Ind] - 1) {
      const {h, cardName, x, xp} = this.state;
      const newArray2 = [...h];
      const cardName3 = [...cardName];
      const x3 = [...x];
      const xp2 = [...xp];
      for (let i1 = Ind; i1 < 11; i1++) {
        x3[i1] = x3[i1 + 1];
        newArray2[i1] = newArray2[i1 + 1];
        cardName3[i1] = cardName3[i1 + 1];
        xp2[i1] = xp2[i1 + 1];
      }
      x3[11] = 0;
      newArray2[11] = 0;
      cardName3[11] = '';
      xp2[11] = 0;
      this.setState({
        h: newArray2,
        cardName: cardName3,
        x: x3,
        xp: xp2,
      });
    } else {
      const xp2 = [...this.state.xp];
      xp2[Ind] = xp2[Ind] + 1;
      this.setState({xp: xp2});
    }
  };
  addCard = () => {
    if (this.state.cardNameValue == '' || this.state.inputCount == 0) {
      return;
    }
    const {h, cardName, x} = this.state;
    const newArray = [...h];
    const cardName2 = [...cardName];
    const x2 = [...x];
    let j1 = 0;
    for (let i3 = 0; i3 < 12; i3++) {
      if (newArray[i3] == 1) {
        newArray[j1] = newArray[i3];
        x2[j1] = x2[i3];
        cardName2[j1] = cardName2[i3];
        j1++;
      }
    }
    newArray[j1] = 1;
    cardName2[j1] = this.state.cardNameValue;
    x2[j1] = this.state.inputCount;
    this.setState({h: newArray, cardName: cardName2, x: x2});
  };
  onPressButton = Ind => {};
  handleScroll = event => {
    const offsetY = event.nativeEvent.contentOffset.y; // get the current scroll position
    const itemHeight = height * 0.07; // set the height of each number item
    const selectedIndex = Math.floor(offsetY / itemHeight); // calculate the index of the selected number
    this.setState({inputCount: selectedIndex}); // update the state with the selected number
  };
  handleGoToDetails = () => {
    this.props.navigation.navigate('Login');
  };

  openModal = () => {
    this.setState({isVisible: true});
  };

  closeModal = () => {
    this.setState({isVisible: false});
  };

  handleInputChange = text => {
    this.setState({inputValue: text});
  };
  handleSubmit = () => {
    this.closeModal();
  };
  handleOnLongPressValue = Ind => {
    const {h, cardName, x, xp} = this.state;
    const newArray2 = [...h];
    const cardName3 = [...cardName];
    const x3 = [...x];
    const xp2 = [...xp];
    for (let i1 = Ind; i1 < 11; i1++) {
      x3[i1] = x3[i1 + 1];
      newArray2[i1] = newArray2[i1 + 1];
      cardName3[i1] = cardName3[i1 + 1];
      xp2[i1] = xp2[i1 + 1];
    }
    x3[11] = 0;
    newArray2[11] = 0;
    cardName3[11] = '';
    xp2[11] = 0;
    this.setState({
      h: newArray2,
      cardName: cardName3,
      x: x3,
      xp: xp2,
    });
  };

  render() {
    const numbers = [...Array(26).keys()];
    const {navigation, clicked} = this.props;
    const message = this.getTimeBasedMessage();
    let count = 0;
    for (let i = 0; i < 12; i++) {
      if (this.state.h[i] == 1) count++;
    }

    let transformedHabits = <View></View>;
    if (count > 0) {
      transformedHabits = this.state.h.map((_, i) => {
        if (_ > 0) {
          return (
            <View
              key={i}
              style={{
                margin: 5,
              }}>
              <View style={styles.ProgressBase}>
                <View style={styles.ProgressBarBottom}>
                  <ProgressBar
                    style={styles.cardOnBottom}
                    progress={this.state.xp[i] / this.state.x[i]}
                    color={this.state.cardColor[i + this.state.Dm]}
                  />
                </View>
                <View style={styles.ProgressBarTop}>
                  <ScrollView
                    contentContainerStyle={{flexGrow: 1}}
                    horizontal={true}
                    style={{
                      width: width * 0.09,
                      height: height * 0.09,
                      flexDirection: 'row',
                      borderRadius: 15,
                      backgroundColor: this.state.bc[this.state.Dm + 8],
                    }}>
                    <View style={styles.cardIconNamesBg}>
                      <Icon
                        name={this.state.cardIconNames[i]}
                        size={height * 0.036}
                        color="#6CCABC"
                      />
                    </View>
                    <TouchableOpacity
                      onLongPress={() => this.handleOnLongPressValue(i)}
                      delayLongPress={750}>
                      <View
                        style={{
                          flex: 1,
                          width: width * 0.55,
                          padding: '2%',
                          justifyContent: 'space-around',
                          marginLeft: '5%',
                        }}>
                        <Text
                          style={{
                            color: this.state.bc[this.state.Dm + 9],
                            fontSize: 15,
                            fontWeight: 'bold',
                            fontStyle: 'Sans-serif',
                          }}>
                          {this.state.cardName[i]}
                        </Text>
                        <Text
                          style={{
                            fontSize: 12,
                            color: this.state.bc[this.state.Dm + 9],
                          }}>
                          {this.state.xp[i]} / {this.state.x[i]}
                        </Text>
                      </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => this.plusClicked(i)}>
                      <Icon2
                        name="plus"
                        style={{
                          padding: width * 0.06,
                          fontSize: 22,
                          text: 'bold',
                        }}
                        size={15}
                        color={this.state.bc[this.state.Dm + 9]}
                      />
                    </TouchableOpacity>
                    <View style={[{padding: 10}]}>
                      <Button
                        onPress={this.onPressButton(i)}
                        title="Reset!"
                        color="#FF3D00"
                      />
                    </View>
                  </ScrollView>
                </View>
              </View>
            </View>
          );
        }
      });
    }
    return (
      <SafeAreaView style={{backgroundColor: this.state.bc[this.state.Dm]}}>
        <StatusBar
          backgroundColor={this.state.bc[this.state.Dm]}
          barStyle={this.state.Dm == 0 ? 'dark-content' : 'light-content'}
        />
        <View style={styles.navigationBarBc}>
          <View style={styles.navigationBar}>
            <TouchableOpacity onPress={this.handleGoToDetails}>
              <View
                style={{
                  backgroundColor: this.state.bc[this.state.Dm + 2],
                  borderRadius: 14,
                  width: width * 0.13,
                  height: height * 0.06,
                  padding: width * 0.03,
                  alignItems: 'center',
                }}>
                <Icon4
                  name="user"
                  size={height * 0.025}
                  color={this.state.bc[this.state.Dm + 4]}
                />
              </View>
            </TouchableOpacity>
            <View>
              <View
                style={{
                  flex: 1,
                  flexDirection: 'column',
                  justifyContent: 'flex-start',
                }}>
                <Text
                  style={{
                    fontWeight: 'bold',
                    fontSize: 25,
                    width: width * 0.35,
                    textAlign: 'center',
                    color: this.state.bc[this.state.Dm + 4],
                  }}>
                  Done
                </Text>
                <Text
                  style={{
                    fontWeight: 'bold',
                    fontSize: 15,
                    width: width * 0.35,
                    textAlign: 'center',
                    color: this.state.bc[this.state.Dm + 9],
                  }}>
                  {message}
                </Text>
              </View>
            </View>
            <TouchableOpacity onPress={() => navigation.navigate('Calendar')}>
              <View
                style={{
                  backgroundColor: this.state.bc[this.state.Dm + 2],
                  borderRadius: 14,
                  width: width * 0.13,
                  height: height * 0.06,
                  padding: width * 0.03,
                  alignItems: 'center',
                }}>
                <Icon1
                  name="calendar"
                  size={height * 0.025}
                  color={this.state.bc[this.state.Dm + 4]}
                />
              </View>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.navigationBar2}>
          <Icon
            name={'sun-o'}
            size={20}
            color={this.state.bc[this.state.Dm + 4]}
            onPress={this.onPressed}
            style={styles.Bar2Icon}
          />
          <Icon2
            name="rainbow"
            size={20}
            color={this.state.bc[this.state.Dm + 4]}
            onPress={this.onPressed}
            style={styles.Bar2Icon}
          />
          <Icon2
            name="light-up"
            size={20}
            color={this.state.bc[this.state.Dm + 4]}
            onPress={this.onPressed}
            style={styles.Bar2Icon}
          />
          <Icon4
            name="moon"
            size={20}
            color={this.state.bc[this.state.Dm + 4]}
            onPress={this.onPressed}
            style={styles.Bar2Icon}
          />
          <Icon
            name="search"
            size={20}
            color={this.state.bc[this.state.Dm + 4]}
            style={styles.Bar2Icon}
          />
        </View>
        <View style={{height: height * 0.7}}>
          <ScrollView style={styles.habitsBack}>
            <View>{transformedHabits}</View>
          </ScrollView>
        </View>
        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={this.openModal}>
          <Icon name="plus" size={20} color="white" />
        </TouchableOpacity>
        <Modal
          visible={this.state.isVisible}
          animationType="fade"
          onRequestClose={this.closeModal}>
          <View style={styles.modalContainer}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                height: height * 0.1,
                opacity: 0.75,
                backgroundColor: '#E5E5E5',
                borderRadius: 25,
                margin: 15,
              }}>
              <TextInput
                value={this.state.cardNameValue}
                onChangeText={text => this.setState({cardNameValue: text})}
                placeholder="Track"
                placeholderTextColor="#A9A9A9"
                style={{
                  flex: 1,
                  borderRadius: 25,
                  padding: 10,
                  color: '#000',
                }}
              />
              <TextInput
                value={this.state.inputCount}
                onChangeText={text => this.setState({inputCount: text})}
                placeholder="N"
                placeholderTextColor="#A9A9A9"
                keyboardType="numeric"
                style={{
                  width: width * 0.12,
                  borderRadius: 10,
                  padding: 10,
                  color: '#000',
                }}
              />
              <TouchableOpacity
                style={{
                  backgroundColor: '#2ecc71',
                  borderRadius: 25,
                  justifyContent: 'center',
                  alignItems: 'center',
                  padding: 10,
                }}
                onPress={this.addCard}>
                <Text
                  style={{
                    color: '#FFF',
                    fontWeight: 'bold',
                  }}>
                  Add
                </Text>
              </TouchableOpacity>
            </View>

            <Button title="Submit" onPress={this.handleSubmit} />
          </View>
        </Modal>
      </SafeAreaView>
    );
  }
}

export default Home;
