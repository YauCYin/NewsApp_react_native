//*****************************************//
//              分類（API）
//****************************************//

import React, { useEffect, useState } from "react";
import {
  View,
  FlatList,
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import NewsForCFT from "./NewsForCFT";

export default function ApiForCFT({ navigation, route }) {
  const title = route.params.index || "nothing get";
  const [data, setData] = useState([]);

  //-----------------------------------------------------------------------//
  // GET新聞
  const url = "http://140.134.26.31:3000/api/search/searchByClass/";
  useEffect(() => {
    fetch(url + title, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((responseData) => setData(responseData.data))
      .catch((error) => console.log(error));
  }, []);

  //---------------------------------------------------------------------//
  // 轉頁'NewsDetails'
  const showNoticeDetail = (item) => {
    navigation.navigate("NewsDetails", (item = { item }));
  };

  return (
    <SafeAreaView style={{ flex: 1, padding: 24, backgroundColor: "#FAF7F5" }}>
      <FlatList
        ListHeaderComponent={
          <View style={{ height: 50, marginTop: 20 }}>
            <Text style={styles.title}>{title}</Text>
          </View>
        }
        data={data}
        keyExtractor={(news, index) => index.toString()}
        removeClippedSubviews={true}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              style={styles.cardContainer}
              onPress={() => showNoticeDetail(item)}
            >
              <NewsForCFT item={item} />
            </TouchableOpacity>
          );
        }}
      />
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  category: {
    marginTop: 20,
    fontWeight: "bold",
    fontSize: 18,
    marginBottom: 5,
    textAlign: "center",
  },
  cardContainer: {
    height: 370,
    width: 300,
    borderRadius: 12,
    marginRight: 30,
    marginVertical: 10,
  },
  text: {
    fontSize: 20,
    marginTop: 40,
    margin: 10,
    //fontFamily: 'Cochin',
    fontWeight: "700",
    textAlign: "center",
  },
  title: {
    fontSize: 25,
    textAlign: "center",
    fontWeight: "bold",
  },
});
