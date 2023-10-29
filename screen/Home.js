import { View, Text, TouchableOpacity,SafeAreaView, Image } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import { ScrollView } from 'react-native';
import HomeTop from '../components/HomeTop';
import HomeMiddle from '../components/HomeMiddle';
import { SliderBox } from "react-native-image-slider-box";
import HomeLast from '../components/HomeLast';

export default function Home() {
  const [images,setImages] = React.useState([
    require('../assets/all/banner_one.png'),
    require('../assets/all/banner_two.png'),
    require('../assets/all/banner_three.png'),
  ])
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
      <ScrollView>
        <View style={{ backgroundColor: "white",borrder: 1 }}>
        <HomeTop />

        </View>
        {/* <HomeTop /> */}
        <View style={{ backgroundColor: "white", marginTop: 10 }}>
          <HomeMiddle />
        </View>
        <View style={{ flex: 1, margin: 10,overflow: "hidden",width: "100%",height: 150,alignContent: "center",alignItems: "center",justifyContent: "center" }}>
          <SliderBox images={images} />
        </View>
        <View style={{ backgroundColor: "white", marginTop: 10 ,paddingBottom: 100}}>
          <HomeLast />
        </View>
      </ScrollView>
    </View>
  )
}