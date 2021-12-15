import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import Navbar from "../../component/header/Navbar";

const Home = ({navigation}) => {
  return (
    <View style={styles.homeContainer}>
      <Navbar 
      name="Home" 
      menu={()=>navigation.toggleDrawer()}
      search={()=>navigation.navigate('Search')}
      home={()=>navigation.navigate('DrawerNavigator')}
      home={() => navigation.navigate("DrawerNavigator")}
      bookmark={()=>navigation.navigate('Favorite')}
      />
      <View style={styles.bookContainer}>
        <View style={styles.imageContainer}>
          <TouchableOpacity style={styles.book}>
            <Image
              source={require("../../assets/book1.png")}
              style={styles.imageLeftStyle}
            />
          </TouchableOpacity>

          <TouchableOpacity style={styles.book}>
            <Image
              source={require("../../assets/book2.png")}
              style={styles.imageLeftStyle}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.imageContainer}>
          <TouchableOpacity style={styles.book}>
            <Image
              source={require("../../assets/book3.png")}
              style={styles.imageLeftStyle}
            />
          </TouchableOpacity>

          <TouchableOpacity style={styles.book}>
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
