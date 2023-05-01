import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import moment from 'moment';
class Calendar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      month: moment().format('MMMM YYYY'),
      daysInMonth: moment().daysInMonth(),
      currentDate: moment().format('DD'),
      firstDayOfMonth: moment().startOf('month').format('dddd'),
    };
  }

  renderDays() {
    const days = [];
    for (let i = 1; i <= this.state.daysInMonth; i++) {
      days.push(
        <View style={styles.dayContainer} key={i}>
          <Text
            style={
              i == this.state.currentDate ? styles.currentDate : styles.date
            }>
            {i}
          </Text>
        </View>,
      );
    }
    return days;
  }

  render() {
    return (
      <View>
        <View style={styles.container}>
          <Text style={styles.month}>{this.state.month}</Text>
          <View style={styles.daysContainer}>
            <Text style={styles.day}>Sun</Text>
            <Text style={styles.day}>Mon</Text>
            <Text style={styles.day}>Tue</Text>
            <Text style={styles.day}>Wed</Text>
            <Text style={styles.day}>Thu</Text>
            <Text style={styles.day}>Fri</Text>
            <Text style={styles.day}>Sat</Text>
          </View>
          <View style={styles.datesContainer}>{this.renderDays()}</View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 10,
  },
  month: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  daysContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  day: {
    fontSize: 14,
    fontWeight: 'bold',
    width: 30,
    textAlign: 'center',
    color: 'black',
  },
  datesContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  dayContainer: {
    width: '14%',
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  date: {
    fontSize: 14,
    textAlign: 'center',
    color: '#333',
  },
  currentDate: {
    fontSize: 14,
    textAlign: 'center',
    color: 'red',
  },
});

export default Calendar;
