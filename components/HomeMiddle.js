import { View, Text } from 'react-native'
import React from 'react'
import { ScrollView } from 'react-native'
import { Image } from 'react-native'
import { BottomSheet } from '@rneui/themed'
import { TouchableOpacity } from 'react-native'
import { useState } from 'react'

export default function HomeMiddle() {
    const [isVisible, setIsVisible] = useState(false);
    const openBottomSheet = () => {
        setIsVisible(true);
    };
    const closeBottomSheet = () => {
        setIsVisible(false);
    };
  return (
    <View style={{ backgroundColor: "white" }}>
      <View style={{ borderWidth: 1, borderColor: "#F5F5F5", borderRadius: 10,margin: 10 }}>
        <View style={{ flexDirection: "row",justifyContent: "space-between",paddingVertical: 10,paddingHorizontal: 20,borderBottomWidth: 1, borderColor: "#F5F5F5" }}>
          <Text style={{ fontSize: 12, fontWeight: "bold", color: "gray" }}>My Bkash</Text>
          <TouchableOpacity
              onPress={() => setIsVisible(true)}
            >
              <Text style={{ color: '#E2136E' }}>Seel All</Text>
            </TouchableOpacity>
        </View>
        <ScrollView horizontal={true}>
            <View style={{ flexDirection: "row", gap: 10,justifyContent: "space-around",paddingVertical: 10,marginHorizontal: 10 }}> 
                <View style={{ flexDirection: "column", gap: 1,alignItems: "center",justifyContent: "center"  }}>
                    <Image style={{ width: 50, height: 50,aspectRatio: 1, resizeMode: 'contain' }} source={require('../assets/all/p1.png')} />
                    <Text style={{ fontWeight: "light",fontSize: 12,color: "gray" }}>Send Money</Text>
                </View>
                <View style={{ flexDirection: "column", gap: 1,alignItems: "center",justifyContent: "center"  }}>
                    <Image style={{ width: 50, height: 50,aspectRatio: 1, resizeMode: 'contain' }} source={require('../assets/all/p2.png')} />
                    <Text style={{ fontWeight: "light",fontSize: 12,color: "gray" }}>Mobile Recharge</Text>
                </View>
                <View style={{ flexDirection: "column", gap: 1,alignItems: "center",justifyContent: "center"  }}>
                    <Image style={{ width: 50, height: 50,aspectRatio: 1, resizeMode: 'contain' }} source={require('../assets/all/p3.png')} />
                    <Text style={{ fontWeight: "light",fontSize: 12,color: "gray" }}>Cash Out</Text>
                </View>
                <View style={{ flexDirection: "column", gap: 1,alignItems: "center",justifyContent: "center"  }}>
                    <Image style={{ width: 50, height: 50,aspectRatio: 1, resizeMode: 'contain' }} source={require('../assets/all/p4.png')} />
                    <Text style={{ fontWeight: "light",fontSize: 12,color: "gray" }}>Make Payment</Text>
                </View>
                <View style={{ flexDirection: "column", gap: 1,alignItems: "center",justifyContent: "center"  }}>
                    <Image style={{ width: 50, height: 50,aspectRatio: 1, resizeMode: 'contain' }} source={require('../assets/all/p3.png')} />
                    <Text style={{ fontWeight: "light",fontSize: 12,color: "gray" }}>Cash Out</Text>
                </View>
                <View style={{ flexDirection: "column", gap: 1,alignItems: "center",justifyContent: "center"  }}>
                    <Image style={{ width: 50, height: 50,aspectRatio: 1, resizeMode: 'contain' }} source={require('../assets/all/p4.png')} />
                    <Text style={{ fontWeight: "light",fontSize: 12,color: "gray" }}>Make Payment</Text>
                </View>
                <View style={{ flexDirection: "column", gap: 1,alignItems: "center",justifyContent: "center"  }}>
                    <Image style={{ width: 50, height: 50,aspectRatio: 1, resizeMode: 'contain' }} source={require('../assets/all/p3.png')} />
                    <Text style={{ fontWeight: "light",fontSize: 12,color: "gray" }}>Cash Out</Text>
                </View>
                <View style={{ flexDirection: "column", gap: 1,alignItems: "center",justifyContent: "center"  }}>
                    <Image style={{ width: 50, height: 50,aspectRatio: 1, resizeMode: 'contain' }} source={require('../assets/all/p4.png')} />
                    <Text style={{ fontWeight: "light",fontSize: 12,color: "gray" }}>Make Payment</Text>
                </View>
            </View>
        </ScrollView>
      </View>
      <BottomSheet modalProps={{}} isVisible={isVisible}>
        <View style={{ backgroundColor: 'white', paddingVertical: 10,borderTopLeftRadius: 20,borderTopRightRadius: 20 }}>
            <View style={{ flexDirection: "row",justifyContent: "space-between",paddingVertical: 10,paddingHorizontal: 20,borderBottomWidth: 1, borderColor: "#F5F5F5" }}>
            <Text style={{ fontSize: 12, fontWeight: "bold", color: "gray" }}>My Bkash</Text>
            <TouchableOpacity
                onPress={() => setIsVisible(false)}
                >
                <Text style={{ color: '#E2136E' }}>Close</Text>
                </TouchableOpacity>
            </View>
        <View style={{ flexDirection: "row", gap: 1,justifyContent: "space-around",paddingVertical: 10,marginHorizontal: 10 }}> 
            <View style={{ flexDirection: "column", gap: 1,alignItems: "center",justifyContent: "center"  }}>
                <Image style={{ width: 50, height: 50,aspectRatio: 1, resizeMode: 'contain' }} source={require('../assets/all/p1.png')} />
                <Text style={{ fontWeight: "light",fontSize: 12,color: "gray" }}>Send Money</Text>
            </View>
            <View style={{ flexDirection: "column", gap: 1,alignItems: "center",justifyContent: "center"  }}>
                <Image style={{ width: 50, height: 50,aspectRatio: 1, resizeMode: 'contain' }} source={require('../assets/all/p2.png')} />
                <Text style={{ fontWeight: "light",fontSize: 12,color: "gray" }}>Mobile Recharge</Text>
            </View>
            <View style={{ flexDirection: "column", gap: 1,alignItems: "center",justifyContent: "center"  }}>
                <Image style={{ width: 50, height: 50,aspectRatio: 1, resizeMode: 'contain' }} source={require('../assets/all/p3.png')} />
                <Text style={{ fontWeight: "light",fontSize: 12,color: "gray" }}>Cash Out</Text>
            </View>
            
      </View>
      <View style={{ flexDirection: "row", gap: 1,justifyContent: "space-around",paddingVertical: 10,marginHorizontal: 10 }}> 
        <View style={{ flexDirection: "column", gap: 1,alignItems: "center",justifyContent: "center"  }}>
            <Image style={{ width: 50, height: 50,aspectRatio: 1, resizeMode: 'contain' }} source={require('../assets/all/p5.png')} />
            <Text style={{ fontWeight: "light",fontSize: 12,color: "gray" }}>Add Money</Text>
        </View>
        <View style={{ flexDirection: "column", gap: 1,alignItems: "center",justifyContent: "center"  }}>
            <Image style={{ width: 50, height: 50,aspectRatio: 1, resizeMode: 'contain' }} source={require('../assets/all/p6.png')} />
            <Text style={{ fontWeight: "light",fontSize: 12,color: "gray" }}>Pay Bill</Text>
        </View>
        <View style={{ flexDirection: "column", gap: 1,alignItems: "center",justifyContent: "center"  }}>
            <Image style={{ width: 50, height: 50,aspectRatio: 1, resizeMode: 'contain' }} source={require('../assets/all/p7.png')} />
            <Text style={{ fontWeight: "light",fontSize: 12,color: "gray" }}>Savings</Text>
        </View>
        
      </View>
      <View style={{ flexDirection: "row", gap: 1,justifyContent: "space-around",paddingVertical: 10,marginHorizontal: 10 }}> 
        <View style={{ flexDirection: "column", gap: 1,alignItems: "center",justifyContent: "center"  }}>
            <Image style={{ width: 50, height: 50,aspectRatio: 1, resizeMode: 'contain' }} source={require('../assets/all/p5.png')} />
            <Text style={{ fontWeight: "light",fontSize: 12,color: "gray" }}>Add Money</Text>
        </View>
        <View style={{ flexDirection: "column", gap: 1,alignItems: "center",justifyContent: "center"  }}>
            <Image style={{ width: 50, height: 50,aspectRatio: 1, resizeMode: 'contain' }} source={require('../assets/all/p6.png')} />
            <Text style={{ fontWeight: "light",fontSize: 12,color: "gray" }}>Pay Bill</Text>
        </View>
        <View style={{ flexDirection: "column", gap: 1,alignItems: "center",justifyContent: "center"  }}>
            <Image style={{ width: 50, height: 50,aspectRatio: 1, resizeMode: 'contain' }} source={require('../assets/all/p7.png')} />
            <Text style={{ fontWeight: "light",fontSize: 12,color: "gray" }}>Savings</Text>
        </View>
        
      </View>
        </View>
    </BottomSheet>
    </View>
  )
}