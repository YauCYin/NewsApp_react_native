//*****************************************//
//                App使用說明
//****************************************//

import React, { Component } from "react";
import {
  AppRegistry,
  StyleSheet,
  Image,
  Dimensions,
  SafeAreaView,
} from "react-native";

import Swiper from "react-native-swiper";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: "#F6EFE9",
  },
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "#F6EFE9"
  },
  slide2: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F2F2F2",
  },
  slide3: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#92BBD9",
  },
  text: {
    color: "#fff",
    fontSize: 30,
    fontWeight: "bold",
  },
});

export default class Intro extends Component {
  render() {
    return (
      <Swiper style={styles.wrapper} showsButtons={true}>
        <SafeAreaView style={styles.slide1}>
          <Image
            style={{ flex: 1, width: windowWidth, height: windowHeight }}
            source={require("../assets/intro1.png")}
          />
        </SafeAreaView>
        <SafeAreaView style={styles.slide2}>
          <Image
            style={{ flex: 1, width: windowWidth, height: windowHeight }}
            source={require("../assets/intro2.png")}
          />
        </SafeAreaView>
      </Swiper>
    );
  }
}

AppRegistry.registerComponent("myproject", () => SwiperComponent);
