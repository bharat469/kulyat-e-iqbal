import React, { useEffect, useState } from "react";
import {
  Image,
  Keyboard,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
  TouchableOpacity
} from "react-native";
import Navbar from "../../component/header/Navbar";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { Searchbar } from "react-native-paper";
import { Entypo, FontAwesome } from "@expo/vector-icons";
import Strings from "../../helpers/localisedString";
import { FlatList } from "react-native-gesture-handler";

const overall = require("../../data/overall.json");

const Search = ({ navigation }) => {
  const [filteredData, setfilterData] = useState([]);
  const [masterData, setmasterData] = useState([]);
  const [search,setSearch] = useState('')

  const fetch = () => {
   
    setmasterData(overall);
  };

  useEffect(() => {
    fetch();
    // console.log(filteredData[0].title);
  });

  const ItemSeparatorView = () => {
    return (
      <View
        style={{ height: 0.5, width: "100%", backgroundColor: "#c8c8c8" }}
      />
    );
  };

  const searchFilter = (text)=>{
    if(text){
      const newData =  masterData.filter((item)=>{
        const itemData = item.description ?item.description:''
        const textData = text;
        return itemData.indexOf(textData)>-1;
      });
      setfilterData(newData)
      setSearch(text)
    }else{
      setfilterData(masterData);
      setSearch(text)
    }
  }

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.searchBox}>
        <Navbar
          name={Strings.SEARCH}
          menu={() => navigation.toggleDrawer()}
          search={() => navigation.navigate("Search")}
          home={() => navigation.navigate("Home")}
          home={() => navigation.navigate("DrawerNavigator")}
          bookmark={() => navigation.navigate("Favorite")}
          leftIcon={<Entypo name="menu" size={34} color="#fff" />}
        />

        <View style={styles.searchContainer}>
          <Image
            source={require("../../assets/pictures/logo.png")}
            style={styles.logoStyle}
          />

          <Searchbar placeholder="Search" style={styles.searchBar} value={search}  onChangeText={(text)=>searchFilter(text)} />
          <View style={styles.searchlist}>
            <FlatList
              data={filteredData}
              keyExtractor={(item, index) => index.toString()}
              ItemSeparatorComponent={ItemSeparatorView}
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
                <Text>{item.id}</Text>
                <Text style={[styles.titleList, { fontFamily: "jammel" }]}>
                  {" "}
                  {item.title}
                </Text>
              </TouchableOpacity>
            </View>
                );
              }}
            />
          </View>
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
    width: wp("26%"),
    height: hp("10%"),
    margin: 12,
  },

  searchBar: {
    width: wp("90%"),
  },
  headerList: {
    marginTop: hp("6%"),
    width:wp('100%')
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
    alignItems: "center",
    flexDirection:'row',
    justifyContent:'space-between'
  },
  titleList: {
    fontSize: hp("2.6%"),
    textAlign: "left",
  },
});
