//*****************************************//
//            新聞（真實度）
//****************************************//
import React from "react";
import { Image } from "react-native";

const Rel = (props) => {
  if (props.index <= 33 && props.index >= 1) {
    return (
      <Image
        style={{ alignSelf: "flex-end", marginRight: 18 }}
        source={require("../assets/bad.png")}
      />
    );
  } else if (props.index >= 34 && props.index <= 67) {
    return (
      <Image
        style={{ alignSelf: "flex-end", marginRight: 18 }}
        source={require("../assets/medium.png")}
      />
    );
  } else if (props.index >= 68 && props.index <= 100) {
    return (
      <Image
        style={{ alignSelf: "flex-end", marginRight: 18 }}
        source={require("../assets/good.png")}
      />
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
