import React from "react";
import { Image } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { Entypo,Feather } from '@expo/vector-icons';

import PoupularNews from "./screen/PoupularNews";
import NewsDetails from "./screen/NewsDetails";
import Classification from "./screen/Classification";
import ApiForCFT from "./componemt/ApiForCFT";
import SearchResult from "./screen/SearchResult";
import Intro from "./screen/intro";
import SearchKw from "./screen/SearchKw";
import NewsDetailsForKw from "./screen/NewsDetailsForKw";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function HomeStark() {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerBackTitle: "返回",
        headerTintColor: "black",
        headerStyle: { backgroundColor: "#F6EFE9" },
      }}
    >
      <Stack.Screen name="新聞小精靈" component={PoupularNews} />
      
      <Stack.Screen
        name="Intro"
        component={Intro}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="SearchResult"
        component={SearchResult}
        options={{ title: "搜尋" }}
      />
      <Stack.Screen
        name="SearchKw"
        component={SearchKw}
        options={{ title: "搜尋" }}
      />
      <Stack.Screen
        name="NewsDetailsForKw"
        component={NewsDetailsForKw}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="NewsDetails"
        component={NewsDetails}
        options={{ headerShown: false }}
      />
      
    </Stack.Navigator>
  );
}

function classification() {
  return (
    <Stack.Navigator
      initialRouteName="Classification"
      screenOptions={{
        headerBackTitle: "返回",
        headerTintColor: "black",
      }}
    >
      <Stack.Screen
        name="Classification"
        component={Classification}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ApiForCFT"
        component={ApiForCFT}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="SearchKw"
        component={SearchKw}
        options={{ title: "搜尋" }}
      />
      <Stack.Screen
        name="NewsDetailsForKw"
        component={NewsDetailsForKw}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="NewsDetails"
        component={NewsDetails}
        options={{ headerShown: false }}
      />
      
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="HomeScreen"
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color }) => {
            if (route.name == "首頁") {
              return (
                <Entypo name="home" size={30} color={color}/>
              );
            } else if (route.name == "分類") {
              return (
                <Feather name="list" size={30} color={color}/>
              );
            }
          },
          tabBarInactiveTintColor:'gray',
          tabBarActiveTintColor:'#624941',
          tabBarStyle:{backgroundColor:'#F6EFE9'}
        })}
      >
        <Tab.Screen name="首頁" component={HomeStark} options={{ headerShown: false }}/>
        <Tab.Screen name="分類" component={classification} options={{ headerShown: false }}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
}
