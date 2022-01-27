import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import Navbar from "../../component/header/Navbar";
import { Entypo, FontAwesome, MaterialIcons } from "@expo/vector-icons";
import Strings from "../../helpers/localisedString";
import { FlatList } from "react-native-gesture-handler";
import { useFonts } from "expo-font";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import AsyncStorageLib from "@react-native-async-storage/async-storage";


const Favorite = ({ navigation, route }) => {
  const [bData, setBdata] = useState([]);

  let [fontsLoaded] = useFonts({
    jammel: require("../../assets/fonts/faiz-lahori-nastaleeq-regular-1.ttf"),
  });

  const fetchBookMark = async () => {
    await AsyncStorageLib.getItem("key").then(async (token) => {
      res = JSON.parse(token);
      // console.log("response", res);
      if (res) {
     setBdata(res)
      }
      else{
        setBdata([])
      }
    });
  };

  // const bookData =AsyncStorageLib.getItem('key')

  useEffect(() => {
    fetchBookMark();
  });

  const favorite = () => {
    return (
      <FlatList
        data={bData}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => {
          return (
            <View style={styles.headerList}>
              <TouchableOpacity
                style={styles.listItem}
                onPress={() =>
                  navigation.navigate("Description", {
                    description: item.description,
                    title: item.title,
                  })
                }
              >
                <Text style={[styles.titleList, { fontFamily: "jammel" }]}>
                  {" "}
                  {item.title}
                </Text>
              </TouchableOpacity>
            </View>
          );
        }}
      />
    );
  };

  return (
    <View style={styles.FavoriteContainer}>
      <Navbar
        name={Strings.FAVORITE}
        menu={() => navigation.toggleDrawer()}
        search={() => navigation.navigate("Search")}
        home={() => navigation.navigate("DrawerNavigator")}
        bookmark={() => navigation.navigate("Favorite")}
        leftIcon={<Entypo name="menu" size={34} color="#fff" />}
      />

      <View style={{ flex: 1, top: hp("5%") }}>{bData ? favorite() : ""}</View>
    </View>
  );
};

export default Favorite;

const styles = StyleSheet.create({
  FavoriteContainer: {
    flex: 1,
  },
  ListStyle: {
    flex: 1,
  },
  headerList: {
    marginTop: hp("6%"),
  },
  flatlist: {
    top: hp("5%"),
  },
  listItem: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    elevation: 10,
    padding: 12,
    backgroundColor: "#A5A5A5",
    width: "90%",
    left: wp("6%"),
    borderRadius: 12,
    alignItems: "flex-end",
  },
  titleList: {
    fontSize: hp("2.6%"),
    textAlign: "left",
  },
});
