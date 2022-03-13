import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { Entypo, FontAwesome,MaterialIcons } from "@expo/vector-icons";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { primary } from "../../helpers/colors";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";

const Navbar = (props) => {
  let [fontsLoaded] = useFonts({
    jammel: require("../../assets/fonts/faiz-lahori-nastaleeq-regular-1.ttf"),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={styles.headers}>
        <View style={styles.navbar}>
          <TouchableOpacity style={styles.menu} onPress={props.menu}>
            {props.leftIcon}
          </TouchableOpacity>
         
            <Text style={styles.title}>{props.name}</Text>
          
            <TouchableOpacity onPress={props.home} >
              <Entypo name="home" size={24} color="#fff" style={styles.icon} />
            </TouchableOpacity>
          </View>
  
      </View>
    );
  }
};

export default Navbar;

const styles = StyleSheet.create({
  headers: {
    top: hp("4.6%"),
  },
  navbar: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: primary,
    alignItems: "center",
    height: hp("7%"),
  },
  leftNavbar: {
    flexDirection: "row",
    alignItems: "center",
   height:hp('12%')
  },
  title: {
    fontSize: hp("2.3%"),
    fontWeight: "bold",
    color: "#fff",
    padding: wp("4%"),
    fontFamily:'jammel',
    alignItems:'center',
    textAlign:'center'
  },
  icon: {
    padding: wp("4%"),
  },
  menu: {
    left: wp("3%"),
  },
});
