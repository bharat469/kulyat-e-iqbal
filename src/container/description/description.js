import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Navbar from "../../component/header/Navbar";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { Ionicons } from "@expo/vector-icons";
import { ScrollView } from "react-native-gesture-handler";
import Strings from "../../helpers/localisedString";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";
import ReactNativeZoomableView from "@dudigital/react-native-zoomable-view/src/ReactNativeZoomableView";

const Description = ({ navigation, route }) => {
  const { description, title } = route.params;
  const logOutZoomState = (event, gestureState, zoomableViewEventObject) => {
    console.log("");
    console.log("");
    console.log("-------------");
    console.log("Event: ", event);
    console.log("GestureState: ", gestureState);
    console.log("ZoomableEventObject: ", zoomableViewEventObject);
    console.log("");
    console.log(
      `Zoomed from ${zoomableViewEventObject.lastZoomLevel} to  ${zoomableViewEventObject.zoomLevel}`
    );
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
          <ScrollView
            style={styles.scroll}
            showsHorizontalScrollIndicator={false}
          >
            <ReactNativeZoomableView
              maxZoom={1.5}
              minZoom={0.5}
              zoomStep={0.5}
              initialZoom={1}
              bindToBorders={true}
              onZoomAfter={logOutZoomState}
            >
              <Text style={[styles.descriptionText, { fontFamily: "jammel" }]}>
                {description}
              </Text>
              <View style={styles.space}></View>
            </ReactNativeZoomableView>
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
    // flex:1,
    alignItems: "flex-end",
    left: wp("40%"),
    top: hp("6%"),
    padding: 12,
    width: wp("60%"),
  },
  descriptionText: {
    padding: 12,
    fontSize: hp("2%"),
    textAlign: "right",
  },
  space: {
    height: hp("60%"),
  },
});
