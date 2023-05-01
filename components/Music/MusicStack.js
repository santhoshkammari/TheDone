import React, {Component} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import MusicPlayer from './MusicPlayer';
import SongsList from './SongsList';
import {View, Text} from 'react-native';
const Stack = createStackNavigator();

class Like extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tags: 'tags',
      dataString: null,
    };
  }

  handleTags = (tag, dataString) => {
    this.setState({tags: tag, dataString});
  };
  render() {
    return (
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="SongsList">
          {props => (
            <SongsList
              {...props}
              handleTags={(tags, dataString) =>
                this.handleTags(tags, dataString)
              }
            />
          )}
        </Stack.Screen>
        <Stack.Screen name="MusicPlayer">
          {props => (
            <MusicPlayer
              {...props}
              tags={this.state.tags}
              dataString={this.state.dataString}
            />
          )}
        </Stack.Screen>
      </Stack.Navigator>
    );
  }
}

export default Like;
