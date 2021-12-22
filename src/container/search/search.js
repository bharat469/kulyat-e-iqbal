import React from "react";
import {
  Image,
  Keyboard,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import Navbar from "../../component/header/Navbar";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { Searchbar } from "react-native-paper";
import { Entypo,FontAwesome } from '@expo/vector-icons'; 

const Search = ({ navigation }) => {
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.searchBox}>
        <Navbar name="Search" 
        menu={()=>navigation.toggleDrawer()}
        search={()=>navigation.navigate('Search')}
        home={()=>navigation.navigate('Home')}
        home={() => navigation.navigate("DrawerNavigator")}
        bookmark={()=>navigation.navigate('Favorite')}
        leftIcon={ <Entypo name="menu" size={34} color="#fff" />}
        />

        <View style={styles.searchContainer}>
          <Image
            source={require("../../assets/pictures/logo.png")}
            style={styles.logoStyle}
          />

          <Searchbar placeholder="Search" style={styles.searchBar} />
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default Search;

const styles = StyleSheet.create({
  searchBox: {
    flex: 1,
  },

  searchContainer: {
    alignItems: "center",
    top: hp("8%"),
  },

  logoStyle: {
    width: wp("76%"),
    height: hp("30%"),
    margin: 12,
  },

  searchBar: {
    width: wp("90%"),
  },
});
