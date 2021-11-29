//*****************************************//
//            數據圖（評論走向）
//****************************************//

import React from "react";
import {
  StyleSheet,
  View,
  Dimensions,
  SafeAreaView,
  Image,
} from "react-native";
import { VictoryPie } from "victory-native";
import { Surface, Text } from "react-native-paper";

const { width } = Dimensions.get("window");

const Chart = ({ item }) => {
  const good = item.positive;
  const bad = item.negative;
  if (item != "資料過少，無法分析") {
    return (
      <View style={{ height: 300, marginTop: 20 }}>
        <View>
          <Text style={styles.h2}>
            <Image
              
              source={require("../assets/Bluesquare.png")}
            />
            正向
          </Text>
        </View>
        <View>
          <Text style={styles.h2}>
            <Image
              source={require("../assets/Redsquare.png")}
            />
            反向
          </Text>
        </View>

        <VictoryPie
          width={width * 0.9}
          height={400}
          startAngle={90}
          endAngle={-90}
          colorScale={["#f07167", "#0081a7"]}
          data={[
            { x: bad, y: bad },
            { x: good, y: good },
          ]}
        />
      </View>
    );
  } else {
    return (
      <SafeAreaView>
        <Surface style={styles.surface}>
          <Text>資料過少，無法分析</Text>
        </Surface>
      </SafeAreaView>
    );
  }
};

const styles = StyleSheet.create({
  surface: {
    padding: 3,
    height: 70,
    width: width * 0.8,
    alignItems: "center",
    justifyContent: "center",
    elevation: 4,
    margin: 20,
  },
  h2: {
    alignSelf: "flex-end",
    fontSize: 17,
  },
});

export default Chart;
