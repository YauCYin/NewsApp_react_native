//*****************************************//
//            新聞內文－上半部分
//****************************************//

import React, { useEffect, useState } from "react";
import {
  FlatList,
  Text,
  SafeAreaView,
  StyleSheet,
  View,
  Image,
} from "react-native";
import Rel from "./Authenticity";
import Chart from "./Charts";
import Keyword from "./Keyword";

export default function Details(props) {
  const [newsdata, setNewsdata] = useState([]);
  const id = props.ID;
  const date = props.Date;
  const navigation = props.navigation;

  //-------------------------------------------------------------------//
  //  GET新聞內文
  const url = "http://140.134.26.31:3000/api/news/getNewsDetail/";
  useEffect(() => {
    fetch(url + id, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((responseData) => setNewsdata(responseData.data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <SafeAreaView>
      <FlatList
        data={newsdata}
        keyExtractor={(news, index) => index.toString()}
        removeClippedSubviews={true}
        renderItem={({ item }) => {
          return (
            <SafeAreaView>
              <Text style={styles.h1}>{item.Title}</Text>
              <View style={{ marginTop: 20 }}>
                <Rel index={item.Reliability} />
              </View>
              <View>
                <Keyword item={item.keywords} navigation={navigation} />
              </View>
              <View style={styles.ViewOfSource}>
                <Text style={styles.source}>{date}</Text>
                <Text style={styles.source}>by {item.Provenance}</Text>
              </View>
              <Text style={styles.h2}>{item.Content}</Text>
              <Text style={styles.h3}>
                <Image source={require("../assets/analytics.png")} />
                言論分析
              </Text>
              <Chart item={item.sentiment} />
              <Text style={styles.h4}>
                <Image source={require("../assets/comment.png")} />
                留言區
              </Text>
            </SafeAreaView>
          );
        }}
      />
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  content: {
    flex: 1,
    alignItems: "flex-start",
    margin: 20,
  },
  h1: {
    fontSize: 30,
    fontWeight: "bold",
    marginTop: 5,
    fontFamily: "Cochin",
    marginEnd: 10,
    marginTop: 20,
    lineHeight: 50,
  },
  h2: {
    color: "black",
    fontSize: 18,
    marginTop: "10%",
    lineHeight: 40,
  },
  span: {
    color: "black",
    fontSize: 13,
    marginTop: "10%",
  },
  item: {
    marginVertical: 20,
    marginHorizontal: 5,
    borderRadius: 10,
    borderRightColor: "#f07167",
    borderLeftColor: "#f07167",
    borderRightWidth: 3,
    borderLeftWidth: 3,
  },
  h3: {
    fontSize: 28,
    fontWeight: "bold",
    marginTop: 50,
  },
  h4: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 30,
    marginTop: 50,
  },
  ViewOfSource: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 30,
  },
  source: {
    margin: 2,
    fontStyle: "italic",
    fontSize: 13,
  },
});
