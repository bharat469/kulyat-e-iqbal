import React from "react";
import { StyleSheet, Text, View,TouchableOpacity } from "react-native";
import { Entypo,FontAwesome } from '@expo/vector-icons'; 
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { primary } from "../../helpers/colors";



const Navbar = (props) => {
  return (
    <View style={styles.headers}>
   <View style={styles.navbar}>
     <TouchableOpacity style={styles.menu} onPress={props.menu}>
    {props.leftIcon}
     </TouchableOpacity>
     <View style={styles.leftNavbar}>
       <Text style={styles.title}>{props.name}</Text>
       <TouchableOpacity onPress={props.search}>
       <FontAwesome name="search" size={24} color="#fff" style={styles.icon} />
       </TouchableOpacity>
       <TouchableOpacity onPress={props.bookmark}>
       <Entypo name="bookmark" size={24} color="#fff" style={styles.icon} />
       </TouchableOpacity>
       <TouchableOpacity onPress={props.home}>
       <Entypo name="home" size={24} color="#fff" style={styles.icon} />
       </TouchableOpacity>
     </View>
   </View>
    </View>
  );
};

export default Navbar;

const styles = StyleSheet.create({
 headers:{
   top:hp('4.6%')
 },
 navbar:{
   flexDirection:'row',
   justifyContent:'space-between',
   backgroundColor:primary,
   alignItems:'center',
   height:hp('7%')
 },
 leftNavbar:{
   flexDirection:'row',
   alignItems:'center'
 },
 title:{
   fontSize:hp('2.3%'),
   fontWeight:'bold',
   color:'#fff',
   padding:wp('4%')
 },
 icon:{
   padding:wp('4%')
 },
 menu:{
   left:wp('3%')
 }
});
