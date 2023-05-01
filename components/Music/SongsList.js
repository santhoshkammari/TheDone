import React, {Component} from 'react';
import {
  View,
  StyleSheet,
  Dimensions,
  Modal,
  Text,
  TouchableOpacity,
  ImageBackground,
  ScrollView,
} from 'react-native';
import {Button} from 'react-native-paper';
const music = require('../../assets/music.json');
import AsyncStorage from '@react-native-async-storage/async-storage';
const {width, height} = Dimensions.get('window');
import axios from 'axios';
import SoundPlayer from 'react-native-sound-player';

import {SafeAreaView} from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/FontAwesome';
import DocumentPicker from 'react-native-document-picker';

class SongsList extends Component {
  state = {
    data: null,
    dataString: null,
    isVisible: false,
    selectedAudio: null,
    playButton: true,
    isPlaying: false,
  };
  componentDidMount() {
    this.retrieveData();
  }
  componentDidUpdate() {
    this.storeData();
  }

  retrieveData = async () => {
    try {
      const dataString = await AsyncStorage.getItem('@MyApp:dataString');
      if (dataString !== null) {
        this.setState({dataString});
      }
    } catch (error) {
      console.log(error);
    }
  };
  storeData = async () => {
    try {
      await AsyncStorage.setItem('@MyApp:dataString', this.state.dataString);
    } catch (error) {
      console.log(error);
    }
  };
  fetchData = async () => {
    try {
      const response = await axios.get(
        'https://firebasestorage.googleapis.com/v0/b/thedone-5b7f0.appspot.com/o/data%2Fmusic.json?alt=media&token=34a90206-3110-4b5c-a117-a3a36c86b164',
      );
      const data = response.data;
      const dataString = JSON.stringify(data);
      this.setState({data, dataString, isVisible: true});
    } catch (error) {
      console.error(error);
    }
  };
  playAudio = async () => {
    const {selectedAudio, isPlaying} = this.state;
    if (selectedAudio) {
      if (!isPlaying) {
        try {
          await SoundPlayer.playUrl(selectedAudio.uri);
          console.log('Playing ' + selectedAudio.name);
        } catch (error) {
          console.log('Error playing ' + selectedAudio.name + ': ' + error);
        }
      } else {
        SoundPlayer.resume();
      }
      this.setState({isPlaying: true, playButton: false});
    }
  };
  stopAudio = async () => {
    SoundPlayer.pause();
    this.setState({playButton: true});
  };
  selectAudio = async () => {
    try {
      const results = await DocumentPicker.pickMultiple({
        type: [DocumentPicker.types.audio],
      });
      this.setState({
        selectedAudio: results[0],
        isPlaying: false,
        playButton: true,
      });
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
    const {navigation, handleTags} = this.props;
    const songList = JSON.parse(this.state.dataString);
    const {selectedAudio, playButton, isPlaying} = this.state;
    const iconName = playButton ? 'play' : 'pause';
    const play = playButton ? this.playAudio : this.stopAudio;

    return (
      <SafeAreaView style={{height: '100%'}}>
        <View style={styles.headerContainer}>
          <Text style={styles.headerText}>Listen Now</Text>

          <Icon name="refresh" size={25} onPress={this.fetchData} />
        </View>
        {this.state.dataString ? (
          <ScrollView>
            {songList['tags'].map((tag, index) => (
              <View key={index}>
                <ImageBackground
                  source={require('../../assets/songImages/3.png')}
                  style={{
                    height: height * 0.15,
                    justifyContent: 'center',
                    paddingLeft: width * 0.6,
                    margin: '2%',
                  }}>
                  <Button
                    labelStyle={{fontSize: 20}}
                    onPress={() => {
                      handleTags(tag, this.state.dataString);
                      navigation.navigate('MusicPlayer');
                    }}>
                    {tag}
                  </Button>
                </ImageBackground>
              </View>
            ))}
          </ScrollView>
        ) : null}
        <View
          style={[
            styles.buttonDriveContainer,
            {
              flexDirection: 'row',
              padding: '3%',
              backgroundColor: '#8FBC8F',
            },
          ]}>
          <Text style={styles.buttonText} onPress={this.selectAudio}>
            {selectedAudio ? selectedAudio.name : 'Drive Player'}
          </Text>
          <Icon
            name={iconName}
            size={25}
            style={{paddingLeft: '3%', paddingRight: '2%'}}
            onPress={play}
          />
        </View>
      </SafeAreaView>
    );
  }
}
const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FDF5E6',
  },
  container: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 8,
    margin: 8,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 3,
  },
  albumArt: {
    width: 64,
    height: 64,
    borderRadius: 4,
    marginRight: 16,
  },
  textContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  songName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
  },
  artistName: {
    fontSize: 14,
    color: '#999',
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#F8F8F8',
    borderRadius: 10,
    padding: 16,
    margin: 16,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 2,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#202020',
  },
  buttonContainer: {
    backgroundColor: '#5DB075',
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    width: width * 0.7,
  },
  buttonDriveContainer: {
    width: width * 0.9,

    borderRadius: 10,
    // backgroundColor: '#5DB075',
    justifyContent: 'space-between',
    alignItems: 'center',
    position: 'absolute',
    bottom: height * 0.01,
    right: width * 0.05,
    elevation: 3,
  },
});

export default SongsList;
