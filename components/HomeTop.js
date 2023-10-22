import { View, Text } from 'react-native'
import React from 'react'
import { Image } from 'react-native'

export default function HomeTop() {
  return (
    <>
      <View style={{ flexDirection: "row", gap: 14,justifyContent: "center",paddingVertical: 10 }}> 
        <View style={{ flexDirection: "column", gap: 1,alignItems: "center",justifyContent: "center"  }}>
            <Image style={{ width: 50, height: 50,aspectRatio: 1, resizeMode: 'contain' }} source={require('../assets/all/p1.png')} />
            <Text style={{ fontWeight: "light",fontSize: 12,color: "gray" }}>Send Money</Text>
        </View>
        <View style={{ flexDirection: "column", gap: 1,alignItems: "center",justifyContent: "center"  }}>
            <Image style={{ width: 50, height: 50,aspectRatio: 1, resizeMode: 'contain' }} source={require('../assets/all/p2.png')} />
            <Text style={{ fontWeight: "light",fontSize: 12,color: "gray" }}>Send Money</Text>
        </View>
        <View style={{ flexDirection: "column", gap: 1,alignItems: "center",justifyContent: "center"  }}>
            <Image style={{ width: 50, height: 50,aspectRatio: 1, resizeMode: 'contain' }} source={require('../assets/all/p3.png')} />
            <Text style={{ fontWeight: "light",fontSize: 12,color: "gray" }}>Send Money</Text>
        </View>
        <View style={{ flexDirection: "column", gap: 1,alignItems: "center",justifyContent: "center"  }}>
            <Image style={{ width: 50, height: 50,aspectRatio: 1, resizeMode: 'contain' }} source={require('../assets/all/p4.png')} />
            <Text style={{ fontWeight: "light",fontSize: 12,color: "gray" }}>Send Money</Text>
        </View>
      </View>
      <View style={{ flexDirection: "row", gap: 14,justifyContent: "center",paddingVertical: 10 }}> 
        <View style={{ flexDirection: "column", gap: 1,alignItems: "center",justifyContent: "center"  }}>
            <Image style={{ width: 50, height: 50,aspectRatio: 1, resizeMode: 'contain' }} source={require('../assets/all/p1.png')} />
            <Text style={{ fontWeight: "light",fontSize: 12,color: "gray" }}>Send Money</Text>
        </View>
        <View style={{ flexDirection: "column", gap: 1,alignItems: "center",justifyContent: "center"  }}>
            <Image style={{ width: 50, height: 50,aspectRatio: 1, resizeMode: 'contain' }} source={require('../assets/all/p2.png')} />
            <Text style={{ fontWeight: "light",fontSize: 12,color: "gray" }}>Send Money</Text>
        </View>
        <View style={{ flexDirection: "column", gap: 1,alignItems: "center",justifyContent: "center"  }}>
            <Image style={{ width: 50, height: 50,aspectRatio: 1, resizeMode: 'contain' }} source={require('../assets/all/p3.png')} />
            <Text style={{ fontWeight: "light",fontSize: 12,color: "gray" }}>Send Money</Text>
        </View>
        <View style={{ flexDirection: "column", gap: 1,alignItems: "center",justifyContent: "center"  }}>
            <Image style={{ width: 50, height: 50,aspectRatio: 1, resizeMode: 'contain' }} source={require('../assets/all/p4.png')} />
            <Text style={{ fontWeight: "light",fontSize: 12,color: "gray" }}>Send Money</Text>
        </View>
      </View>
      </>
  )
}