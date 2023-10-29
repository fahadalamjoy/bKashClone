import { View, Text } from 'react-native'
import React from 'react'
import { TabView, TabBar } from 'react-native-tab-view';
import TabOne from '../components/TabOne';
import TabTwo from '../components/TabTwo';
import { useState } from 'react';
export default function Transition() {
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: 'tab1', title: 'Notifications' },
    { key: 'tab2', title: 'Transactions' },
  ]);

  const renderScene = ({ route }) => {
    switch (route.key) {
      case 'tab1':
        return (
          <TabOne />
        );
      case 'tab2':
        return (
          <TabTwo />
        );
      default:
        return null;
    }
  };

  const renderTabBar = (props) => (
    <TabBar
      {...props}
      indicatorStyle={{ backgroundColor: 'white' }}
      style={{ backgroundColor: '#E2136E' }}
      labelStyle={{ color: 'white',textTransform: 'capitalize' }}
    />
  );
  return (
    <View style={{ flex: 1 }}>
      <TabView
        navigationState={{ index, routes }}
        renderScene={renderScene}
        onIndexChange={setIndex}
        renderTabBar={renderTabBar}
      />
    </View>
  )
}