//*****************************************//
//                評論卡片
//****************************************//
import React, { useState } from "react";
import {
  StyleSheet,
  SafeAreaView,
  View,
  TouchableOpacity
} from "react-native";
import { AntDesign  } from '@expo/vector-icons';
import {Card, Paragraph } from "react-native-paper";



const CommentBox = ({ item }) => {
      const [heartcolor,setHeartcolor] = useState("black")
      const [heartname, SetHeartname] = useState("hearto")
      const [count,setCount] = useState(0)
      //const [commentCount,setCommentCount] = useState(0)

      const OnChange = () =>{
        SetHeartname("heart")
        setHeartcolor("red")
        setCount(count + 1)
        
          // fetch("http://140.134.26.31:3000/api/comment/postComment", {
          //   method: "POST",
          //   headers: {
          //     Accept: "application/json",
          //     "Content-Type": "application/json",
          //   },
          //   body: JSON.stringify({
          //     newsID: item.News_id,
          //     provenance: item.Provenance,
          //     comment: newcomment,
          //   }),
          // })
          //   .then((res) => {
          //     return res.json();
          //   })
          //   .then((result) => {
          //     console.log(result)
          //   });
        
      }
      if(item != "!"){
        //setCommentCount(1)
          return(
            <SafeAreaView>
              <Card style={styles.item}>
                <Card.Content>
                    <Paragraph  style={{fontSize: 15, lineHeight: 25 }}>
                      {item.comment}
                    </Paragraph>
                   {/*  <Paragraph  style={{alignSelf: "flex-end", margin:7}}>{count}</Paragraph>
                    <TouchableOpacity
                      onPress={OnChange}
                    >
                      <AntDesign  style={{alignSelf: "flex-end"}} name={heartname} size={20} color={heartcolor} />
                    </TouchableOpacity> */}
                </Card.Content>
              </Card>
          </SafeAreaView>
          )
     }
      else if(item == "!" ){
          return(
          <SafeAreaView>
          </SafeAreaView> 
          )
      }
  }
  

const styles = StyleSheet.create({
  item: {
    marginVertical: 10,
    borderRadius: 10,
    borderRightColor: "#f07167",
    borderLeftColor: "#f07167",
    borderRightWidth: 3,
    borderLeftWidth: 3,
    flex:1
  },
});

export default CommentBox