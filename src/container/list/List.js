import React, { useEffect, useState } from "react";
import { FlatList, StyleSheet, Text, View, Button } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import Navbar from "../../component/header/Navbar";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { useFonts } from "expo-font";
const tahayyat = require("../../data/tahayyat.json");
import { Entypo, Ionicons, MaterialIcons } from "@expo/vector-icons";
import AppLoading from "expo-app-loading";
const Harees = require("../../data/harees_un_alain.json");
const Sana = require("../../data/sana_ka_mosam.json");
const Mahasin = require("../../data/Mahasin.json");
import { primary } from "../../helpers/colors";
import AsyncStorageLib from "@react-native-async-storage/async-storage";
import { asin, Value } from "react-native-reanimated";


const List = ({ navigation, route }) => {
  const [data, setData] = useState([]);
  const[fav,setFav]=useState([])

const { id, name } = route.params;

  let [fontsLoaded] = useFonts({
    jammel: require("../../assets/fonts/faiz-lahori-nastaleeq-regular-1.ttf"),
  });

 
 if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    const showList = () => {
      if (id === 1) {
        return (
          <FlatList
            data={Harees}
            keyExtractor={(item) => item.id}
            renderItem={({ item,index }) => {
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
                      {item.title}
                    </Text>
                  </TouchableOpacity>
                </View>
              );
            }}
          />
        );
      } else if (id == 2) {
        return (
          <FlatList
            data={Mahasin}
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
                      {item.title}
                    </Text>
                  </TouchableOpacity>
                </View>
              );
            }}
          />
        );
      } else if (id == 3) {
        return (
          <FlatList
            data={Sana}
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
                      {item.title}
                    </Text>
                  </TouchableOpacity>
                </View>
              );
            }}
          />
        );
      } else if (id == 4) {
        return (
          <FlatList
            data={tahayyat}
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
                      {item.title}
                    </Text>
                  </TouchableOpacity>
                </View>
              );
            }}
          />
        );
      }
    };
    return (
      <View style={styles.ListStyle}>
        <Navbar
          name={name}
          menu={() => navigation.goBack()}
          search={() => navigation.navigate("Search")}
          home={() => navigation.navigate("DrawerNavigator")}
          home={() => navigation.navigate("DrawerNavigator")}
          bookmark={() =>
            navigation.navigate("Favorite", {
              data: data,
            })
          }
          leftIcon={<Ionicons name="arrow-back" size={34} color="#fff" />}
        />
        <View style={styles.flatlist}>{showList(id)}</View>
      </View>
    );
  }
};

export default List;

const styles = StyleSheet.create({
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
    alignItems: 'flex-end',
    flexDirection: "row",
    
  },
  titleList: {
    fontSize: hp("2.6%"),
    textAlign: "right",
    left:wp('65%')
  },

  
});
