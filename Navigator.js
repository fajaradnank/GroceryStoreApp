import React from "react"
import {View,Text} from "react-native"
import {createStackNavigator} from "@react-navigation/stack"
import {NavigationContainer} from "@react-navigation/native"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import MaIcon  from "../Components/MaIcon"
import HomeScreen from "../Screens/Product/HomeScreen"
import CartScreen from "../Screens/Cart/CartScreen"
import ProductScreen from "../Screens/Product/ProductScreen"
import ProfileScreen from "../Screens/Product/ProfileScreen"
import SearchScreen from "../Screens/Product/SearchScreen"
import ProductDetailScreen from "../Screens/Product/ProductDetailScreen"
import CategoryScreen from "../Screens/Product/CategoryScreen"
import Colors from "../Constants/Colors"
import SignUpScreen from "../Screens/Auth/SignUpScreen"

const Stack= createStackNavigator()
const Bottom= createBottomTabNavigator()

const ProductNavigator = () => {
    return(
        <Stack.Navigator screenOptions={{headerShown:false}}>
            <Stack.Screen name="ProductScreen" component={ProductScreen}/>
            <Stack.Screen name="Detail" component={ProductDetailScreen}/>
        </Stack.Navigator>
            
    )
}


const Navigator = () => {
    return(
        <NavigationContainer>
            <Bottom.Navigator screenOptions={{headerShown:false}} tabBarOptions={{showLabel:false}}>
                <Bottom.Screen 
                options={{ 
                    tabBarIcon:({focused})=>(
                        <View style={{
                            height:30, 
                            width:30,
                            }}>
                                <MaIcon
                                iconName="home" 
                                size={focused ? 30 : 25}
                                color= {focused? Colors.primary : "lightgray" } />
                        </View>
                    )
                }}
                name="HomeScreen" component={HomeScreen}/>

                <Bottom.Screen 
                 options={{ 
                    tabBarIcon:({focused})=>(
                        <View style={{
                            height:30, 
                            width:30,
                            }}>
                                <MaIcon
                                iconName="view-list"
                                size={focused ? 30 : 25}
                                color= {focused? Colors.primary : "lightgray" } />
                        </View>
                    )
                }}
                name="productScreen" component={ProductNavigator}/>

                <Bottom.Screen 
                   options={{ 
                    tabBarIcon:({focused})=>(
                        <View style={{
                            height:30, 
                            width:30,
                            }}>
                                <MaIcon
                                iconName="store-search"
                                size={focused ? 30 : 25}
                                color= {focused? Colors.primary : "lightgray" } />
                        </View>
                    )
                }}
                name="SearchScreen" component={SearchScreen}/>

                <Bottom.Screen 
                   options={{ 
                    tabBarIcon:({focused})=>(
                        <View style={{
                            height:30, 
                            width:30,
                            }}>
                                <MaIcon
                                iconName="cart"
                                size={focused ? 30 : 25}
                                color= {focused? Colors.primary : "lightgray" } />
                        </View>
                    )
                }}
                name="CartScreen" component={CartScreen}/>

                <Bottom.Screen 
                   options={{ 
                    tabBarIcon:({focused})=>(
                        <View style={{
                            height:30, 
                            width:30,
                            }}>
                                <MaIcon
                                iconName="expand-all"
                                size={focused ? 30 : 25}
                                color= {focused? Colors.primary : "lightgray" } />
                        </View>
                    )
                }}
                name="CategoryScreen" component={CategoryScreen}/>

                <Bottom.Screen    options={{ 
                    tabBarIcon:({focused})=>(
                        <View style={{
                            height:30, 
                            width:30,
                            }}>
                                <MaIcon
                                iconName="account-reactivate-outline"
                                size={focused ? 30 : 25}
                                color= {focused? Colors.primary : "lightgray" } />
                        </View>
                    )
                }} name="ProfileScreen" component={ProfileScreen}/>

                <Bottom.Screen    options={{ 
                    tabBarIcon:({focused})=>(
                        <View style={{
                            height:30, 
                            width:30,
                            }}>
                                <MaIcon
                                iconName="checkbox-marked-circle-plus-outline"
                                size={focused ? 30 : 25}
                                color= {focused? Colors.primary : "lightgray" } />
                        </View>
                    )
                }} name="signup" component={SignUpScreen}/>
              
            </Bottom.Navigator>
            
        </NavigationContainer>
    )
}

export default Navigator