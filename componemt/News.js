//*****************************************//
//                熱門新聞卡片
//****************************************//

import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { Card } from "react-native-paper";
import moment from "moment";

export default function News({ navigation, item }) {
  const time = moment(item.Date || moment.now()).fromNow();

  //---------------------------------------------------------------------------//
  //  新聞的真實程度
  const Rell = () => {
    if (item.Reliability <= 33 && item.Reliability >= 1) {
      return (
        <Image
          style={{ alignSelf: "flex-end", marginRight: 25, margin: 15 }}
          source={require("../assets/bad.png")}
        />
      );
    } else if (item.Reliability >= 34 && item.Reliability <= 67) {
      return (
        <Image
          style={{ alignSelf: "flex-end", marginRight: 25, margin: 15 }}
          source={require("../assets/medium.png")}
        />
      );
    } else if (item.Reliability >= 68 && item.Reliability <= 100) {
      return (
        <Image
          style={{ alignSelf: "flex-end", marginRight: 25, margin: 15 }}
          source={require("../assets/good.png")}
        />
      );
    } else {
      return (
        <Image
          style={{ alignSelf: "flex-end", marginRight: 25, margin: 15 }}
          source={require("../assets/error.png")}
        />
      );
    }
  };
  return (
    <Card style={styles.container}>
      <Text style={styles.text}>{item.Title}</Text>
      <View style={styles.ViewOFCFT}>
        <Card style={styles.CardOFCFT}>
          <Text style={styles.classification}>{item.Classification}</Text>
        </Card>
        {Rell()}
      </View>
      <Text style={styles.description}>{item.Summary || "Read more..."}</Text>
      <View style={styles.ViewOfSource}>
        <Text style={styles.source}>{item.Provenance}</Text>
        <Text style={styles.source}>{time}</Text>
      </View>
    </Card>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    marginHorizontal: 10,
    height: 530,
    width: 300,
    borderColor: "#CEBCB6",
    borderWidth: 1,
    borderRadius: 20,
    shadowOffset: {
      height: 13,
      width: -20,
    },
    shadowColor: "#BEA59D",
    shadowOpacity: 0.5,
    shadowRadius: 4.0,
  },
  ViewOFCFT: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 3,
  },
  CardOFCFT: {
    margin: 15,
    height: 30,
    width: 50,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#C6A08B",
    padding: 5,
    backgroundColor: "#BE927B",
  },
  classification: {
    fontStyle: "italic",
    color: "#FBF8F7",
    fontSize: 15,
    textAlign: "center",
  },
  description: {
    margin: 5,
    fontSize: 16,
    color: "#7A5C52",
    flex: 4,
    lineHeight: 30,
  },
  ViewOfSource: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 5,
    flex: 1,
  },
  source: {
    margin: 5,
    fontStyle: "italic",
    color: "#B68F7C",
    fontSize: 10,
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#624941",
    margin: 10,
    lineHeight: 40,
    flex: 2.5,
  },
});
