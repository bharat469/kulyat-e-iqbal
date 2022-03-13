import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import Navbar from "../../component/header/Navbar";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { Ionicons } from "@expo/vector-icons";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import Strings from "../../helpers/localisedString";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";

import { FontAwesome } from "@expo/vector-icons";

const Description = ({ navigation, route }) => {
  const [zoom, setZoom] = useState(1);
  const [zoomOut, setZoomOut] = useState(5);
  const [font, setFontSize] = useState("2.2%");
  const { description, title } = route.params;
  const zoomFunction = (value) => {
    {
      if (value > 5) {
        setZoom(1);
      } else {
        setZoom(zoom + 1);
      }
    }
    switch (value) {
      case 1:
        return setFontSize("1.2%");
        console.log("1");
        break;

      case 2:
        return setFontSize("2.2%");
        console.log("2");
        break;
      case 3:
        return setFontSize("3.2%");
        console.log("3");
        break;

      case 4:
        return setFontSize("4.2%");
        console.log("4");
        break;

      case 5:
        return setFontSize("5.2%");
        console.log("5");
        break;

      default:
        return setFontSize("2.2%");
        console.log("6");
    }
  };
  const zoomOutFunction = (value) => {
    {
      if (value > 5) {
        setZoom(1);
        console.log("zoom", zoomOut);
      } else {
        setZoom(zoom - 1);
        console.log("zoom", zoomOut);
      }
    }
    switch (value) {
      case 1:
        return setFontSize("1.2%");
        console.log("1");
        break;

      case 2:
        return setFontSize("2.2%");
        console.log("2");
        break;
      case 3:
        return setFontSize("3.2%");
        console.log("3");
        break;

      case 4:
        return setFontSize("4.2%");
        console.log("4");
        break;

      case 5:
        return setFontSize("5.2%");
        console.log("5");
        break;

      default:
        return setFontSize("2.2%");
        console.log("6");
    }
  };

  let [fontsLoaded] = useFonts({
    jammel: require("../../assets/fonts/faiz-lahori-nastaleeq-regular-1.ttf"),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={styles.description}>
        <Navbar
          name={title}
          menu={() => navigation.goBack()}
          search={() => navigation.navigate("Search")}
          home={() => navigation.navigate("DrawerNavigator")}
          home={() => navigation.navigate("DrawerNavigator")}
          bookmark={() => navigation.navigate("Favorite")}
          leftIcon={<Ionicons name="arrow-back" size={34} color="#fff" />}
        />

        <View style={styles.descriptionStyle}>
          <View style={styles.zoomit}>
            <TouchableOpacity
              onPress={() => {
                zoomFunction(zoom);
              }}
            >
              <FontAwesome name="search-plus" size={24} color="black" />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                zoomOutFunction(zoom);
              }}
            >
              <FontAwesome name="search-minus" size={24} color="black" />
            </TouchableOpacity>
          </View>

          <ScrollView
            style={styles.scroll}
            showsVerticalScrollIndicator={false}
          >
            <View>
           
              <Text
                style={[
                  styles.descriptionText,
                  { fontFamily: "jammel", fontSize: hp(font) },
                ]}
              >
                {description}
              </Text>
              <View style={styles.space}></View>
            </View>
          </ScrollView>
        </View>
      </View>
    );
  }
};

export default Description;

const styles = StyleSheet.create({
  description: {
    flex: 1,
  },
  descriptionStyle: {
    alignItems: "flex-end",
    top: hp("6%"),
    padding: 12,
    width: wp("90%"),
  },
  descriptionText: {
    textAlign: "right",
  },
  space: {
    height: hp("60%"),
  },
  zoomit: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: wp("50%"),
    right: wp("20%"),
  },
  scroll: {
    top: hp("2%"),
    width: wp("90%"),
  },
});
