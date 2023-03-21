import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Dimensions,
  Linking,
  ScrollView,
} from "react-native";
const { width, height } = Dimensions.get("window");

export const styles = StyleSheet.create({
  cardOnTop: {
    width: width * 0.9,
    height: height * 0.1,
    position: "relative",
    top: -77,
    zIndex: 2,
    flexDirection: "row",
    backgroundColor: "white",
    margin: 5,
    opacity: 0.5,

    borderRadius: 15,
  },
  cardOnBottom: {
    width: width * 0.9,
    height: height * 0.1,
    position: "relative",
    zIndex: 1,
    opacity: 0.5,
    backgroundColor: "#fff", //fff
    borderRadius: 15,
    margin: 5,
  },
  card: {
    padding: 10,
    backgroundColor: "#f0f0f0", //'#f0f0f0'
    borderRadius: 5,
    height: height * 0.06,
    width: width * 0.5,
    textAlign: "center",
    marginRight: width * 0.1,
  },

  numb: {
    width: width * 0.2,
    height: height * 0.06,
    padding: 10,
    textAlign: "center",
    backgroundColor: "#f0f0f0", //'#f0f0f0'
    borderRadius: 5,
  },
  plusButton: {
    backgroundColor: "red",
    alignItems: "center",
    alignContent: "center",
    width: width * 0.15,
    height: height * 0.06,
    backgroundColor: "#0084ff",
    borderRadius: 5,
    padding: 5,
    paddingLeft: "50%",
    fontSize: 25,
  },
  plusText: {
    alignItems: "center",
    alignContent: "center",
    color: "#fff",
    fontSize: 20,
  },

  plus: {
    width: width * 0.1,
    height: height * 0.06,
    padding: 0,
    borderRadius: 1,
    marginLeft: -5,
    marginRight: 5,
    alignItems: "center",
  },

  buttonText: {
    color: "#0000FF",
    fontWeight: "bold",
    textAlign: "center",
  },
  Timecard: {
    backgroundColor: "white",
    borderRadius: 10,
    padding: 20,
    margin: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  Time: {
    fontSize: 30,
    fontWeight: "bold",
  },
  cont: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "red",
  },
  container: {
    flex: 1,
    width: "100%",
    height: 50,
    // backgroundColor: 'blue',//fff
    backgroundColor: "#243447",
    alignItems: "center",
    // paddingBottom:height*0.3
  },
  footer: {
    marginTop: 180,
    marginBottom: -30,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderTopWidth: 1,
    borderTopColor: "",
    // backgroundColor: '#fff',
    backgroundColor: "red",
    padding: 10,
  },
  plusButton: {
    backgroundColor: "red",
    alignItems: "center",
    width: 50,
    backgroundColor: "#0084ff",
    borderRadius: 10,
    padding: 10,
  },
  plusText: {
    alignItems: "center",
    color: "#fff",
    fontSize: 20,
  },
  example: {
    marginVertical: 24,
  },

  update: {
    backgroundColor: "lightblue",
    width: width * 0.2,
    padding: 5,
    borderRadius: 5,
    marginLeft: 3,
  },

  updateDarkContent: {
    backgroundColor: "#c6f8e5",
    width: width * 0.1,
    borderRadius: 5,
    backgroundColor: "red",
  },
  done: {
    fontWeight: "bold",
    fontSize: 25,
    width: width * 0.35,
    textAlign: "center",
  },
  navigationBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    // backgroundColor: "red",
    width: width * 0.9,
    height: height * 0.1,
    padding: 10,
  },
  navigationBar2: {
    flexDirection: "row",
    marginBottom: "5%",
    // marginLeft: "20%",
    // marginRight: "10%",
    // marginTop: "5%",
    width: width * 0.6,
    // backgroundColor: "green",
    padding: 10,
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  sea: {
    width: "15%",
    marginLeft: "10%",

    //  width:width*0.1
  },
  sideLogo: { width: width * 0.12, height: "100%" },
  buttonText: {
    width: width * 0.2,
    fontSize: 8,
    margin: 5,
  },
  accountImage: {
    width: "15%",
    height: 30,
    marginLeft: height * 0.01,
  },
});
