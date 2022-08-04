import React from "react"
import {View,Text,SafeAreaView, Image, FlatList} from "react-native"
import { ScrollView } from "react-native-gesture-handler"
import  Colors  from "../../Constants/Colors"
import MainHeader from "../../Components/MainHeader"

const ProductDetailScreen = (props) => {
    const data= props.route.params.data
    
    return(
        <SafeAreaView style={{ height:"100%",width:"100%",justifyContent:"center",alignItems:"center",backgroundColor:"white"}}>
             <MainHeader onCart= { () => props.navigation.navigate("CartScreen")}
          onBack={() => props.navigation.goBack(null)}/> 
            <ScrollView>
                <View style={{marginHorizontal:10}}>
                    <Image 
                    source= {{uri: data.thumbNail}}
                    style={{height: 300,width:"100%",resizeMode:"center"}}
                    />

                    <View style={{marginVertical:10, flexDirection: "row", justifyContent:"center", alignItems:"center",width:"100%"}}>
                            <Text style={{ fontSize:25,margin:3, fontWeight:"bold",color:Colors.primary}}>
                                 {data.name}
                                   </Text>
                    </View>
                    
                    <View style={{marginVertical:1, justifyContent:"center",margin:3, alignItems:"center",width:"100%"}}>
                        <Text>
                            <Text style={{ fontWeight:"bold", fontSize:20,color:Colors.primary}}> {data.priceUnit} </Text>
                          
                        </Text>
                    </View>

                    <View style={{marginVertical:10, justifyContent:"center", alignItems:"center",width:"100%"}}>
                            <Text> 
                                <Text style={{fontWeight:"normal",fontSize:15,color:"black"}}>{data.description}</Text>
                             </Text>
                    </View>
 
                    
                    
                   

                </View>

            </ScrollView>
        </SafeAreaView>
    )}
export default ProductDetailScreen