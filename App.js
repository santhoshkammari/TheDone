import { StatusBar } from 'expo-status-bar';
import { SafeAreaView,StyleSheet, Text, View,Image,TextInput,Dimensions ,Linking,ScrollView} from 'react-native';
import CardWithName from './CardWithName';
import SampleComponent from './SampleComponent';
import { TouchableOpacity ,Navigator,Button} from 'react-native';
import React,{ Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import ButtonClicker from './MyButton.js';
import Cards from './Card.js';
import ImageName from './assets/sidebar.png';
import AccountImage from './assets/account.png';
import Icon from 'react-native-vector-icons/FontAwesome';

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
      Dm:0,
      x:[{uri:'https://static.vecteezy.com/system/resources/thumbnails/004/603/109/small/filter-line-icon-vector.jpg'},ImageName],
      bc:['white','#243447','#2d2d30','#fbfcf8'],
      backgroundStyle:StyleSheet.create({flex: 1,width: '100%',height:60,backgroundColor:'white',alignItems: 'center',}),
      navigationBarBc:StyleSheet.create({flexDirection: 'row', justifyContent: 'space-between' ,marginTop:45}),
      navigationBarBc2:StyleSheet.create({flexDirection: 'row', justifyContent: 'space-between' }),

    };
  }

  
  render(){

    const onPressed = () => {
      this.setState({
        backgroundValue:this.state.backgroundValue+1});
        this.setState({backgroundColor:this.state.background[0],Dm:this.state.Dm^1,
        backgroundStyle: StyleSheet.create({flex: 1,width: '100%',height:60,backgroundColor:'white',alignItems: 'center',backgroundColor:this.state.bc[this.state.Dm^1]}),
        navigationBarBc: StyleSheet.create({flexDirection: 'row', justifyContent: 'space-between' ,marginTop:height*0.04,backgroundColor:this.state.bc[this.state.Dm^1]}),
        navigationBarBc2: StyleSheet.create({flexDirection: 'row', justifyContent: 'space-between' ,backgroundColor:this.state.bc[this.state.Dm^1]}),

            });
    }
    
  return (
    <NavigationContainer >

      <View style={this.state.navigationBarBc}>
        <View style={styles.navigationBar}>
        <Icon name="bars" size={30} color="black" />
          <Text style={styles.done}>TheDone</Text>
          <Icon name="user" size={30} color="black" />
        </View>
      </View>

      <View style={this.state.navigationBarBc2}>
        <View style={styles.navigationBar2}>
        <TouchableOpacity onPress={onPressed}>
            <Image source={{uri:'https://static.thenounproject.com/png/2856492-200.png'}} style={styles.updateDark}/>
        </TouchableOpacity>
        <TouchableOpacity  style={styles.update}onPress={() => Linking.openURL('https://drive.google.com/file/d/1ZwFl3j2tenGIqMWyqW13FO8wxaS7hzEQ/view?usp=share_link')}>
          <Text style={styles.buttonText } onPress={() => Linking.openURL('https://drive.google.com/file/d/1ZwFl3j2tenGIqMWyqW13FO8wxaS7hzEQ/view?usp=share_link')}>
            Update App</Text>
        </TouchableOpacity>
        <Icon name="search" style={{marginLeft:'10%'}}size={30} color="black" />
        </View>
        </View>

    <View style={this.state.backgroundStyle}>
      <View>
      <Cards  name="Tap me!" array={this.state.array}x={this.state.x}/>
      </View>
      <StatusBar backgroundColor={this.state.bc[this.state.Dm]} //#657786
        barStyle="light-content" />
    </View>
    
   <View style={{borderTopRightRadius:30,borderTopLeftRadius:30,padding:10,backgroundColor:this.state.bc[3]}}    > 
   <ButtonClicker content='click here'/>
   </View>
   <View style={{paddingBottom:height*0.05,borderTopRightRadius:40,borderTopLeftRadius:35,padding:10,flexDirection:'row',backgroundColor:'#FFFEFE'}}>
   <Icon name="home" style={{marginLeft:'10%'}}size={30}  color="#c7d2cc"/>
   <Icon name="plus" style={{marginLeft:'25%',marginRight:'10%'}}size={30} color="#c7d2cc" />
   <Icon name="heart" style={{marginLeft:'15%'}}size={30} color="#c7d2cc" />

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
    backgroundColor:'lightblue',
    width:width*0.2,
    padding:5,
    borderRadius:5,
    marginLeft:3,


  },
  updateDark:{
    justifyContent:'center',
    width:width*0.1,
    height:height*0.05,
    borderRadius:5,
    marginLeft:'10%'
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
    marginLeft:width*0.1,
    marginRight:width*0.1,
    // backgroundColor:"yellow",
    alignItems:'center'
  },
  navigationBar:{
    flexDirection: 'row',marginTop:'10%',marginLeft:'10%',marginRight:'10%',
    backgroundColor:'#14d26',

  },
  navigationBar2:{
    flexDirection: 'row',marginBottom:'5%',marginLeft:'20%',marginRight:'10%',marginTop:'5%',
    width:width*0.6,
    // backgroundColor:'red',

  },
  sea:{
     width: '15%',marginLeft:'10%',
     
     //  width:width*0.1
  },
  sideLogo:
    { width:width*0.12, height: '100%' ,
    
  }
  ,buttonText:{
    width:width*0.2,
    fontSize:8,
    margin:5,
  },
  accountImage:{
    width: '15%', height:30  ,marginLeft:height*0.01,
  }
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

