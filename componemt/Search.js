import React, { useEffect, useState } from "react";
import {
  Dimensions,
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  View,
  TextInput,
  Image,
} from "react-native";
import { Icon } from "react-native-elements";
export default function Search(props) {
    const [searchKey, setSearchKey] = useState("");
    const navigation = props.navigation
  return (
    <View>
      <View style={styles.inputWrap}>
        {/*搜尋功能*/}
        <TextInput
          style={styles.inputStyle}
          onChangeText={(text) => setSearchKey(text)}
          placeholder={"搜尋"}
          value={searchKey}
        />
        <TouchableOpacity
          style={styles.buttonStyle}
          onPress={() =>
            navigation.navigate("SearchResult", { key: searchKey })
          }
        >
          <Icon name="search-outline" type="ionicon" />
        </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity onPress={() => navigation.navigate("Intro")}>
          <Image
            style={{ alignSelf: "flex-end", marginRight: 25, margin: 10 }}
            source={require("../assets/questions.png")}
          />
        </TouchableOpacity>
        {/*搜尋功能end*/}

      </View>
    </View>
  );
}
const styles = StyleSheet.create({
    inputWrap: {
      width: "100%",
      borderWidth: 1.5,
      borderColor: "#D1C0B7",
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
      borderLeftColor: "#D1C0B7",
    },
    buttonTextStyle: {
      textAlign: "center",
      color: "#000",
      fontSize: 18,
      lineHeight: 40,
    },
  });
  

