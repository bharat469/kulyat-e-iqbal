import React, { useEffect } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import Navbar from "../../component/header/Navbar";
import { Entypo,FontAwesome } from '@expo/vector-icons'; 
import Strings from '../../helpers/localisedString'
import AsyncStorageLib from "@react-native-async-storage/async-storage";

const Home = ({navigation,route}) => {
const langty = route.params

useEffect(()=>{
  return console.log('lang',langty)
})



console.log('')
  return (
    <View style={styles.homeContainer}>
      <Navbar 
      name={Strings.HOME}
      menu={()=>navigation.toggleDrawer()}
      search={()=>navigation.navigate('Search')}
      home={()=>navigation.navigate('DrawerNavigator')}
      home={() => navigation.navigate("DrawerNavigator")}
      bookmark={()=>navigation.navigate('Favorite')}
      leftIcon={ <Entypo name="menu" size={34} color="#fff" />}
      />
      <View style={styles.bookContainer}>
        <View style={styles.imageContainer}>
          <TouchableOpacity style={styles.book} onPress={()=>navigation.navigate('List',{id:1,name:'ثنا کا موسم'})} >
            <Image
              source={require("../../assets/book1.png")}
              style={styles.imageLeftStyle}
            />
          </TouchableOpacity>

          <TouchableOpacity style={styles.book} onPress={()=>navigation.navigate('List',{id:2,name:'حریصٌ علینا'})}>
            <Image
              source={require("../../assets/book2.png")}
              style={styles.imageLeftStyle}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.imageContainer}>
          <TouchableOpacity style={styles.book} onPress={()=>navigation.navigate('List',{id:3,name:'محاسن'})}>
            <Image
              source={require("../../assets/book3.png")}
              style={styles.imageLeftStyle}
            />
          </TouchableOpacity>

          <TouchableOpacity style={styles.book} onPress={()=>navigation.navigate('List',{id:4,name:'تحیت'})}>
            <Image
              source={require("../../assets/book4.png")}
              style={styles.imageLeftStyle}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
 homeContainer:{
     flex:1
 },
 
 bookContainer:{
top:hp('4%')
 },
    imageLeftStyle: {
    width: wp("44%"),
    height: hp("30%"),
    padding: wp("2%"),
    margin: 12,
    borderRadius:12
  },
  imageContainer: {
    flexDirection: "row",
    top: hp("5%"),
  },
  book:{
shadowColor:'#000',
shadowOffset:{
    width:0,
    height:8,
},
shadowOpacity:0.46,
shadowRadius:11.14,
elevation:17,

  }
});
