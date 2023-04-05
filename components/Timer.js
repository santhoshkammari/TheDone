import React, {Component} from 'react';
import {View, Text, TouchableOpacity, Alert, StyleSheet} from 'react-native';
import TimerInput from './TimerInput';
import PushNotification from 'react-native-push-notification';
class TimerCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0,
      timeLeft: 2 * 60,
      isTimerRunning: false,
    };
  }

  handleTimerStart = () => {
    this.setState({isTimerRunning: true}, () => {
      this.timerInterval = setInterval(() => {
        if (this.state.timeLeft > 0) {
          this.setState(prevState => ({timeLeft: prevState.timeLeft - 1}));
        } else {
          clearInterval(this.timerInterval);
          this.setState({isTimerRunning: false});
          Alert.alert('Time is up!');
        }
      }, 1000);
    });
  };

  handleTimerStop = () => {
    this.setState({isTimerRunning: false});
    clearInterval(this.timerInterval);
  };

  handleTimerReset = () => {
    this.setState({
      value: 0,
      timeLeft: 2 * 60,
      isTimerRunning: false,
    });
    clearInterval(this.timerInterval);
  };

  handleCardClick = () => {
    if (!this.state.isTimerRunning) {
      this.handleTimerStart();
    }
  };

  handleValueChange = value => {
    this.setState({
      value: parseInt(value),
      timeLeft: parseInt(value) * 60,
    });
  };

  render() {
    return (
      <View style={styles.cardContainer}>
        <TouchableOpacity onPress={this.handleCardClick}>
          <Text style={styles.timerText}>{this.state.timeLeft}</Text>
        </TouchableOpacity>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            onPress={
              this.state.isTimerRunning
                ? this.handleTimerStop
                : this.handleCardClick
            }
            style={[styles.button, styles.startButton]}>
            <Text style={styles.buttonText}>
              {this.state.isTimerRunning ? 'Stop' : 'Start'}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={this.handleTimerReset}
            style={[styles.button, styles.resetButton]}>
            <Text style={styles.buttonText}>Reset</Text>
          </TouchableOpacity>
        </View>
        <TimerInput
          value={this.state.value}
          onChange={this.handleValueChange}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    padding: 16,
    margin: 16,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  timerText: {
    fontSize: 24,
    color: 'red',
    textAlign: 'center',
  },
  resetText: {
    fontSize: 16,
    marginTop: 16,
    color: '#007AFF',
    textAlign: 'center',
    borderRadius: 5,
    borderColor: 'black',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 16,
  },
  button: {
    flex: 1,
    paddingVertical: 12,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  startButton: {
    backgroundColor: 'green',
    marginRight: 8,
  },
  resetButton: {
    backgroundColor: 'red',
    marginRight: 8,
  },
});

export default TimerCard;
