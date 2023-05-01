import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Dimensions,
  Image,
} from 'react-native';
const {width, height} = Dimensions.get('window');

import SoundPlayer from 'react-native-sound-player';

import {Button, ProgressBar, MD3Colors} from 'react-native-paper';

import Icon from 'react-native-vector-icons/FontAwesome';
import {SafeAreaView} from 'react-native-safe-area-context';
import {TouchableOpacity} from 'react-native-gesture-handler';

class MusicPlayer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
      isVisible: false,
      songSelected: false,
      isPlaying: 0,
      song: "https://firebasestorage.googleapis.com/v0/b/thedone-5b7f0.appspot.com/o/blackpink%2FBLACKPINK%20-%20As%20If%20It-'s%20Your%20Last.flac?alt=media&token=b605e41e-245e-450f-977d-1261e74d4c35",
    };
  }
  openModal = () => {
    this.setState({isVisible: this.state.isVisible ? false : true});
  };
  handleSelectSong = (song, index) => {
    this.setState({songSelected: true, song, index, isPlaying: 0}, () =>
      this.handleStart(song),
    );
  };
  handleStart = song => {
    if (this.state.songSelected) {
      const {isPlaying} = this.state;
      if (isPlaying == 1) {
        this.setState({isPlaying: 2}, () => SoundPlayer.pause());
      } else if (isPlaying == 2) {
        this.setState({isPlaying: 1});
        SoundPlayer.resume();
      } else {
        console.log(this.state.isPlaying);
        SoundPlayer.addEventListener(
          'FinishedLoadingURL',
          ({success, song}) => {
            this.setState({isPlaying: 1});
          },
        );
        SoundPlayer.playUrl(song);
      }
    }
  };

  handleStop = song => {
    if (this.state.songSelected) {
      SoundPlayer.stop();
      this.setState({isPlaying: 0});
    }
  };

  extractTitleNames = url => {
    return decodeURIComponent(
      url.split('/').pop().split('.flac')[0].split('%20-').pop(),
    );
  };

  handleNextSong = (song, ind) => {
    const {navigation, tags, dataString} = this.props;
    const data = JSON.parse(dataString);
    const ind1 = (ind + 1) % data[tags].length;
    this.setState({index: ind1, song: data[tags][ind1]}, () => {
      SoundPlayer.playUrl(data[tags][ind1]);
    });
  };
  handlePreviousSong = (song, index) => {
    const {navigation, tags, dataString} = this.props;
    const data = JSON.parse(dataString);
    const ind1 = index == 0 ? data[tags].length - 1 : index - 1;
    this.setState({index: ind1, song: data[tags][ind1]}, () => {
      SoundPlayer.playUrl(data[tags][ind1]);
    });
  };
  handlePlay = () => {
    const {navigation, tags, dataString} = this.props;
    const data = JSON.parse(dataString);
    const x = Math.floor(Math.random() * data[tags].length);
    console.log(x);
    const song = data[tags][x];
    this.setState({song}, () => {
      SoundPlayer.playUrl(data[tags][x]);
    });
  };
  handleStopShuffle = () => {
    SoundPlayer.stop();
  };
  render() {
    const {navigation, tags, dataString} = this.props;
    const data = JSON.parse(dataString);

    return (
      <SafeAreaView style={{height: '100%', backgroundColor: 'white'}}>
        <View
          style={{
            justifyContent: 'center',
            flexDirection: 'row',
            padding: 10,
          }}>
          <Image
            source={require('../../assets/songImages/2.png')}
            style={{
              width: width * 0.5,
              height: height * 0.255,
            }}
          />
        </View>

        <View
          style={{
            flexDirection: 'row',
            height: height * 0.09,
            justifyContent: 'space-around',
            // backgroundColor: '#F6F6F6',
            paddingHorizontal: 20,
            paddingVertical: 10,
            borderRadius: 25,
          }}>
          <Button
            onPress={this.handlePlay}
            icon={'play'}
            mode="contained"
            labelStyle={{
              fontSize: 18,
              fontWeight: '500',
              color: '#FFFFFF',
            }}
            style={{
              width: '40%',
              backgroundColor: '#FF2D55',
              borderRadius: 20,
            }}
            contentStyle={{
              height: height * 0.07,
            }}>
            Play
          </Button>
          <Button
            onPress={this.handleStopShuffle}
            icon={'shuffle'}
            mode="contained"
            labelStyle={{
              fontSize: 18,
              fontWeight: '500',
              color: '#FFFFFF',
            }}
            style={{
              width: '40%',
              backgroundColor: '#1C1C1E',
              borderRadius: 20,
            }}
            contentStyle={{
              height: height * 0.07,
            }}>
            Shuffle
          </Button>
        </View>

        <View
          style={{
            flex: 1,
            flexDirection: 'column',
          }}>
          <ScrollView style={styles.container}>
            {data[tags].map((song, index) => (
              <TouchableOpacity
                key={index}
                onPress={() => this.handleSelectSong(song, index)}>
                <View style={styles.songContainer}>
                  <View style={{width: width * 0.1}}></View>
                  <View style={styles.titleContainer}>
                    <Text
                      style={[
                        styles.title,
                        {
                          color: this.state.song === song ? '#FFD700' : '#000',
                          fontFamily: 'San Francisco',
                        },
                      ]}>
                      {this.extractTitleNames(song)}
                    </Text>
                  </View>
                </View>
              </TouchableOpacity>
            ))}
          </ScrollView>

          <View
            style={{
              backgroundColor: 'white',
              flexDirection: 'column',
            }}>
            <Text
              style={{
                color: 'black',
                fontWeight: 'bold',
                fontSize: 20,
                padding: '2%',
                textAlign: 'center',
              }}>
              {this.extractTitleNames(this.state.song)}
            </Text>
            <View style={styles.buttonContainer}>
              <Icon
                name="backward"
                size={25}
                onPress={() =>
                  this.handlePreviousSong(this.state.song, this.state.index)
                }
                color={'#213255'}
              />

              <Icon
                name={
                  this.state.isPlaying == 0
                    ? 'play'
                    : this.state.isPlaying == 1
                    ? 'pause'
                    : 'play'
                }
                size={25}
                onPress={() => this.handleStart(this.state.song)}
                color={'#213255'}
              />
              <Icon
                name="forward"
                size={25}
                onPress={() =>
                  this.handleNextSong(this.state.song, this.state.index)
                }
                color={'#213255'}
              />
            </View>
          </View>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  songContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderColor: '#E0E0E0',
  },
  titleContainer: {
    flex: 3,
    justifyContent: 'center',
  },
  title: {
    fontWeight: 'bold',
    fontSize: height * 0.025,
  },
  detailsContainer: {
    flex: 2,
    alignItems: 'flex-end',
  },
  detailText: {
    fontSize: height * 0.02,
    color: '#808080',
    marginVertical: 3,
  },
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    justifyContent: 'space-around',
    padding: height * 0.01,
  },
  button: {
    marginLeft: 16,
  },

  listItem: {
    backgroundColor: '#FFFFFF', // Set list item background color
    borderRadius: 8,
    marginBottom: 16,
    padding: 5,
    elevation: 4, // Add shadow to create a card-like effect
  },
  songTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#213255', // Set song title color
  },
});

export default MusicPlayer;
