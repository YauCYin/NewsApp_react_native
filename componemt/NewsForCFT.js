//*****************************************//
//              新聞卡片－分類
//****************************************//

import React from "react";
import { View, Text, StyleSheet, Dimensions, Image } from "react-native";
import { Card } from "react-native-paper";
import moment from "moment";
const { width } = Dimensions.get("window");

export default function NewsForPF({ item }) {
  const time = moment(item.Date || moment.now()).fromNow();

  //----------------------------------------------------------------------//
  //  新聞的真實程度
  const Rell = () => {
    if (item.Reliability <= 33 && item.Reliability >=1 ) {
      return (
        <Image
          style={{ alignSelf: "flex-end", marginRight: 25 }}
          source={require("../assets/bad.png")}
        />
      );
    } else if (item.Reliability >= 34 && item.Reliability <= 67) {
      return (
        <Image
          style={{ alignSelf: "flex-end", marginRight: 25 }}
          source={require("../assets/medium.png")}
        />
      );
    } else if (item.Reliability >= 68 && item.Reliability <= 100) {
      return (
        <Image
          style={{ alignSelf: "flex-end", marginRight: 25 }}
          source={require("../assets/good.png")}
        />
      );
    } else  {
      return (
        <Image
          style={{ alignSelf: "flex-end", marginRight: 25 }}
          source={require("../assets/error.png")}
        />
      );
    
    }
  };

  return (
    <Card style={styles.container}>
      <Text style={styles.text}>{item.Title}</Text>

      <Text style={styles.description}> {item.Summary || "Read more..."}</Text>
      {Rell()}
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginTop: 20,
          marginBottom:10
        }}
      >
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
    height: 370,
    width: width * 0.95,
    borderRadius: 8,
    shadowOffset: {
      height: 9,
      width: -8,
    },
    shadowColor: "grey",
    shadowOpacity: 0.5,
    shadowRadius: 2.0,
  },
  description: {
    marginTop: 10,
    margin: 5,
    fontSize: 15,
    color: "#402B20",
    flex: 2,
    lineHeight: 30,
  },
  source: {
    margin: 5,
    fontStyle: "italic",
    color: "#B68F7C",
    fontSize: 10,
  },
  text: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#402B20",
    margin: 10,
    lineHeight: 40,
  },
});
