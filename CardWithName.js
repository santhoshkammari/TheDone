import React from 'react';
import { View, Text, Dimensions } from 'react-native';
import { ProgressBar, MD3Colors } from 'react-native-paper';


const {width,height}=Dimensions.get('window');
const CardWithName = (prop) => {

  return (
  

    <View style={styles.card}>
      <Text style={styles.name}>{prop.name}</Text>
      <ProgressBar style={styles.cards}progress={prop.x/10} color={"green"} />
    </View>
  );
};

const styles = {
  
  card: {
    width: width*0.8,
    height:height*0.07,
    padding:4,
    margin:5,
    backgroundColor: '#fff',
    borderRadius: 10,
    elevation: 5,
  },
  cards:{
    position:'relative',
    right:5,
    bottom:30,
    zIndex:4,
    opacity:0.5,
    width: width*0.8,
    height:height*0.07,
    backgroundColor: '#fff',
    borderRadius: 10,
    elevation: 5,
    padding:0,
    margin:0
    
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
  },
};

export default CardWithName;

