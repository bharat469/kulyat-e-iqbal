import React, { useEffect, useState } from "react";
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
  const [zoom, setZoom] = useState(2);
  const [zoomNames, setZoomName] = useState("");
  const [font, setFontSize] = useState("2.2%");
  const { description, title } = route.params;

  const zoomName = (value) => {
    setZoomName(value);
    zoomFunction(zoom);
  };

  const zoomFunction = () => {
    switch (zoom) {
      case 1:
        setFontSize("1.2%");
        break;

      case 2:
        setFontSize("2.2%");
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
        setFontSize("2.2%");
        break;
    }
  };

  useEffect(() => {
    zoomFunction();
  });

  const zoomIncrement = () => {
    if (zoom >= 5) {
      setZoom(5);
      console.log("increment", zoom);
    } else {
      setZoom(zoom + 1);
      console.log("increment +++", zoom);
    }
  };
  const zoomDecrement = () => {
    if (zoom >= 2) {
      setZoom(zoom - 1);
      console.log("decrement --", zoom);
    } else {
      setZoom(1);
      console.log("decrement", zoom);
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
          search={() => console.log("searchBar")}
          home={() => navigation.navigate("DrawerNavigator")}
          leftIcon={<Ionicons name="arrow-back" size={34} color="#fff" />}
        />

        <View style={styles.descriptionStyle}>
          <View style={styles.zoomit}>
            <TouchableOpacity
              onPress={() => {
                zoomIncrement(zoom);
              }}
            >
              <FontAwesome name="search-plus" size={24} color="black" />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                zoomDecrement(zoom);
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
                selectable={true}
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
    width: wp("98%"),
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
