import { View, Text, TouchableOpacity,SafeAreaView, Image } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import { ScrollView } from 'react-native';
import HomeTop from '../components/HomeTop';

export default function Home() {
  const navigation = useNavigation();

  const openDrawer = () => {
    navigation.openDrawer();
  };
  return (
    <View >
      <View style={{ backgroundColor: "#E2136E",padding: 10, flexDirection: "row", alignItems: "center", justifyContent: "space-between",borderBottomLeftRadius: 20, borderBottomRightRadius: 20 }}>
        <View style={{ flexDirection: "row",gap: 10 }}>
          <Image source={require('../assets/all/profile.png')} />
          <View style={{ flexDirection: "column",gap: 5 }}>
            <Text style={{ color: "white", fontWeight: "bold" }}>Fahad Alam Joy</Text>
            <View style={{ flexDirection: "row",gap: 5, backgroundColor: "white",borderRadius: 20,  paddingHorizontal: 10, paddingVertical: 5 }}>
              <Text style={{ color: "white",paddingHorizontal: 6,paddingVertical: 2, fontWeight: "bold",backgroundColor: "#E2136E",borderRadius: 20 }}>৳</Text>
              <Text style={{ color: "#E2136E",fontWeight: "bold" }}>Tab for Balance</Text>
            </View>
          </View>
        </View>
        <View style={{ flexDirection: "row" }}>
          <Image style={{ width: 50, height: 50,color: "white" }} source={require('../assets/all/rewards.png')} />
          <TouchableOpacity onPress={openDrawer}>
            <Image
              style={{ width: 50, height: 50, tintColor: 'white' }}
              source={require('../assets/all/logo.png')}
            />
          </TouchableOpacity>
        </View>
      </View>
      <SafeAreaView>
      <ScrollView style={{ backgroundColor: "white" }}>
        <HomeTop />
        {/* <HomeTop /> */}
      </ScrollView>
      </SafeAreaView>
    </View>
  )
}