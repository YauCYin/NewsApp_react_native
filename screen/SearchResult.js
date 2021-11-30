//*****************************************//
//                搜尋結果
//****************************************//

import React, { useEffect, useState } from "react";
import { FlatList, TouchableOpacity, StyleSheet } from "react-native";
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
    navigation.navigate("NewsDetailsForKw", (item = { item }));
  };

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

const styles = StyleSheet.create({
  cardContainer: {
    height: 370,
    width: 300,
    borderRadius: 12,
    marginRight: 30,
    marginVertical: 10,
  },
});
