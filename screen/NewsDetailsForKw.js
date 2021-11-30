//*****************************************//
//                新聞內文                 //
//****************************************//

import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  SafeAreaView,
  View,
  FlatList,
  ScrollView,
  Alert,
  Text,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { TextInput, Button, Surface, Paragraph } from "react-native-paper";

import moment from "moment";
import CommentBox from "../componemt/CommentBox";
import Details from "../componemt/Details";

export default function NewsDetailsForKw({ route, navigation }) {
  const { item } = route.params || "nothing get";
  const [commentdata, setCommentdata] = useState([]);
  const [newcomment, setNewcomment] = useState("");
  const publishedDate = moment(item.Date).format("dddd D MMMM YYYY");
  const [test, setTest] = useState("have");

  //GET新聞評論
  const urlcomment = "http://140.134.26.31:3000/api/comment//getComment/";
  useEffect(() => {
    fetch(urlcomment + item.News_id, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((responseData) => setCommentdata(responseData.data))
      .catch((error) => console.log(error));
  }, []);

  //-------------------------------------------------------------------------------------//
  //把App使用者的評論，POST到資料庫
  const Post = () => {
    fetch("http://140.134.26.31:3000/api/comment/postComment", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        newsID: item.News_id,
        provenance: item.Provenance,
        comment: newcomment,
      }),
    })
      .then((res) => {
        return res.json();
      })
      .then((result) => {
        if (result.code == "200") {
          //若傳送成功
          const commentitem = [
            {
              comment: newcomment,
              likes: 0,
            },
          ].concat(commentdata);
          //把App使用者的評論加入到commentdata
          setTest("Yes");
          Alert.alert("成功送出～", "謝謝您的評論", [
            { text: "OK", onPress: () => setCommentdata(commentitem) },
          ]);
        } else {
          Alert.alert("未能送出", "發生錯誤", [
            { text: "OK", onPress: () => console.log("error:未能送出") },
          ]);
        }
      });
  };
  //--------------------------------------------------------------------------------//
  const analyze = () => {
    if (commentdata == "news_id錯誤 or 尚無留言") {
      setCommentdata("!");
      setTest("nothing");
    }
  };
  //--------------------------------------------------------------------------------//
  const IsNull = () => {
    if (test == "nothing") {
      return (
        <Surface style={styles.surface}>
          <Paragraph>尚未有評論</Paragraph>
        </Surface>
      );
    }
  };

  return (
    <View style={styles.content}>
      <View style={{ margin: 10 }}>
        {analyze()}
        <KeyboardAvoidingView
          behavior={Platform.OS == "ios" ? "padding" : "height"}
          style={{ flex: 1 }}
        >
          <FlatList
            //-------------------------------評論---------------------------------------//
            ListHeaderComponent={
              <View>
                <Details
                  ID={item.News_id}
                  Date={publishedDate}
                  navigation={navigation}
                />

                <TextInput
                  mode="outlined"
                  label="留言"
                  placeholder="快留下你的想法吧～"
                  onChangeText={(text) => setNewcomment(text)}
                />
                <View
                  style={{
                    marginTop: 10,
                    marginBottom: 10,
                    alignItems: "center",
                  }}
                >
                  <Button
                    style={{ width: 150 }}
                    mode="contained"
                    color="#f8f9fa"
                    labelStyle={{ color: "#7b2cbf", fontSize: 17 }}
                    onPress={() => Post()}
                  >
                    送出
                  </Button>
                </View>
                {IsNull()}
              </View>
            }
            data={commentdata}
            keyExtractor={(news, index) => index.toString()}
            removeClippedSubviews={true}
            renderItem={({ item }) => {
              return <CommentBox item={item} />; //評論顯示
            }}
          />
        </KeyboardAvoidingView>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  content: {
    flex: 1,
    alignItems: "flex-start",
    backgroundColor: "#F7F5F2",
  },

  h1: {
    fontSize: 30,
    fontWeight: "bold",
    marginTop: 5,
    fontFamily: "Cochin",
    marginEnd: 10,
    marginTop: 20,
  },
  h2: {
    color: "black",
    fontSize: 18,
    marginTop: "10%",
    lineHeight: 30,
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
    borderRightWidth: 3,
    borderLeftWidth: 3,
  },
  h3: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 30,
    marginLeft: 18,
  },
  surface: {
    padding: 3,
    height: 70,
    alignItems: "center",
    justifyContent: "center",
    elevation: 4,
    margin: 20,
  },
});
