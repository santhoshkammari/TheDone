import React, {Component} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {
  // StyleSheet,
  // Text,
  // View,
  TextInput,
  Dimensions,
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

import {styles} from '../appStyles';
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

class HabitProgress extends Component {
  constructor(props) {
    super(props);
    this.state = {
      background: ['#fff', '#243447'],
      Dm: 0,
      bc: [
        '#f1f6fb',
        '#15202B',
        '#e9eef3',
        '#2b3a5c',
        '#213255',
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
    };
  }
  componentDidMount() {
    this.retrieveData();
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
    this.setState({
      Dm: this.state.Dm ? 0 : 1,
    });
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

  onPressButton = () => {
    alert('You clicked the button!');
  };
  handleScroll = event => {
    const offsetY = event.nativeEvent.contentOffset.y; // get the current scroll position
    const itemHeight = height * 0.07; // set the height of each number item
    const selectedIndex = Math.floor(offsetY / itemHeight); // calculate the index of the selected number
    this.setState({inputCount: selectedIndex}); // update the state with the selected number
  };

  componentDidUpdate() {
    this.storeData();
  }
  render() {
    const numbers = [...Array(26).keys()];
    let count = 0;
    for (let i = 0; i < 12; i++) {
      if (this.state.h[i] == 1) count++;
    }

    let transformedHabits = (
      <View>
        <Button
          title="add Daa"
          color={'#43506d'}
          onPress={this.addDataHandler}></Button>
        <Button
          title="print Data"
          color={'#43506d'}
          onPress={this.printDataHandler}></Button>
        <Text>{this.state.dataPrint}</Text>

        <Text>{JSON.stringify(this.state.sampleArray)}</Text>
        {/* <Text>{this.state.storedArrayString}</Text> */}
        <Text>{this.state.storedData}</Text>
        <Button
          title="get Data"
          color={'#43506d'}
          onPress={this.retrieveData}></Button>
        <Button
          title="save Data"
          color={'#43506d'}
          onPress={this.storeData}></Button>
        <Text>{JSON.stringify(this.state.h)}</Text>
        <Button
          title="update array Data"
          color={'#43506d'}
          onPress={this.updateArrayValue}></Button>
        <Button
          title="empty Data"
          color={'#43506d'}
          onPress={this.emptyArrayValue}></Button>
        <Text> x:{JSON.stringify(this.state.x)}</Text>
        <Text>h:{JSON.stringify(this.state.h)}</Text>
        <Text>cardnames:{JSON.stringify(this.state.cardName)}</Text>
        <Text>xp:{JSON.stringify(this.state.xp)}</Text>
      </View>
    );
    if (count > 0) {
      transformedHabits = this.state.h.map((_, i) => {
        if (_ > 0) {
          return (
            <View
              key={i}
              style={{
                margin: 8,
                height: height * 0.11,
              }}>
              <ProgressBar
                style={styles.cardOnBottom}
                progress={this.state.xp[i] / this.state.x[i]}
                color={this.state.cardColor[i + this.state.Dm]}
              />
              <View>
                <ScrollView
                  contentContainerStyle={{flexGrow: 1}}
                  horizontal={true}
                  style={{
                    width: width * 0.9,
                    height: height * 0.11, //0.1
                    position: 'relative',
                    top: -84,
                    zIndex: 2,
                    flexDirection: 'row',
                    backgroundColor: this.state.bc[this.state.Dm + 8],
                    margin: 5,
                    opacity: 0.5,

                    borderRadius: 15,
                  }}>
                  <View style={styles.doneIconsCard}>
                    <Icon
                      name={this.state.cardIconNames[i]}
                      size={height * 0.06}
                      color="#6CCABC"
                    />
                  </View>
                  <View
                    style={{
                      flex: 1,
                      width: width * 0.45,
                      margin: 8,
                    }}>
                    <Text
                      style={{
                        color: this.state.bc[this.state.Dm + 9],
                        // opacity:2,
                        fontSize: 18,
                        fontWeight: 'bold',
                        margin: 5,
                        fontStyle: 'Sans-serif',
                      }}>
                      {this.state.cardName[i]}
                    </Text>
                    <Text
                      style={{
                        fontSize: 15,
                        margin: 8,
                        color: this.state.bc[this.state.Dm + 9],
                      }}>
                      {this.state.xp[i]} / {this.state.x[i]}
                    </Text>
                  </View>
                  <TouchableOpacity onPress={() => this.plusClicked(i)}>
                    <Icon2
                      name="plus"
                      style={{
                        padding: 24,
                        fontSize: 22,
                        text: 'bold',
                      }}
                      size={8}
                      color={this.state.bc[this.state.Dm + 9]}
                    />
                  </TouchableOpacity>

                  <View style={[{padding: 10}]}>
                    <Button
                      onPress={this.onPressButton}
                      title="Quote it!!"
                      color="#FF3D00"
                    />
                  </View>
                </ScrollView>
              </View>
            </View>
          );
        }
      });
    }
    return (
      <SafeAreaView style={{backgroundColor: this.state.bc[this.state.Dm]}}>
        <StatusBar
          // barStyle={isDarkMode ? 'light-content' : 'dark-content'}
          backgroundColor={this.state.bc[9]}
        />

        <View style={styles.navigationBarBc}>
          <View style={styles.navigationBar}>
            <View
              style={{
                backgroundColor: this.state.bc[this.state.Dm + 2],
                borderRadius: 10,
                width: width * 0.15,
                height: height * 0.07,
                padding: 5,
                paddingTop: 10,
                paddingBottom: 10,
                alignItems: 'center',
              }}>
              <Icon4
                name="user"
                size={25}
                color={this.state.bc[this.state.Dm + 4]}
              />
            </View>

            <Text
              style={{
                fontWeight: 'bold',
                fontSize: 25,
                width: width * 0.35,
                textAlign: 'center',
                opacity: 0.6,
                color: this.state.bc[this.state.Dm + 4],
              }}>
              Done
            </Text>
            <View
              style={{
                backgroundColor: this.state.bc[this.state.Dm + 5],
                borderRadius: 10,
                width: width * 0.15,
                height: height * 0.07,
                padding: 5,
                paddingTop: 10,
                paddingBottom: 10,
                alignItems: 'center',
              }}>
              <Icon1
                name="calendar"
                size={25}
                color={this.state.bc[this.state.Dm + 4]}
              />
            </View>
          </View>
        </View>
        <View style={styles.navigationBarBc2}>
          <View style={styles.navigationBar2}>
            <Icon2
              name="light-up"
              size={20}
              color={this.state.bc[this.state.Dm + 4]}
              onPress={this.onPressed}
            />
            <Icon3
              name="system-update"
              size={20}
              color={this.state.bc[this.state.Dm + 4]}
              onPress={() =>
                Linking.openURL(
                  'https://drive.google.com/file/d/1ZwFl3j2tenGIqMWyqW13FO8wxaS7hzEQ/view?usp=share_link',
                )
              }
            />
            <Icon
              name="search"
              size={20}
              color={this.state.bc[this.state.Dm + 4]}
            />
          </View>
        </View>
        <ScrollView style={styles.habitsBack}>
          <View>{transformedHabits}</View>
        </ScrollView>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            height: height * 0.07,
            // backgroundColor: 'red',
            height: height * 0.1,
            opacity: 0.75,
          }}>
          <View>
            <TextInput
              value={this.state.cardNameValue}
              onChangeText={text => this.setState({cardNameValue: text})}
              placeholder="Track "
              placeholderTextColor={this.state.bc[this.state.Dm + 9]}
              style={{
                backgroundColor: this.state.bc[this.state.Dm + 8], //'#f0f0f0'
                borderRadius: 25,
                width: width * 0.4,
                textAlign: 'center',
                margin: 10,
                color: this.state.bc[this.state.Dm + 9],
              }}
            />
          </View>
          <View>
            <TextInput
              value={this.state.inputCount}
              onChangeText={text => this.setState({inputCount: text})}
              placeholder="N "
              placeholderTextColor={this.state.bc[this.state.Dm + 9]}
              keyboardType="numeric"
              style={{
                backgroundColor: this.state.bc[this.state.Dm + 8], //'#f0f0f0'
                borderRadius: 10,
                width: width * 0.12,
                textAlign: 'center',
                margin: 10,
                color: this.state.bc[this.state.Dm + 9],
              }}
            />
          </View>

          <Button2 mode="contained" style={{margin: 15}} onPress={this.addCard}>
            Add
          </Button2>
        </View>
      </SafeAreaView>
    );
  }
}

export default HabitProgress;
