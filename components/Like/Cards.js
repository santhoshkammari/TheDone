import React, {Component} from 'react';
import {
  View,
  Text,
  ScrollView,
  Modal,
  StyleSheet,
  Dimensions,
} from 'react-native';
import {Button, Card, TextInput} from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Icon from 'react-native-vector-icons/FontAwesome';
const {width, height} = Dimensions.get('window');
class MyComponent extends Component {
  state = {
    names: ['sample'],
    namesSavedTimes: [['sample']],
    nameInput: '',
    cardData: [], // array to store card data
    savedTimes: [], // array to store saved times for a card
    visibleModal: false, // boolean to control visibility of modal
    onIndex: 0,
  };

  componentDidMount() {
    this.loadCardData();
  }
  componentDidUpdate() {
    this.saveCardData();
  }

  // function to load card data from AsyncStorage
  loadCardData = async () => {
    try {
      const cardData = await AsyncStorage.getItem('@MyApp:namesSavedTimes');
      const cardDataNames = await AsyncStorage.getItem('@MyApp:names');

      if (cardData !== null) {
        this.setState({namesSavedTimes: JSON.parse(cardData)});
      }
      if (cardDataNames !== null) {
        this.setState({names: JSON.parse(cardDataNames)});
      }
    } catch (error) {
      console.error(error);
    }
  };

  // function to save card data to AsyncStorage
  saveCardData = async () => {
    try {
      await AsyncStorage.setItem(
        '@MyApp:namesSavedTimes',
        JSON.stringify(this.state.namesSavedTimes),
      );
      await AsyncStorage.setItem(
        '@MyApp:names',
        JSON.stringify(this.state.names),
      );
    } catch (error) {
      console.error(error);
    }
  };

  // function to handle input change for name input
  handleNameInputChange = nameInput => {
    this.setState({nameInput});
  };

  // function to handle submit button press for creating a new card
  handleCreateCard = () => {
    const {nameInput, cardData, names, namesSavedTimes} = this.state;
    if (nameInput.trim() === '') {
      return;
    }
    const newCard = {name: nameInput.trim(), savedTimes: []};
    const name = nameInput.trim();
    const x = [];
    const name2 = [...names, name];
    const x2 = [...namesSavedTimes, x];
    this.setState(
      {
        nameInput: '',
        cardData: [...cardData, newCard],
        names: name2,
        namesSavedTimes: x2,
      },
      this.saveCardData,
    );
  };

  // function to handle press on a card button
  handleCardPress = index => {
    this.setState({visibleModal: true, onIndex: index});
  };

  // function to handle press on saveTime button in modal
  handleSaveTime = () => {
    const {currentCardIndex, cardData} = this.state;
    const card = cardData[currentCardIndex];
    const currentTime = new Date().toLocaleString();
    card.savedTimes.push(currentTime);
    this.setState({savedTimes: card.savedTimes}, this.saveCardData);
  };

  // function to handle press on delete button for a saved time
  handleDeleteTime = timeIndex => {
    const {currentCardIndex, cardData, namesSavedTimes, onIndex} = this.state;
    const x = [...namesSavedTimes][onIndex];
    x.splice(timeIndex, 1);
    const namesSavedTimes2 = [...namesSavedTimes];
    namesSavedTimes2[onIndex] = x;
    this.setState({namesSavedTimes: namesSavedTimes2}, this.saveCardData);
  };

  closeModal = () => {
    this.setState({visibleModal: false});
  };
  // function to render modal

  handleSavedTimer = () => {
    const {cardData, onIndex, names, namesSavedTimes} = this.state;
    const currentTime = new Date().toString().slice(0, 21); // get the current time from the phone

    const namesSavedTimes2 = [...namesSavedTimes];
    namesSavedTimes2[onIndex] = [...namesSavedTimes2[onIndex], currentTime];

    // console.log(x);
    this.setState({namesSavedTimes: namesSavedTimes2});
    // console.log(JSON.stringify(this.state.savedTimes));
  };
  handleCardDelete = index => {
    const {names, namesSavedTimes} = this.state;
    const a = [...names];
    const b = [...namesSavedTimes];
    a.splice(index, 1);
    b.splice(index, 1);
    this.setState({names: a, namesSavedTimes: b});
  };
  render() {
    const {nameInput, cardData, visibleModal, onIndex, names, namesSavedTimes} =
      this.state;
    const x = cardData[onIndex];
    return (
      <View style={{flex: 1, height: '100%'}}>
        <ScrollView style={{height: height * 0.15}}>
          {this.state.names.length == 0
            ? null
            : names.map((card, index) => (
                <Card key={index} style={{margin: 10}}>
                  <Card.Content>
                    <Button
                      onLongPress={() => this.handleCardDelete(index)}
                      onPress={() => this.handleCardPress(index)}>
                      {card}
                    </Button>
                  </Card.Content>
                </Card>
              ))}
        </ScrollView>
        <TextInput
          label="Enter Name"
          value={nameInput}
          onChangeText={this.handleNameInputChange}
          onSubmitEditing={this.handleCreateCard}
        />
        {/* {this.renderCardButtons()} */}
        <Modal
          visible={visibleModal}
          animationType="fade"
          onRequestClose={this.closeModal}>
          <View style={styles.container2}>
            <Text style={styles.title2}>Saved Times:</Text>
            <ScrollView>
              {namesSavedTimes.length == 0
                ? null
                : namesSavedTimes[onIndex].map((time, index) => (
                    <Card key={index} style={styles.card2}>
                      <View style={styles.cardContent2}>
                        <Text style={styles.time2}>{time}</Text>
                        <Button
                          icon="delete"
                          onPress={() => this.handleDeleteTime(index)}
                          size={45}
                        />
                      </View>
                    </Card>
                  ))}
            </ScrollView>
            <Button mode="contained" onPress={this.handleSavedTimer}>
              Save Time
            </Button>
          </View>
        </Modal>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container2: {
    flex: 1,
    padding: 16,
    backgroundColor: 'white',
  },
  title2: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 16,
    marginBottom: 8,
    color: 'black',
  },
  card2: {
    marginVertical: 8,
    margin: 5,
    padding: 16,
  },
  cardContent2: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
export default MyComponent;
