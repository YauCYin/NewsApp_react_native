//*****************************************//
//                新聞分類
//****************************************//

import React, { useState } from "react";
import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const DATA = [
  {
    id: 1,
    title: "財經",
  },
  {
    id: 2,
    title: "國際",
  },
  {
    id: 3,
    title: "社會",
  },
  {
    id: 4,
    title: "政治",
  },
  {
    id: 5,
    title: "娛樂",
  },
  {
    id: 6,
    title: "生活",
  },
  {
    id: 7,
    title: "健康",
  },
  {
    id: 8,
    title: "房產",
  },
  {
    id: 9,
    title: "新奇",
  },
  {
    id: 10,
    title: "運動",
  },
  {
    id: 11,
    title: "旅遊",
  },
  {
    id: 12,
    title: "汽車",
  },
  {
    id: 13,
    title: "科技",
  },
  {
    id: 14,
    title: "其他",
  },
];

export default function Classification({ navigation }) {
  const [selectedId, setSelectedId] = useState(null);
  const pressButton = (item) => {
    navigation.navigate("ApiForCFT", { index: item.title });
  };

  const Item = ({ item, backgroundColor, textColor }) => (
    <TouchableOpacity
      onPress={() => pressButton(item)}
      style={[styles.item, backgroundColor]}
    >
      <Text style={[styles.title, textColor]}>{item.title}</Text>
    </TouchableOpacity>
  );

  const renderItem = ({ item }) => {
    const backgroundColor = item.id === selectedId ? "#C6A08B" : "#C99A86";
    const color = item.id === selectedId ? "white" : "white";

    return (
      <Item
        item={item}
        theme={() => setSelectedId(item.id)}
        backgroundColor={{ backgroundColor }}
        textColor={{ color }}
        navigation={navigation}
      />
    );
  };

  return (
    <SafeAreaView style={{ backgroundColor: "#F9F4F1" }}>
      <FlatList
        ListHeaderComponent={
          <View
            style={{
              height: 90,
              marginLeft: "12%",
              paddingTop: 50,
              marginBottom: 60,
            }}
          >
            <Text style={{ fontSize: 35, fontWeight: "bold", height: 50 }}>
              分類
            </Text>
          </View>
        }
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        extraData={selectedId}
        numColumns={2}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
  },
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    width: 150,
    height: 70,
    marginTop: 15,
    marginLeft: 30,
    marginRight: 5,
    marginBottom: 45,
    borderRadius: 200,
    shadowOffset: {
      height: -13,
      width: 15,
    },
    shadowColor: "#E8D5CD",
    shadowOpacity: 1,
    shadowRadius: 1.5,
  },
  title: {
    fontSize: 22,
    alignItems: "center",
  },
});
