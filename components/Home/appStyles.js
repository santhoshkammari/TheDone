import {StyleSheet, Dimensions} from 'react-native';
const {width, height} = Dimensions.get('window');

export const styles = StyleSheet.create({
  buttonContainer: {
    width: width * 0.15,
    height: width * 0.15,
    borderRadius: 25,
    backgroundColor: '#213255',
    opacity: 0.75,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: height * 0.02,
    right: width * 0.08,
    elevation: 3,
  },
  modalContainer: {
    height: '100%',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    backgroundColor: '#FDF5E6',
  },
  textInputStyle: {
    width: '80%',
    height: 40,
    backgroundColor: 'white',
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  habitsBack: {
    padding: width * 0.02,
    marginTop: '2%',
  },
  ProgressBase: {
    flex: 1,
  },
  ProgressBarBottom: {
    flex: 1,
    position: 'absolute',
    borderRadius: 15,
    opacity: 0.9,
  },
  ProgressBarTop: {
    width: width * 0.9,
    height: height * 0.1, //0.1
    flexDirection: 'row',
    opacity: 0.8,
    borderRadius: 15,
  },
  cardOnBottom: {
    width: width * 0.9,
    height: height * 0.1,
    borderRadius: 15,
  },

  homeBarBackCard: {
    borderRadius: 10,
    width: width * 0.12,
    height: height * 0.05,
    padding: width * 0.02,
    alignItems: 'center',
  },
  navigationBarBc: {
    flexDirection: 'row',
    marginTop: '2%',
    marginBottom: '5%',
  },
  navigationBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    height: height * 0.1,
    padding: '5%',
  },

  navigationBar2: {
    flexDirection: 'row',
    width: '100%',
    // backgroundColor: "green",
    justifyContent: 'center',
    marginTop: '2%',
  },
  Bar2Icon: {
    margin: '1%',
  },

  doneIcons: {
    backgroundColor: '#2a4262',
    opacity: 0.7,
    borderRadius: 10,
    width: width * 0.15,
    height: height * 0.07,
    padding: 5,
    paddingTop: 10,
    paddingBottom: 10,
    alignItems: 'center',
  },
  cardIconNamesBg: {
    backgroundColor: '#2b3a5c',
    borderRadius: 12,
    width: width * 0.13,
    height: height * 0.06,
    padding: '2%',
    alignItems: 'center',
    margin: 10,
  },

  plusButton: {
    backgroundColor: 'red',
    alignItems: 'center',
    alignContent: 'center',
    width: width * 0.15,
    height: height * 0.06,
    backgroundColor: '#0084ff',
    borderRadius: 5,
    padding: 5,
    paddingLeft: '50%',
    fontSize: 25,
  },
  plusText: {
    alignItems: 'center',
    alignContent: 'center',
    color: '#fff',
    fontSize: 20,
  },

  plus: {
    width: width * 0.1,
    height: height * 0.06,
    padding: 0,
    borderRadius: 1,
    marginLeft: -5,
    marginRight: 5,
    alignItems: 'center',
  },

  buttonText: {
    color: '#0000FF',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  Timecard: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    margin: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  Time: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  cont: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'red',
  },
  container: {
    flex: 1,
    width: '100%',
    height: 50,
    // backgroundColor: 'blue',//fff
    backgroundColor: '#243447',
    alignItems: 'center',
    // paddingBottom:height*0.3
  },
  footer: {
    marginTop: 180,
    marginBottom: -30,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: '',
    // backgroundColor: '#fff',
    backgroundColor: 'red',
    padding: 10,
  },
  plusButton: {
    backgroundColor: 'red',
    alignItems: 'center',
    width: 50,
    backgroundColor: '#0084ff',
    borderRadius: 10,
    padding: 10,
  },
  plusText: {
    alignItems: 'center',
    color: '#fff',
    fontSize: 20,
  },
  example: {
    marginVertical: 24,
  },

  update: {
    backgroundColor: 'lightblue',
    width: width * 0.2,
    padding: 5,
    borderRadius: 5,
    marginLeft: 3,
  },

  updateDarkContent: {
    backgroundColor: '#c6f8e5',
    width: width * 0.1,
    borderRadius: 5,
    backgroundColor: 'red',
  },

  done: {
    fontWeight: 'bold',
    fontSize: 25,
    width: width * 0.35,
    textAlign: 'center',
    opacity: 0.6,
    color: 'white',
  },

  sea: {
    width: '15%',
    marginLeft: '10%',

    //  width:width*0.1
  },
  sideLogo: {width: width * 0.12, height: '100%'},
  buttonText: {
    width: width * 0.2,
    fontSize: 8,
    margin: 5,
  },
  accountImage: {
    width: '15%',
    height: 30,
    marginLeft: height * 0.01,
  },
});
