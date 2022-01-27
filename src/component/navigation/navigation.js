import React, { useEffect } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../../container/home/home";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Search from "../../container/search/search";
import { Entypo, FontAwesome, MaterialIcons } from "@expo/vector-icons";
import { primary } from "../../helpers/colors";
import Favorite from "../../container/favorite/favorite";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { createDrawerNavigator } from '@react-navigation/drawer';
import DrawerContent from "../drawerContent/drawerContent";
import { Drawer } from 'react-native-paper';
import List from "../../container/list/List";
import Description from "../../container/description/description";
import Strings from "../../helpers/localisedString";
import AsyncStorageLib from "@react-native-async-storage/async-storage";



const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const Drawers = createDrawerNavigator();


const drawerNavigation =()=>{
    return(
        <Drawers.Navigator drawerContent={props=><DrawerContent {...props} />} >
            <Drawers.Screen name='TabNavigator' component={tabNavigation} options={{ headerShown: false,drawerLabel:'Home' }} />
        </Drawers.Navigator>
    )
}


const tabNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: { backgroundColor: primary, height:Platform.OS==='ios'?hp('13%') :hp("7.5%") },
        tabBarActiveTintColor: "#fff",
        tabBarShowLabel:false,
        tabBarInactiveTintColor: "#A5A5A5",
        tabBarLabelStyle: {
          fontSize: hp("2%"),
          fontWeight: "bold",
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => {
            return (
              <Entypo
                name="home"
                size={44}
                color="#fff"
                style={[styles.icon, { color: focused ? "#fff" : "#A5A5A5" }]}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="Search"
        component={Search}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => {
            return (
              <FontAwesome
                name="search"
                size={44}
                color="#fff"
                style={[styles.icon, { color: focused ? "#fff" : "#A5A5A5" }]}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="Favorite"
        component={Favorite}
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => {
            return (
              <MaterialIcons
                name="favorite"
                size={44}
                color="#fff"
                style={[styles.icon, {color:focused?'#fff':'#A5A5A5'}]}
              />
            );
          },
        }}
      />
    </Tab.Navigator>
  );
};

const Navigation = () => {

  useEffect(()=>{
    changeLanguage()
  },[])

const changeLanguage= async()=>{
  let langType = null;
  langType = await AsyncStorageLib.getItem('lang')
  if(langType==null){
    await AsyncStorageLib.setItem('lang','urdu')
    Strings.setLanguage('urdu');
   }
   else{
     Strings.setLanguage(langType)
   }
}


  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="DrawerNavigator"
          component={drawerNavigation}
          options={{ headerShown: false }}
        />
        <Stack.Screen
        name="List"
        component={List}
        options={{headerShown:false}}
        />
        <Stack.Screen
        name="Description"
        component={Description}
        options={{headerShown:false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;

const styles = StyleSheet.create({});
