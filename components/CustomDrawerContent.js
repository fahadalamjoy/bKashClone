import { View, Text } from 'react-native'
import React from 'react'
import { createDrawerNavigator, DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import { TouchableOpacity } from 'react-native';
import { ScrollView } from 'react-native';
import { AntDesign,Octicons,Feather,FontAwesome5,MaterialCommunityIcons,FontAwesome } from "@expo/vector-icons";
// import { useNavigation } from '@react-navigation/native';

export default function CustomDrawerContent({ navigation }) {
    // const navigation = useNavigation();
  return (
    <DrawerContentScrollView>
      <View style={{paddingVertical: 30,paddingLeft: 20}}>
        <Text style={{fontSize: 20, fontWeight: "bold",color: "#E2136E"}}>bKash Menu</Text>
        <Text>Language - English</Text>
      </View>
      <ScrollView>
        <DrawerItem 
            labelStyle={{fontSize: 14, fontWeight: "medium",color: "black",marginLeft: -20}}
            style={{borderBottomColor: "gray",borderBottomWidth: 1}}
            icon={() => <Octicons name="home" size={24} color="#E2136E" />} 
            label="Home" onPress={() => navigation.navigate('Home')} />
        <DrawerItem 
            labelStyle={{fontSize: 14, fontWeight: "medium",color: "black",marginLeft: -20}}
            style={{borderBottomColor: "gray",borderBottomWidth: 1}}
            icon={() => <AntDesign name="barschart" size={24} color="#E2136E" />} 
            label="Statement" onPress={() => navigation.navigate('Home')} />
        <DrawerItem 
            labelStyle={{fontSize: 14, fontWeight: "medium",color: "black",marginLeft: -20}}
            style={{borderBottomColor: "gray",borderBottomWidth: 1}}
            icon={() => <Feather name="minimize" size={24} color="#E2136E" />} 
            label="Limits" onPress={() => navigation.navigate('Home')} />
        <DrawerItem 
            labelStyle={{fontSize: 14, fontWeight: "medium",color: "black",marginLeft: -20}}
            style={{borderBottomColor: "gray",borderBottomWidth: 1}}
            icon={() => <FontAwesome5  name="coins" size={24} color="#E2136E" />} 
            label="Coupons" onPress={() => navigation.navigate('Home')} />
        <DrawerItem 
            labelStyle={{fontSize: 14, fontWeight: "medium",color: "black",marginLeft: -20}}
            style={{borderBottomColor: "gray",borderBottomWidth: 1}}
            icon={() => <FontAwesome5  name="people-arrows" size={24} color="#E2136E" />} 
            label="Refer Bkash App" onPress={() => navigation.navigate('Home')} />
        <DrawerItem 
            labelStyle={{fontSize: 14, fontWeight: "medium",color: "black",marginLeft: -20}}
            style={{borderBottomColor: "gray",borderBottomWidth: 1}}
            icon={() => <FontAwesome5  name="map" size={24} color="#E2136E" />} 
            label="bkash Map" onPress={() => navigation.navigate('Home')} />
        <DrawerItem 
            labelStyle={{fontSize: 14, fontWeight: "medium",color: "black",marginLeft: -20}}
            style={{borderBottomColor: "gray",borderBottomWidth: 1}}
            icon={() => <MaterialCommunityIcons   name="find-replace" size={24} color="#E2136E" />} 
            label="Discover bkash" onPress={() => navigation.navigate('Home')} />
        <DrawerItem 
            labelStyle={{fontSize: 14, fontWeight: "medium",color: "black",marginLeft: -20}}
            style={{borderBottomColor: "gray",borderBottomWidth: 1}}
            icon={() => <Feather name="settings" size={24}  color="#E2136E" />} 
            label="Settings" onPress={() => navigation.navigate('Home')} />
        <DrawerItem 
            labelStyle={{fontSize: 14, fontWeight: "medium",color: "black",marginLeft: -20}}
            style={{borderBottomColor: "gray",borderBottomWidth: 1}}
            icon={() => <FontAwesome name="support" size={24}  color="#E2136E" />} 
            label="Support" onPress={() => navigation.navigate('Home')} />
        <DrawerItem 
            labelStyle={{fontSize: 14, fontWeight: "medium",color: "black",marginLeft: -20}}
            style={{borderBottomColor: "gray",borderBottomWidth: 1}}
            icon={() => <AntDesign name="logout" size={24}  color="#E2136E" />} 
            label="Log Out" onPress={() => navigation.navigate('Home')} />
        
      </ScrollView>
    </DrawerContentScrollView>
  )
}