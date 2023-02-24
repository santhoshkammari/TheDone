import React, { Component ,useState}  from 'react';
import { View, Text, TouchableOpacity,TextInput ,Dimensions,Button} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet ,Image } from 'react-native';
import CardWithName from './CardWithName';
import SampleComponent from './SampleComponent';
import { NavigationContainer } from '@react-navigation/native';
import ButtonClicker from './MyButton.js';

import { Linking } from 'react-native'
const {width,height}=Dimensions.get('window');
class MyButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      times:0,
      habitName:'sample',
      counts:0

    };
  }

  onPress = () => this.setState({name:this.state.habitName,times:this.state.counts});
  render() {
    const handleInputChange=(text)=>this.setState({habitName:text})
    const handleInputChangecount=(val)=>{this.setState({counts:val});}
    return (
            <View>
      <Text>*input values ({this.state.name}) and {this.state.times}</Text>
        <View style={{flexDirection:'row',justifyContent:'space-between'}}>

            <View style={styles.card}>
               <TextInput       
                  value={this.state.habitName}
                  onChangeText={handleInputChange}
                  placeholder="Enter text here"
                   style={styles.input}/>
            </View>
            <View style={styles.numb}>
              <TextInput 
              value={this.state.counts}
              onChangeText={handleInputChangecount}
              placeholder="N" style={styles.input} keyboardType='numeric'/>
            </View>
            <View>
             <TouchableOpacity onPress={this.onPress}>
              <View style={styles.plus}>
                <Text style={styles.plusButton}>+</Text>
              </View>
               </TouchableOpacity>
            </View>
            
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  card: {
    padding: 10,
    backgroundColor: '#f0f0f0', //'#f0f0f0'
    borderRadius: 5,
    height:height*0.06,
    width:width*0.5
  },
  input: {
    padding: 0,
    borderWidth: 1,
    borderColor: '#f0f0f0', //ccc
    borderRadius: 5,
  },
  plusButton: {  
    backgroundColor:'red',
    alignItems: 'center',
    alignContent:'center',
    width:width*0.15,
    height:height*0.06,
    backgroundColor: '#0084ff',
    borderRadius: 5,
    padding: 5,
    paddingLeft:"50%",
    fontSize:25,
    
  },
  plusText: {  
    alignItems: 'center',
    alignContent:'center',
    color: '#fff',
    fontSize: 20,
  },
  numb:{
    
    width:width*0.1,
    height:height*0.06,
    padding: 10,
    backgroundColor: '#f0f0f0', //'#f0f0f0'
    borderRadius: 5,
  },
  plus:{
    width:width*0.1,
    height:height*0.06,
    padding: 0,
    borderRadius: 1,
    marginLeft:-5,
    marginRight:5,
  alignItems:'center'  },

  buttonText: {
    color: '#0000FF',
    fontWeight: 'bold',
    textAlign: 'center'
  }
  


});

export default MyButton;