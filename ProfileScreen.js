import React, {useEffect, useState} from 'react';
import {View, Text, Button, TextInput} from 'react-native';
import MainHeader from '../../Components/MainHeader';
import MyInput from '../../Components/MyInput';
import CatButton from '../../Components/CatButton'
import { TouchableOpacity } from 'react-native-gesture-handler';
import Colors from '../../Constants/Colors';

const ProfileScreen = props => {
  const [email,setEmail]=useState("")
  const [password,setPassword]=useState("")

  const loginHandler=()=>{
    if (email==="Fajar" && password==="admin123") {
        console.log('email', email)
        console.log('password', password)
     props.navigation.navigate("HomeScreen")
    } else {
        alert("Please enter a valid email or password")
        console.log('else', email, password)
    }
}
  return (
    <View style={{height: '100%', width: '100%', backgroundColor: 'white'}}>
      <MainHeader onCart={() => props.navigation.navigate('CartScreen')} 
                onBack={() => props.navigation.goBack('')}/> 
                
                <View style={{justifyContent:"center",alignItems:"center"}}>
              
      <MyInput
            updateText={(text)=>{ 
              console.log(text)
                setEmail(text)
            }}
           placeholder="Enter your email address"
           type="email-address"
           />
           <MyInput
            updateText={(text)=>{
                console.log(text)
                setPassword(text)
            }}
           secure
             placeholder="Enter your password"
             />
            
      <CatButton onPress={loginHandler}  btnTitle="LOGIN" />
    <Text style={{color:Colors.headerColor} }onPress={()=> props.navigation.navigate("signup")}> Dont have an account? Create one </Text>
    
      </View>
    </View>
  );
};
export default ProfileScreen;
