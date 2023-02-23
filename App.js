import { StatusBar } from 'expo-status-bar';
import { SafeAreaView,StyleSheet, Text, View,Image,TextInput,Dimensions ,Linking,ScrollView} from 'react-native';
import CardWithName from './CardWithName';
import SampleComponent from './SampleComponent';
import { TouchableOpacity ,Navigator} from 'react-native';
import React,{ Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import ButtonClicker from './MyButton.js';
// import {ProgressBar} from '@react-native-community/progress-bar-android';
import Cards from './Card.js';
const {width,height}=Dimensions.get('window');

class App extends Component {


  constructor(props)
  {
    super(props);
    this.state={
      name:'',
      x:0,
      countOfHabits:1,
      array:[1,2,3,4,5],
      background:['#fff','#243447'],
      backgroundValue:0,
    };
  }

  
  render(){
    onPressed = () => {
      this.setState({backgroundValue:2});
            this.setState({backgroundColor:this.state.background[0]});
      
      
    }
  return (
    <NavigationContainer >
       <View style={{ flexDirection: 'row', justifyContent: 'space-between' ,borderRadius:5,marginTop:25,backgroundColor:'#243447',}}>
        <View style={styles.navigationBar}>
          <Image
            source={{uri:'https://static.vecteezy.com/system/resources/thumbnails/004/603/109/small/filter-line-icon-vector.jpg'}}
            style={styles.sideLogo}
          />
          <Text style={styles.done}>TheDone</Text>


          <TouchableOpacity  onPress={this.onPressed}>
          <Image
          source={{uri:'https://static.thenounproject.com/png/2856492-200.png'}}
            style={styles.updateDark}
          />
        </TouchableOpacity>





        <TouchableOpacity  style={styles.update}onPress={() => Linking.openURL('https://drive.google.com/file/d/1ZwFl3j2tenGIqMWyqW13FO8wxaS7hzEQ/view?usp=share_link')}>
          <Text style={styles.buttonText } onPress={() => Linking.openURL('https://drive.google.com/file/d/1ZwFl3j2tenGIqMWyqW13FO8wxaS7hzEQ/view?usp=share_link')}>
            Update App</Text>
        </TouchableOpacity>
          <Image
          source={{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLYmxxuENq7AthA9_gqpGwVEs9xMHw-FEG3w&usqp=CAU'}}
            style={styles.sea}
          />
        </View>
      </View>
    <View style={styles.container}>
      <View>
      <Cards  name="Tap me!" array={this.state.array}x={this.state.x}/>
      </View>
      <StatusBar backgroundColor="#657786"
        barStyle="light-content" />
    </View>
    <Text style={{color:'red'}}>{this.state.backgroundValue}</Text>

   <View style={{paddingBottom:height*0.1,padding:10,backgroundColor:'#243447'}}>
   <ButtonClicker content='click here'/>
   </View>
    </NavigationContainer>
  );
  }
}

const styles = StyleSheet.create({
  cont: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'red'
  },
  container: {
    flex: 1,
    width: '100%',
    height:60,
    // backgroundColor: 'blue',//fff
    backgroundColor:'#243447',
    alignItems: 'center',
    // paddingBottom:height*0.3
    
  },
  footer: {
    marginTop:180,
    marginBottom:-30,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: '#fff',
    // backgroundColor: '#fff',
    backgroundColor:'red',
    padding: 10
  },
  plusButton: {  
    backgroundColor:'red',
    alignItems: 'center',
    width:50,
    backgroundColor: '#0084ff',
    borderRadius: 10,
    padding: 10
  },
  plusText: {  
    alignItems: 'center',
    color: '#fff',
    fontSize: 20
  },example: {
    marginVertical: 24,
  },
  
  update:{
    backgroundColor:'#c6f8e5',
    width:width*0.2,
    padding:5,
    borderRadius:5,
    marginLeft:3,


  },
  updateDark:{
    // backgroundColor:'#c6f8e5',
justifyContent:'center',
    padding:2,
    width:width*0.1,
    height:height*0.05,
    borderRadius:5,
    marginLeft:-10,
    padding:5


  },
  updateDarkContent:{
    backgroundColor:'#c6f8e5',
    width:width*0.1,
    borderRadius:5,
    backgroundColor:'red'


  },
  done:{
    fontWeight: 'bold', fontSize: 20,
    width:width*0.35,
    padding:3,
    // backgroundColor:"yellow"
  },
  navigationBar:{
    flexDirection: 'row',margin:'10%',
    backgroundColor:'#14d26'

  },
  sea:{
     width: '10%', height:'100%'  ,marginLeft:height*0.01,
     
     //  width:width*0.1
  },
  sideLogo:
    { width:width*0.1, height: '100%' ,marginRight:width*0.02,marginLeft:-width*0.05
    
  }
  ,buttonText:{
    width:width*0.2,
    fontSize:8,
    margin:5,
  }
,
});
export default App;



// import React, { Component } from 'react';
// import { TextInput, View, Text } from 'react-native';

// class InputCard extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       name: ''
//     };
//   }

//   render() {
//     return (
//       <View>
//         <Text>Name:</Text>
//         <TextInput
//           style={{height: 40, borderColor: 'gray', borderWidth: 1}}
//           onChangeText={(name) => this.setState({name})}
//           value={this.state.name}
//         />
//       </View>
//     );
//   }
// }

// export default InputCard;

