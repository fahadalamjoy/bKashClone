import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { Image } from 'react-native'

export default function HomeTop() {
    const [seeMore,setSeeMore] = React.useState(false)
  return (
    <>
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
        <View style={{ flexDirection: "column", gap: 1,alignItems: "center",justifyContent: "center"  }}>
            <Image style={{ width: 50, height: 50,aspectRatio: 1, resizeMode: 'contain' }} source={require('../assets/all/p4.png')} />
            <Text style={{ fontWeight: "light",fontSize: 12,color: "gray" }}>Make Payment</Text>
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
        <View style={{ flexDirection: "column", gap: 1,alignItems: "center",justifyContent: "center"  }}>
            <Image style={{ width: 50, height: 50,aspectRatio: 1, resizeMode: 'contain' }} source={require('../assets/all/p8.png')} />
            <Text style={{ fontWeight: "light",fontSize: 12,color: "gray" }}>Loan</Text>
        </View>
      </View>

      {
        seeMore ? (
            <>
        <View style={{ flexDirection: "row", gap: 1,justifyContent: "space-around",paddingVertical: 10,marginHorizontal: 10 }}> 
            <View style={{ flexDirection: "column", gap: 1,alignItems: "center",justifyContent: "center"  }}>
                <Image style={{ width: 50, height: 50,aspectRatio: 1, resizeMode: 'contain' }} source={require('../assets/all/p9.png')} />
                <Text style={{ fontWeight: "light",fontSize: 12,color: "gray" }}>Add Money</Text>
            </View>
            <View style={{ flexDirection: "column", gap: 1,alignItems: "center",justifyContent: "center"  }}>
                <Image style={{ width: 50, height: 50,aspectRatio: 1, resizeMode: 'contain' }} source={require('../assets/all/p10.png')} />
                <Text style={{ fontWeight: "light",fontSize: 12,color: "gray" }}>Pay Bill</Text>
            </View>
            <View style={{ flexDirection: "column", gap: 1,alignItems: "center",justifyContent: "center"  }}>
                <Image style={{ width: 50, height: 50,aspectRatio: 1, resizeMode: 'contain' }} source={require('../assets/all/p11.png')} />
                <Text style={{ fontWeight: "light",fontSize: 12,color: "gray" }}>Savings</Text>
            </View>
            <View style={{ flexDirection: "column", gap: 1,alignItems: "center",justifyContent: "center"  }}>
                <Image style={{ width: 50, height: 50,aspectRatio: 1, resizeMode: 'contain' }} source={require('../assets/all/p12.png')} />
                <Text style={{ fontWeight: "light",fontSize: 12,color: "gray" }}>Loan</Text>
            </View>
        </View>
        <View style={{ flexDirection: "row", gap: 1,justifyContent: "space-around",paddingVertical: 10,marginHorizontal: 10 }}> 
            <View style={{ flexDirection: "column", gap: 1,alignItems: "center",justifyContent: "center"  }}>
                <Image style={{ width: 50, height: 50,aspectRatio: 1, resizeMode: 'contain' }} source={require('../assets/all/p7.png')} />
                <Text style={{ fontWeight: "light",fontSize: 12,color: "gray" }}>Savings</Text>
            </View>
            <View style={{ flexDirection: "column", gap: 1,alignItems: "center",justifyContent: "center"  }}>
                <Image style={{ width: 50, height: 50,aspectRatio: 1, resizeMode: 'contain' }} source={require('../assets/all/p8.png')} />
                <Text style={{ fontWeight: "light",fontSize: 12,color: "gray" }}>Loan</Text>
            </View>
            
            <View style={{ flexDirection: "column", gap: 1,alignItems: "center",justifyContent: "center"  }}>
                <Image style={{ width: 50, height: 50,aspectRatio: 1, resizeMode: 'contain' }} source={require('../assets/all/p5.png')} />
                <Text style={{ fontWeight: "light",fontSize: 12,color: "gray" }}>Add Money</Text>
            </View>
            <View style={{ flexDirection: "column", gap: 1,alignItems: "center",justifyContent: "center"  }}>
                <Image style={{ width: 50, height: 50,aspectRatio: 1, resizeMode: 'contain' }} source={require('../assets/all/p6.png')} />
                <Text style={{ fontWeight: "light",fontSize: 12,color: "gray" }}>Pay Bill</Text>
            </View>
            
      </View>
      <TouchableOpacity style={{flex: 1, backgroundColor: "white",borderRadius: 20,  paddingHorizontal: 10, paddingVertical: 5 ,borderWidth: 1, borderColor: "#E2136E",width: "20%",alignItems: "center",justifyContent: "center",alignSelf: "center"}} onPress={() => setSeeMore(false)}><Text style={{fontWeight: "bold",color: "#E2136E"}}>Close</Text></TouchableOpacity>
      </>
        ):(
            <View style={{position:"relative"}}>
        <View style={{ flexDirection: "row", gap: 1,justifyContent: "space-around",paddingVertical: 10,marginHorizontal: 10 }}> 
            <View style={{ flexDirection: "column", gap: 1,alignItems: "center",justifyContent: "center"  }}>
                <Image style={{ width: 50, height: 50,aspectRatio: 1, resizeMode: 'contain' }} source={require('../assets/all/p9.png')} />
                {/* <Text style={{ fontWeight: "light",fontSize: 12,color: "gray" }}>Add Money</Text> */}
            </View>
            <View style={{ flexDirection: "column", gap: 1,alignItems: "center",justifyContent: "center"  }}>
                <Image style={{ width: 50, height: 50,aspectRatio: 1, resizeMode: 'contain' }} source={require('../assets/all/p10.png')} />
                {/* <Text style={{ fontWeight: "light",fontSize: 12,color: "gray" }}>Pay Bill</Text> */}
            </View>
            <View style={{ flexDirection: "column", gap: 1,alignItems: "center",justifyContent: "center"  }}>
                <Image style={{ width: 50, height: 50,aspectRatio: 1, resizeMode: 'contain' }} source={require('../assets/all/p11.png')} />
                {/* <Text style={{ fontWeight: "light",fontSize: 12,color: "gray" }}>Savings</Text> */}
            </View>
            <View style={{ flexDirection: "column", gap: 1,alignItems: "center",justifyContent: "center"  }}>
                <Image style={{ width: 50, height: 50,aspectRatio: 1, resizeMode: 'contain' }} source={require('../assets/all/p12.png')} />
                {/* <Text style={{ fontWeight: "light",fontSize: 12,color: "gray" }}>Loan</Text> */}
            </View>
        </View>
        <View style={{ backgroundColor: "white",position: "absolute", top: 0,paddingVertical: 10,zIndex: 5,justifyContent: "center",alignItems: "center",width: "100%",height: "100%",opacity: 0.8}}>
            <TouchableOpacity style={{paddingVertical: 10,backgroundColor: "white",borderRadius: 20,  paddingHorizontal: 10, paddingVertical: 5 ,borderWidth: 1, borderColor: "#E2136E"}} onPress={() => setSeeMore(true)}><Text style={{fontWeight: "bold",color: "#E2136E"}}>See more</Text></TouchableOpacity>

        </View>
      </View>
        )
      }

      

      </>
  )
}