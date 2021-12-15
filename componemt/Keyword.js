import React from "react";
import {
  FlatList,
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

export default function Keyword(props) {
  const keyword = props.item;
  const navigation = props.navigation;

  return (
    <SafeAreaView style={styles.area}>
      <FlatList
        ListHeaderComponent={<Text>關鍵詞：</Text>}
        horizontal={true}
        data={keyword}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("SearchKw", { key: item.keyword })
              }
            >
              <Text style={styles.kw}>{item.keyword}</Text>
            </TouchableOpacity>
          );
        }}
        keyExtractor={(news, index) => index.toString()}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  area: {
    marginTop: 20,
  },
  kw: {
    marginHorizontal: 7,
    textDecorationLine: "underline",
    color: "blue",
  },
});
