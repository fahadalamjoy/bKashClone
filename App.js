import "react-native-gesture-handler";
import React from "react";
import { View, StatusBar } from "react-native";
import { AntDesign,Octicons,FontAwesome  } from "@expo/vector-icons";
import { NavigationContainer  } from "@react-navigation/native";
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
import { CardStyleInterpolators } from '@react-navigation/stack';

const Tab = createBottomTabNavigator();
const HomeStack = createStackNavigator();
const Drawer = createDrawerNavigator();

function HomeStackGroup() {
  return (
    <HomeStack.Navigator initialRouteName="TabsGroup"
      options={{ 
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS ,
       }}
    >
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
        tabBarActiveTintColor: "white",
        tabBarInactiveTintColor: "#9a9a9a",
        tabBarStyle: {
          paddingVertical: 10,
          backgroundColor: "#E2136E",
          height: 60,
        },
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: "bold",
          paddingVertical: 5,
        },
        tabBarIconStyle: {
          // marginTop: -1,
        }
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Octicons name="home" size={size} color={color} />
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
                  top: -15,
                  alignContent: "center",
                  alignItems: "center",
                  padding: 15,
                  borderRadius: 50,
                  alignItems: "center",
                  borderRadius: 50,
                  borderWidth: 2,
                  borderColor: "#E2136E",
                  color: "#E2136E",
                }}
                />
                </View>
            </View>
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Inbox"
        component={Transition}
        options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="envelope" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

function DrawerGroup() {
  return (
    <Drawer.Navigator initialRouteName="Feed"
      screenOptions={{
        drawerPosition: "right",
      }}
    >
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
      <StatusBar style="#E2136E" />
      <DrawerGroup />
    </NavigationContainer>
  );
}
