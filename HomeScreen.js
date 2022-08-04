import React from "react"
import {View, Text, FlatList,TouchableOpacity, Image,Button} from "react-native"
import MainHeader from "../../Components/MainHeader"
import {SliderBox} from "react-native-image-slider-box"
import {useDispatch, useSelector} from "react-redux"
import CatButton from "../../Components/CatButton"
import Colors from "../../Constants/Colors"
import * as CartAction from "../../Store/Action/ProductAction"

const HomeScreen = (props) => {
  const allCategories= useSelector(state=> state.product.allCategories)
  const allProduct= useSelector(state=> state.product.allProduct)
  const dispatch= useDispatch()

  

  const imageArray= [
    "https://www.supermarketnews.com/sites/supermarketnews.com/files/styles/article_featured_retina/public/Grocery%20delivery%20GettyImages-1216930551.jpg?itok=GWW_MNb0",
    "https://t8e5h5n7.stackpathcdn.com/wp-content/uploads/2017/06/slider-1-min-1.jpg",
   " https://www.miractaahhut.com.tr/ticareten/images/slides/eb6a90352294a8009ec76aa8464355bf2.jpg"

  ]


    return(
      <View style={{height:"100%", width:"100%",backgroundColor:"white"}}>
          <MainHeader onCart= { () => props.navigation.navigate("CartScreen")} 
          />
          <SliderBox
  images={imageArray}
  sliderBoxHeight={120}
  onCurrentImagePressed={index => console.warn(`image ${index} pressed`)}
  dotColor={Colors.primary}
  inactiveDotColor="#90A4AE"
  paginationBoxVerticalPadding={20}
  autoplay
  circleLoop
  resizeMethod={'resize'}
  resizeMode={'cover'}
  paginationBoxStyle={{
    position: "absolute",
    bottom: 0,
    padding: 0,
    alignItems: "center",
    alignSelf: "center",
    justifyContent: "center",
    paddingVertical: 10
  }}
  dotStyle={{
    width: 10,
    height: 10,
    borderRadius: 5,
    marginHorizontal: 0,
    padding: 0,
    margin: 0,
    backgroundColor: "rgba(128, 128, 128, 0.92)"
  }}
  ImageComponentStyle={{borderRadius: 10, width: '97%', marginTop: 5}}
  imageLoadingColor="#2196F3"
/>
<View style= {{ width:"100%",  alignItems:"center"}}>
   <CatButton 
   btnTitle="CATEGORIES" onPress={()=>{
    props.navigation.navigate("CategoryScreen")}}/>
    <View style={{ 
    height: 430,
     width:"99%", 
     margin:10
     }}>
   <FlatList
  
  showsVerticalScrollIndicator={false}
    data={allCategories}
    numColumns={2}
    keyExtractor={(item, index)=> index.toString()}
    
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

             <TouchableOpacity onPress={()=>{
              props.navigation.navigate("productScreen",{ 
                id: itemData.item.id
              })}} 
              style={{
                height:"56%",
                 width:"100%"}}
                 >
               <Image
               style={{
                 height:"100%",
                 width:"100%",
                 resizeMode:"center"}}
               source={{uri: itemData.item.imageUrl}}
               />
               <View
              style={{ 
                height:'12%',
                width:'100%',
                justifyContentt:"center",
                alignItems:"center",
                marginTop:5}}>
                <Text style={{ fontSize:14,
        fontWeight:"bold",
        color:Colors.primary}}
                 numberOfLines={1}>{itemData.item.name}</Text>
                
             </View>

             </TouchableOpacity>
             </View>
        
      )
    }}
    />
  </View>
    

</View>
      </View>
    )
}
export default HomeScreen