//*****************************************//
//          評論卡片和按讚功能
//****************************************//
import React, { useState } from "react";
import { SafeAreaView, View, TouchableOpacity, Text } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { Card, Paragraph } from "react-native-paper";

const CommentBox = ({ item, id, provenance, like }) => {
  const [heartcolor, setHeartcolor] = useState("black");
  const [heartname, setHeartname] = useState("hearto");
  const [count, setCount] = useState(like);
  const [flag, setFlag] = useState(true);

  const OnChange = () => {
    if (flag === true) {
      setFlag(false);
      setHeartname("heart");
      setHeartcolor("red");
      setCount(count + 1);

      fetch("http://140.134.26.31:3000/api/comment/likeComment", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          newsID: id,
          provenance: provenance,
          like: like + 1,
          comment: item.comment,
        }),
      })
        .then((res) => {
          return res.json();
        })
        .then((result) => {
          console.log(result);
        });
    } else if (flag == false) {
      setFlag(true);
      setHeartname("hearto");
      setHeartcolor("black");
      setCount(count - 1);
      fetch("http://140.134.26.31:3000/api/comment/likeComment", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          newsID: id,
          provenance: provenance,
          like: like,
          comment: item.comment,
        }),
      })
        .then((res) => {
          return res.json();
        })
        .then((result) => {
          console.log(result);
        });
    }
  };

  if (item != "!") {
    const color =
      0 === item.sentiment
        ? "#f07167"
        : 1 === item.sentiment
        ? "#36D08D"
        : "#FFD83C";

    return (
      <SafeAreaView>
        <Card
          style={{
            borderRightColor: color,
            borderLeftColor: color,
            marginVertical: 10,
            borderRadius: 10,
            borderRightWidth: 3,
            borderLeftWidth: 3,
            flex: 1,
          }}
        >
          <Card.Content>
            <View
              style={{ fontSize: 15, lineHeight: 25, flexDirection: "row" }}
            >
              <Paragraph style={{ flex: 3.5 / 4 }}>{item.comment}</Paragraph>

              <View style={{ flex: 0.5 / 4 }}>
                <Text style={{ alignSelf: "flex-end", marginRight: 7, marginBottom:4 }}>
                  {count}
                </Text>
                <TouchableOpacity onPress={OnChange}>
                  <AntDesign
                    style={{ alignSelf: "flex-end" }}
                    name={heartname}
                    size={20}
                    color={heartcolor}
                  />
                </TouchableOpacity>
              </View>
            </View>
          </Card.Content>
        </Card>
      </SafeAreaView>
    );
  } else if (item == "!") {
    return <SafeAreaView></SafeAreaView>;
  }
};

export default CommentBox;
