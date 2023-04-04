import React, {Component} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {Calendar} from 'react-native-calendars';

class CalendarPopup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showCalendar: false,
      selectedDate: null,
    };
  }

  onCalendarPress = () => {
    this.setState({showCalendar: true});
  };

  onDayPress = day => {
    this.setState({showCalendar: false, selectedDate: day.dateString});
  };

  render() {
    return (
      <View style={{flex: 1}}>
        <TouchableOpacity onPress={this.onCalendarPress}>
          <Text>Click to show calendar</Text>
        </TouchableOpacity>
        {this.state.showCalendar && (
          <Calendar
            onDayPress={this.onDayPress}
            markedDates={{[this.state.selectedDate]: {selected: true}}}
          />
        )}
      </View>
    );
  }
}

export default CalendarPopup;
