//*****************************************//
//                熱門新聞                 //
//*****************************************//

import React, { useEffect, useState } from "react";
import {
  Dimensions,
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import News from "../componemt/News";
import Carousel from "react-native-snap-carousel";
import Search from "../componemt/Search";

const { width } = Dimensions.get("window");

export default function PoupularNews({ navigation, props }) {
  const [data, setData] = useState([]);

  //-------------------------------------------------------------------------//
  //GET熱門新聞
  useEffect(() => {
    fetch("http://140.134.26.31:3000/api/popular/getPopularNews", {
      method: "GET",
    })
      .then((response) => response.json())
      .then((responseData) => setData(responseData.data))
      .catch((error) => console.log(error));
  }, []);
  //-------------------------------------------------------------------------//
  //轉頁到'NewsDetail'(內文)，並傳值
  const showNoticeDetail = (item) => {
    navigation.navigate("NewsDetails", (item = { item }));
  };

  return (
    <SafeAreaView style={{ flex: 1, padding: 24, backgroundColor: "#FBF9F6" }}>
        <Search navigation={navigation}></Search>
        <View>
        <Text style={styles.text}>熱門新聞</Text>
      </View>
      <Carousel
        layout={"default"}
        ref={(c) => {
          this._carousel = c;
        }}
        // activeSlideOffset={height / 2 - 2}
        sliderWidth={width}
        itemWidth={width * 0.8}
        data={data}
        keyExtractor={(news, index) => index.toString()}
        removeClippedSubviews={true}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              style={styles.cardContainer}
              onPress={() => showNoticeDetail(item)}
            >
              <News item={item} />
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
    height: 520,
    width: 300,
    borderRadius: 12,
    marginRight: 30,
    marginVertical: 10,
    marginTop: 20,
  },
  text: {
    fontSize: 22,
    //fontFamily: 'Cochin',
    fontWeight: "700",
    textAlign: "center",
  },
  inputWrap: {
    width: "100%",
    borderWidth: 1,
    borderColor: "#ccc",
    paddingVertical: 8,
    display: "flex",
    flexDirection: "row",
    backgroundColor: "#F9F4F0",
  },
  inputStyle: {
    flex: 4 / 5,
    fontSize: 17,
    paddingLeft: 12,
  },
  buttonStyle: {
    flex: 1 / 5,
    color: "#F5EDE6",
    borderLeftWidth: 2,
    borderLeftColor: "#ccc",
  },
  buttonTextStyle: {
    textAlign: "center",
    color: "#000",
    fontSize: 18,
    lineHeight: 40,
  },
});
