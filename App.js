import "react-native-gesture-handler";
import React from "react";
import { View, StatusBar } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import ScreenThree from "./screen/addMoney/ScreenThree";
import Home from "./screen/Home";
import Transition from "./screen/Transition";
import ScreenOne from "./screen/addMoney/ScreenOne";
import ScreenTwo from "./screen/addMoney/ScreenTwo";
import ScanQr from "./screen/ScanQr";
import Inbox from "./screen/Inbox";

const Tab = createBottomTabNavigator();
const HomeStack = createStackNavigator();
const Drawer = createDrawerNavigator();

function HomeStackGroup() {
  return (
    <HomeStack.Navigator initialRouteName="TabsGroup">
      <HomeStack.Screen
        name="TabsGroup"
        component={TabsGroup}
        options={{ headerShown: false }}
      />
      <HomeStack.Screen
        name="ScreenThree"
        component={ScreenThree}
        options={{ headerShown: false }}
      />
    </HomeStack.Navigator>
  );
}

function TabsGroup() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: "red",
        tabBarStyle: {
          paddingVertical: 10,
        },
        tabBarIconStyle: {
          marginTop: -10,
        }
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="home" size={size} color={color} />
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Scan"
        component={ScanQr}
        options={{
          tabBarIcon: ({ color, size }) => (
            <View
              style={{
                alignItems: "center",
                
                borderColor: "red", 
                padding: 50, // Border color
              }}
            >
              <View style={{ 
                alignItems: "center",
                position: "absolute",
                backgroundColor: "gray",
                padding: 10,
                }}>

              <AntDesign name="qrcode" size={45} color={color} 
                style={{
                  backgroundColor: "white",
                  position: "absolute",
                  top: -25,
                  alignContent: "center",
                  alignItems: "center",
                  padding: 20,
                  borderRadius: 50,
                  alignItems: "center",
                  borderRadius: 50,
                  borderWidth: 2,
                  borderColor: "red",
                }}
                />
                </View>
            </View>
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Settings"
        component={Transition}
        options={{
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="inbox" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

function DrawerGroup() {
  return (
    <Drawer.Navigator initialRouteName="Feed">
      <Drawer.Screen
        name="Feed"
        component={HomeStackGroup}
        options={{ headerShown: false }}
      />
      <Drawer.Screen
        name="ScreenOne"
        component={ScreenOne}
        options={{ headerShown: false }}
      />
      <Drawer.Screen
        name="ScreenTwo"
        component={ScreenTwo}
        options={{ headerShown: false }}
      />
    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="auto" />
      <DrawerGroup />
    </NavigationContainer>
  );
}
