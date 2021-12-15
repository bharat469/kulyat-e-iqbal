import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Navbar from "../../component/header/Navbar";
const Favorite = ({navigation}) => {
  return (
    <View style={styles.FavoriteContainer}>
      <Navbar
        name="BookMark"
        menu={() => navigation.toggleDrawer()}
        search={() => navigation.navigate("Search")}
        home={() => navigation.navigate("DrawerNavigator")}
    bookmark={()=>navigation.navigate('Favorite')}
    />
    </View>
  );
};

export default Favorite;

const styles = StyleSheet.create({});
