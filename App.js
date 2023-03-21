import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Dimensions,
  Linking,
  ScrollView,
  Button,
  AsyncStorage,
} from "react-native";
import { ProgressBar } from "react-native-paper";
import React, { Component } from "react";
import { NavigationContainer } from "@react-navigation/native";
import Icon from "react-native-vector-icons/FontAwesome";
import Icon1 from "react-native-vector-icons/AntDesign";
import Icon2 from "react-native-vector-icons/Entypo";
import Icon3 from "react-native-vector-icons/MaterialIcons";

import { styles } from "./appStyles";
const { width, height } = Dimensions.get("window");

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sec: 4,
      text: "",
      name: "",
      x: 0,
      background: ["#fff", "#243447"],
      Dm: 0,
      bc: ["#F1F7FC", "#212124", "#2d2d30", "#fbfcf8"],
      backgroundStyle: StyleSheet.create({
        flex: 1,
        width: "100%",
        padding: width * 0.02,
        backgroundColor: "#F1F7FC",
      }),
      navigationBarBc: StyleSheet.create({
        flexDirection: "row",
        marginTop: 30,
        backgroundColor: "#F1F7FC",
        justifyContent: "space-between",
        padding: "5%",
      }),
      navigationBarBc2: StyleSheet.create({
        flexDirection: "row",
        backgroundColor: "#F1F7FC",
        justifyContent: "center",
      }),
      inputName: "",
      nameInput: "",
      x: [0, 0, 0, 0, 0],
      h: [0, 0, 0, 0, 0],
      cardName: ["", "", "", "", ""],
      cardNameValue: "",
      inputCount: 0,
      xp: [0, 0, 0, 0, 0],
      cardColor: ["#6CCCBE", "#6EB5DD", "#8A8CE2", "#EB8AAD", "#F25454"],
      data: "",
      dataPrint: "no value initially",
    };
  }

  render() {
    let count = 0;
    for (let i = 0; i < 5; i++) {
      if (this.state.h[i] == 1) count++;
    }
    const handleInputChange = (text) => this.setState({ inputName: text });
    const handleInputChangecount = (val) => {
      this.setState({ inputCount: val });
    };

    const onPressed = () => {
      this.setState({
        backgroundColor: this.state.background[0],
        Dm: this.state.Dm ^ 1,
        backgroundStyle: StyleSheet.create({
          flex: 1,
          width: "100%",
          height: height * 0.4,
          alignItems: "center",
          backgroundColor: this.state.bc[this.state.Dm ^ 1],
        }),
        navigationBarBc: StyleSheet.create({
          flexDirection: "row",
          justifyContent: "space-between",
          marginTop: 30,
          padding: "5%",
          backgroundColor: this.state.bc[this.state.Dm ^ 1],
        }),
        navigationBarBc2: StyleSheet.create({
          flexDirection: "row",
          justifyContent: "space-between",
          backgroundColor: this.state.bc[this.state.Dm ^ 1],
        }),
      });
    };
    const addDataHandler = async () => {
      AsyncStorage.setItem("myData", "this is my data")
        .then(() => console.log("Data stored successfully"))
        .catch((err) => console.log("Error storing data: ", err));

      AsyncStorage.getItem("myData")
        .then((data) => this.setState({ data: data }))
        .catch((err) => console.log("Error retrieving data: ", err));
    };
    const printDataHandler = async () => {
      AsyncStorage.getItem("myData").then((data) =>
        this.setState({ dataPrint: data })
      );
    };
    const plusClicked = (index) => {
      if (this.state.xp[index] >= this.state.x[index] - 1) {
        const { h, cardName, x, xp } = this.state;
        const newArray2 = [...h];
        const cardName3 = [...cardName];
        const x3 = [...x];
        const xp2 = [...xp];
        for (let i1 = index; i1 < 4; i1++) {
          x3[i1] = x3[i1 + 1];
          newArray2[i1] = newArray2[i1 + 1];
          cardName3[i1] = cardName3[i1 + 1];
          xp2[i1] = xp2[i1 + 1];
        }
        x3[4] = 0;
        newArray2[4] = 0;
        cardName3[4] = 0;
        xp2[4] = 0;
        this.setState({
          h: newArray2,
          cardName: cardName3,
          x: x3,
          xp: xp2,
        });
      } else {
        const xp2 = [...this.state.xp];
        xp2[index] = xp2[index] + 1;
        this.setState({ xp: xp2 });
      }
    };
    const addCard = () => {
      const { h, cardName, x } = this.state;
      const newArray = [...h];
      const cardName2 = [...cardName];
      const x2 = [...x];
      let j1 = 0;
      for (let i3 = 0; i3 < 5; i3++) {
        if (newArray[i3] == 1) {
          newArray[j1] = newArray[i3];
          x2[j1] = x2[i3];
          cardName2[j1] = cardName2[i3];
          j1++;
        }
      }
      newArray[j1] = 1;
      cardName2[j1] = this.state.cardNameValue;
      x2[j1] = this.state.inputCount;
      this.setState({ h: newArray, cardName: cardName2, x: x2 });
    };

    const onPressButton = () => {
      alert("You clicked the button!");
    };
    let transformedHabits = (
      <View>
        <Button
          title="Input Habit Name In Track!"
          style={{
            borderWidth: 1,
            borderColor: "black",
            fontWeight: "bold",
          }}
        ></Button>
        <Button
          title="Input Count in N!"
          style={{
            borderWidth: 1,
            borderColor: "black",
          }}
        ></Button>
        <Button
          title="Jump into pluscircle!"
          style={{
            borderWidth: 1,
            borderColor: "black",
          }}
        ></Button>
        <Button title="Add Data" onPress={addDataHandler}>
          {" "}
        </Button>
        <Button title="print Data" onPress={printDataHandler}></Button>
        <Text>{this.state.dataPrint}</Text>
      </View>
    );
    if (count > 0) {
      transformedHabits = this.state.h.map((_, i) => {
        if (_ > 0) {
          return (
            <View key={i} style={{ margin: 2, height: height * 0.12 }}>
              <ProgressBar
                style={styles.cardOnBottom}
                progress={this.state.xp[i] / this.state.x[i]}
                color={this.state.cardColor[i]}
              />
              <View>
                <ScrollView
                  contentContainerStyle={{ flexGrow: 1 }}
                  horizontal={true}
                  style={styles.cardOnTop}
                >
                  <Icon
                    name="leaf"
                    style={{
                      padding: 8,
                      borderRadius: 20,
                      margin: 5,
                      backgroundColor: "#67BCB4",
                    }}
                    size={width * 0.12}
                    color="6CCABC"
                  />
                  <View
                    style={{
                      flex: 1,
                      width: width * 0.45,
                      color: "blue",
                      margin: 10,
                    }}
                  >
                    <Text style={{ fontSize: 20, fontWeight: "bold" }}>
                      {this.state.cardName[i]}
                    </Text>
                    <Text style={{ fontSize: 15 }}>
                      {this.state.xp[i]} / {this.state.x[i]}
                    </Text>
                  </View>
                  <Icon1
                    name="plus"
                    style={{
                      padding: 15,
                      fontSize: 35,
                    }}
                    onPress={() => plusClicked(i)}
                    size={width * 0.08}
                    color="black"
                  />
                  <View style={[{ padding: 10 }]}>
                    <Button
                      onPress={onPressButton}
                      title="Quote it!!"
                      color="#FF3D00"
                    />
                  </View>
                </ScrollView>
              </View>
            </View>
          );
        }
      });
    }

    return (
      <NavigationContainer>
        <StatusBar
          backgroundColor={this.state.bc[this.state.Dm]}
          barStyle="light-content"
        />
        <View style={this.state.navigationBarBc}>
          <View style={styles.navigationBar}>
            <Icon name="bars" size={35} color="black" />
            <Text style={styles.done}>Done</Text>
            <Icon name="user" size={35} color="black" />
          </View>
        </View>
        <View style={this.state.navigationBarBc2}>
          <View style={styles.navigationBar2}>
            <Icon2
              name="light-up"
              size={15}
              color="black"
              onPress={onPressed}
            />
            <Icon3
              name="system-update"
              size={15}
              color="black"
              onPress={() =>
                Linking.openURL(
                  "https://drive.google.com/file/d/1ZwFl3j2tenGIqMWyqW13FO8wxaS7hzEQ/view?usp=share_link"
                )
              }
            />
            <Icon name="search" size={15} color="black" />
          </View>
        </View>
        <View style={this.state.backgroundStyle}>
          <View>{transformedHabits}</View>
        </View>
        <View
          style={{
            borderTopRightRadius: 30,
            borderTopLeftRadius: 30,
            padding: 10,
            backgroundColor: this.state.bc[3],
          }}
        >
          <View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "center",
              }}
            >
              <View>
                <TextInput
                  value={this.state.cardNameValue}
                  onChangeText={(text) =>
                    this.setState({ cardNameValue: text })
                  }
                  placeholder="Track "
                  style={styles.card}
                />
              </View>
              <View>
                <TextInput
                  value={this.state.inputCount}
                  onChangeText={handleInputChangecount}
                  placeholder="N"
                  style={styles.numb}
                  keyboardType="numeric"
                />
              </View>
            </View>
          </View>
        </View>

        <View
          style={{
            paddingBottom: height * 0.05,
            borderTopRightRadius: 40,
            borderTopLeftRadius: 35,
            padding: 10,
            flexDirection: "row",
            backgroundColor: "#FFFEFE",
          }}
        >
          <Icon
            name="home"
            style={{ marginLeft: "10%" }}
            size={30}
            color="#c7d2cc"
          />
          <Icon1
            name="pluscircleo"
            style={{ marginLeft: "25%", marginRight: "10%" }}
            size={30}
            color="#c7d2cc"
            onPress={addCard}
          />
          <Icon
            name="heart"
            style={{ marginLeft: "15%" }}
            size={30}
            color="#c7d2cc"
          />
        </View>
      </NavigationContainer>
    );
  }
}

export default App;
