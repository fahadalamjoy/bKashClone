import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Home from './screen/Home';
import Transition from './screen/Transition';
import ScreenOne from './screen/addMoney/ScreenOne';
import ScreenTwo from './screen/addMoney/ScreenTwo';
import ScreenThree from './screen/addMoney/ScreenThree';

const Tab = createBottomTabNavigator();
const HomeStack = createStackNavigator();
const Drawer = createDrawerNavigator();

function HomeStackGroup() {
  return (
    <HomeStack.Navigator initialRouteName="TabsGroup">
      <HomeStack.Screen name="TabsGroup" component={TabsGroup} />
      <HomeStack.Screen name="ScreenThree" component={ScreenThree} />
    </HomeStack.Navigator>
  );
}

function TabsGroup() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Settings" component={Transition} />
    </Tab.Navigator>
  );
}

function DrawerGroup() {
  return (
    <Drawer.Navigator initialRouteName="Feed">
      <Drawer.Screen name="Feed" component={HomeStackGroup} />
      <Drawer.Screen name="ScreenOne" component={ScreenOne} />
      <Drawer.Screen name="ScreenTwo" component={ScreenTwo} />
    </Drawer.Navigator>
  );
}

export default function Navigation() {
  return (
    <NavigationContainer>
      <DrawerGroup />
    </NavigationContainer>
  );
}
