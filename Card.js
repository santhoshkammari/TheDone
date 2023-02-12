// function createComponents(n) {
//   for (let i = 0; i < n; i++) {
//     return <MyComponent key={i} />;
//   }
// }
import React from 'react';
import { SafeAreaView,StyleSheet, Text, View,Image,TextInput } from 'react-native';
import CardWithName from './CardWithName';


import { TouchableOpacity ,Navigator} from 'react-native';

// const emptyArray= new Array(5);
// const components = emptyArray.map(item => {
//   return <TouchableOpacity onPress={this.onPress}>
//   <CardWithName name="John De" x={this.state.x}/>
// </TouchableOpacity> ;
// });

export default class MyComponent extends React.Component {
        state={
                x:[1,2,4]
        }
    constructor(props)
  {
    super(props);
    this.state={
      x:0,
      h:[1,2,3,4,5]
    };
  }
  onPress=()=>{
    let x1=this.state.x;
    this.setState({x:x1+1});
  }


 

  render() {
        let x=this.props.array;
        
        // this.setState({h:this.props.array})
        let transformedHabits=  this.state.h.map( ( _, i ) => {
                        return <TouchableOpacity onPress={this.onPress}>
                        <CardWithName name={this.props.name} x={this.state.x}/>
                </TouchableOpacity> ;
                    } );
    return (
        <View>
{transformedHabits}
<Text style={{color:'white'}}>{x}</Text>
</View>
    );
  }
}
