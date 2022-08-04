import React from "react"
import {View, Text,FlatList,TouchableOpacity,Image} from "react-native"
import MainHeader from "../../Components/MainHeader"
import Colors from "../../Constants/Colors"
import {useDispatch, useSelector} from "react-redux"
import * as CartAction from "../../Store/Action/ProductAction"

const ProductScreen = (props) => {
  const allCategories= useSelector(state=> state.product.allCategories)
  const allProduct= useSelector(state=> state.product.allProduct)
  const dispatch= useDispatch()

    return(
      <View style={{height:"100%", width:"100%", backgroundColor:"white"}}>
          <MainHeader onCart= { () => props.navigation.navigate("CartScreen")}
          onBack={() => props.navigation.goBack(null)}/> 
          <View style={{ 
         height:"90%",
     width:"100%", 
     marginVertical:5
     }}>
  <FlatList
  showsVerticalScrollIndicator={false}
    data={allProduct}
    keyExtractor={(item, index)=> index.toString()}
    numColumns={2}
    renderItem={(itemData)=>{  
      
  addToCartHandler=()=>{
     dispatch(CartAction.addToCartAction(itemData.item))
  }

      return( 
        
        <View
        style ={{
          height:230,
           width:"48%", 
           backgroundColor:"white", 
           margin:5,
           shadowColor: "#000",
           shadowOffset: {
        	 width: 0,
	         height: 1,
},
           shadowOpacity: 0.18,
           shadowRadius: 1.00,

           elevation: 1,
           justifyContent:"center",
           alignItems:"center"
           }}>

             <TouchableOpacity
             onPress={()=> {props.navigation.navigate("Detail",{data : itemData.item})}}
              style={{
                height:"60%",
                 width:"100%"}}
                 >
               <Image
               style={{
                 height:"100%",
                 width:"100%",
                 resizeMode:"contain"}}
               source={{uri: itemData.item.thumbNail}}
               />

             </TouchableOpacity>

             <View
              style={{ 
                height:'12%',
                width:'100%',
                justifyContentt:"center",
                alignItems:"center",
                marginTop:5}}>
                <Text numberOfLines={1}>{itemData.item.name}</Text>
                <Text  style={{fontSize:12,fontWeight:'bold',color:"red"}}>{itemData.item.priceUnit}</Text>
                
             </View>

             <View
              style={{ 
                height:'20%',
                width:'100%',
                justifyContentt:"center",
                alignItems:"center",
                marginTop:5
                }}>
                 <TouchableOpacity
                 onPress={addToCartHandler}
                  style={{height:30,width:100,marginTop:11,backgroundColor:Colors.primary,borderRadius:10,justifyContent:"center",alignItems:"center"}}>
                        <Text style={{fontSize:12,fontWeight:'bold',color:"white"}}>ADD TO CART</Text>
                      </TouchableOpacity>
             </View>
        </View>
      )
    }}
    />
  </View>
      </View>
    )
}
export default ProductScreen