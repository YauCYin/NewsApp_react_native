//*****************************************//
//            新聞（真實度）
//****************************************//
import React from "react";
import { Image, View, Text } from "react-native";

const Rel = (props) => {
  if (props.index <= 33 && props.index >= 1) {
    return (
      <View style={{alignSelf: "flex-end",flexDirection: "row",marginBottom: 18,}}>
        <Image source={require("../assets/bad.png")} />
        <Text
          style={{ marginLeft: 5, marginTop: 8, color: "red" }}
        >
          {props.index}%
        </Text>
      </View>
    );
  } else if (props.index >= 34 && props.index <= 67) {
    return (
      <View style={{alignSelf: "flex-end",flexDirection: "row",marginBottom: 18,}}>
      <Image source={require("../assets/medium.png")} />
      <Text
        style={{ marginLeft: 5, marginTop: 8, color: "#DCB731" }}
      >
        {props.index}%
      </Text>
    </View>
    );
  } else if (props.index >= 68 && props.index <= 100) {
    return (
      <View style={{alignSelf: "flex-end",flexDirection: "row",marginBottom: 18,}}>
      <Image source={require("../assets/good.png")} />
      <Text
        style={{ marginLeft: 5, marginTop: 8, color: "green" }}
      >
        {props.index}%
      </Text>
    </View>
    );
  } else {
    return (
      <Image
        style={{ alignSelf: "flex-end", marginRight: 25 }}
        source={require("../assets/error.png")}
      />
    );
  }
};

export default Rel;
