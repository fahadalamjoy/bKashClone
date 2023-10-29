import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { Image } from 'react-native'

export default function TabOne() {
  return (
    <ScrollView>
    <View style={{ flexDirection: "column", gap: 20 }}>
      <View style={{backgroundColor: "white",padding: 10}}>
        <Image style={{ height: 200 }} source={require('../assets/all/banner_one.png')}/>
        <Text style={{ fontWeight: "bold",fontSize: 18,color: "black" }}>Super Offer on Add Money</Text>
        <Text style={{ fontWeight: "light",fontSize: 18,color: "gray" }}>Get Instant 30Tk cashback on Add Money from card to bKash</Text>
      </View>
      <View style={{backgroundColor: "white",padding: 10}}>
        <Image style={{ height: 200 }} source={require('../assets/all/banner_two.png')}/>
        <Text style={{ fontWeight: "bold",fontSize: 18,color: "black" }}>Super Offer on Add Money</Text>
        <Text style={{ fontWeight: "light",fontSize: 18,color: "gray" }}>Get Instant 30Tk cashback on Add Money from card to bKash</Text>
      </View>
    </View>
    </ScrollView>
  )
}