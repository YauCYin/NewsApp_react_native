//*****************************************//
//                搜尋結果
//****************************************//

import React, { useEffect, useState } from "react";
import {
  FlatList,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  Text,
  SafeAreaView,
  View,
} from "react-native";
import NewsForCFT from "../componemt/NewsForCFT";

export default function SearchResult({ navigation, route }) {
  const searchkey = route.params.key || "nothing get";
  const [data, setData] = useState([]);

  //-------------------------------------------------------------------------//
  //  GET App使用者搜尋的資料
  const url = "http://140.134.26.31:3000/api/search/searchByKeyword/";
  useEffect(() => {
    fetch(url + searchkey, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((responseData) => setData(responseData.data))
      .catch((error) => console.log(error));
  }, []);

  //-------------------------------------------------------------------------//
  //  點擊跳轉到'NewsDetails'
  const showNoticeDetail = (item) => {
    navigation.navigate("NewsDetails", (item = { item }));
  };

  const IsNull = () => {
    if (data == "查無結果") {
      return (
        <SafeAreaView>
          <View style={styles.viewOfNull}>
            <Text
              style={{
                fontSize: 25,
                fontWeight: "bold",
              }}
            >
              暫無資料
            </Text>
          </View>
        </SafeAreaView>
      );
    } else {
      return (
        <FlatList
          style={{ flex: 1 }}
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
      );
    }
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#FAF7F5" }}>
      {IsNull()}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    height: 370,
    width: 300,
    borderRadius: 12,
    marginRight: 30,
    marginVertical: 10,
  },
  viewOfNull: {
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    height: Dimensions.get("window").height * 0.8,
    width: Dimensions.get("window").width,
  },
});
