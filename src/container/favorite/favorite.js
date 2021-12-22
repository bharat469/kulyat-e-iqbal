import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Navbar from "../../component/header/Navbar";
import { Entypo,FontAwesome } from '@expo/vector-icons'; 
const Favorite = ({navigation}) => {
  return (
    <View style={styles.FavoriteContainer}>
      <Navbar
        name="BookMark"
        menu={() => navigation.toggleDrawer()}
        search={() => navigation.navigate("Search")}
        home={() => navigation.navigate("DrawerNavigator")}
    bookmark={()=>navigation.navigate('Favorite')}
    leftIcon={ <Entypo name="menu" size={34} color="#fff" />}
    />
    </View>
  );
};

export default Favorite;

const styles = StyleSheet.create({});
