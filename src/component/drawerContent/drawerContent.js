import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { primary } from "../../helpers/colors";
import { Entypo, FontAwesome,Feather } from "@expo/vector-icons";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { Switch } from "react-native-paper";
import { TouchableOpacity } from "react-native-gesture-handler";
const DrawerContent = (props) => {
  return (
    <View style={styles.drawerContent}>
      <Image
        source={require("../../assets/pictures/logo.png")}
        style={styles.drawerImage}
      />
      <View style={styles.drawerNavigation}>
        <View style={styles.languageContainer}>
          <Text style={styles.lanText}>English/اردو</Text>
          <Switch />
        </View>
        <TouchableOpacity style={styles.navigation}>
          <FontAwesome name="home" size={24} color="#fff" style={styles.icon} />
          <Text style={styles.lanText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navigation}>
          <FontAwesome
            name="search"
            size={24}
            color="#fff"
            style={styles.icon}
          />
          <Text style={styles.lanText}>Search</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navigation}>
          <FontAwesome
            name="bookmark"
            size={24}
            color="#fff"
            style={styles.icon}
          />
          <Text style={styles.lanText}>My Favorites</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navigation}>
          <FontAwesome
            name="globe"
            size={24}
            color="#fff"
            style={styles.icon}
          />
          <Text style={styles.lanText}>Website</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navigation}>
          <FontAwesome
            name="users"
            size={24}
            color="#fff"
            style={styles.icon}
          />
          <Text style={styles.lanText}>About us</Text>
        </TouchableOpacity>

        <View style={styles.socialIcon}>
            <TouchableOpacity>
            <Feather name="facebook" size={24} color="#fff" style={[styles.iconStyle,{backgroundColor:'#4267B2'}]} />
            </TouchableOpacity>
            <TouchableOpacity>
            <Feather name="instagram" size={24} color="#fff" style={[styles.iconStyle,{backgroundColor:'#C13584'}]} />
            </TouchableOpacity>
            <TouchableOpacity>
            <FontAwesome name="whatsapp" size={24} color="#fff" style={[styles.iconStyle,{backgroundColor:'#25D366'}]} />
            </TouchableOpacity>
            <TouchableOpacity>
            <Entypo name="linkedin" size={24} color="#fff" style={[styles.iconStyle,{backgroundColor:'#4267B2'}]} />
            </TouchableOpacity>
            <TouchableOpacity>
            <Feather name="youtube" size={24} color="#fff" style={[styles.iconStyle,{backgroundColor:'#FF0000'}]} />
            </TouchableOpacity>
        </View>
<View style={styles.textEntry}>
<Text style={styles.textColor}>#Darulikhlas#</Text>
<Text style={styles.textColor}>Islamic Research Center</Text>
</View>

      </View>
    </View>
  );
};

export default DrawerContent;

const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
    backgroundColor: primary,
  },
  drawerImage: {
    width: wp("56%"),
    height: hp("20%"),
    top: hp("7%"),
  },
  drawerNavigation: {
    top: hp("9%"),
    left: wp("5%"),
  },

  languageContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  lanText: {
    color: "#fff",
    fontSize: hp("2%"),
    padding: 12,
  },
  icon: {
    padding: wp("4%"),
  },
  navigation: {
    flexDirection: "row",
    alignItems: "center",
  },
socialIcon:{
flexDirection:'row'
},

  iconStyle:{
margin:8,
borderRadius:13,
padding:4
  },
  textColor:{
    left:wp('5%'),
    color:'#fff',
    fontSize:hp('2%'),
    padding:12,
    fontWeight:'bold'
  }
});
