import React, { useEffect, useState } from "react";
import { Image, StyleSheet, Text, View, Platform, Linking } from "react-native";
import { primary } from "../../helpers/colors";
import { Entypo, FontAwesome, Feather } from "@expo/vector-icons";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { Switch } from "react-native-paper";
import { TouchableOpacity } from "react-native-gesture-handler";
import Strings from "../../helpers/localisedString";
import AsyncStorageLib from "@react-native-async-storage/async-storage";
import AppLoading from "expo-app-loading";
import { useFonts } from "expo-font";
const DrawerContent = (props) => {
  const [isEnabled, setIsEnabled] = useState(false);
  const [selection, setSelection] = useState(false);
  useEffect(() => {
    changeLanguage();
  }, []);

  const changeLanguage = async () => {
    let langType = null;
    langType = await AsyncStorageLib.getItem("lang");
    const toggle = langType == "urdu" ? false : true;
    setIsEnabled(toggle);
    const langTy = langType == "urdu" ? "urdu" : "english";
    console.log("language", langType);
    if (langType == null) {
      await AsyncStorageLib.setItem("lang", "urdu");
      Strings.setLanguage("urdu");
    } else {
      Strings.setLanguage(langTy);
    }
  };

  let [fontsLoaded] = useFonts({
    jammel: require("../../assets/fonts/faiz-lahori-nastaleeq-regular-1.ttf"),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={styles.drawerContent}>
        <Image
          source={require("../../assets/pictures/logo.png")}
          style={styles.drawerImage}
        />
        <View style={styles.drawerNavigation}>
          <View style={styles.navData}>
            <TouchableOpacity
              style={styles.navigation}
              onPress={() => props.navigation.navigate("Home")}
            >
              <FontAwesome
                name="home"
                size={24}
                color="#fff"
                style={styles.icon}
              />
              <Text style={styles.lanText}>{Strings.HOME}</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.navigation}>
              <FontAwesome
                name="users"
                size={24}
                color="#fff"
                style={styles.icon}
              />
              <Text style={styles.lanText}>{Strings.ABOUT_US}</Text>
            </TouchableOpacity>

            <View style={styles.socialIcon}>
              <TouchableOpacity
                onPress={() =>
                  Linking.openURL("Www.facebook.com/darulikhlasorg")
                }
              >
                <Feather
                  name="facebook"
                  size={24}
                  color="#fff"
                  style={[styles.iconStyle, { backgroundColor: "#4267B2" }]}
                />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() =>
                  Linking.openURL("Www.instagram.com/darulikhlasofficial")
                }
              >
                <Feather
                  name="instagram"
                  size={24}
                  color="#fff"
                  style={[styles.iconStyle, { backgroundColor: "#C13584" }]}
                />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => Linking.openURL("Wa.me/923134456644")}
              >
                <FontAwesome
                  name="whatsapp"
                  size={24}
                  color="#fff"
                  style={[styles.iconStyle, { backgroundColor: "#25D366" }]}
                />
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() =>
                  Linking.openURL(
                    "https://youtube.com/channel/UCGk9HlnhNBKs-3VXWnst_Vg"
                  )
                }
              >
                <Feather
                  name="youtube"
                  size={24}
                  color="#fff"
                  style={[styles.iconStyle, { backgroundColor: "#FF0000" }]}
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    );
  }
};
export default DrawerContent;

const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
    backgroundColor: primary,
  },
  drawerImage: {
    width: Platform.OS === "ios" ? wp("46%") : wp("40%"),
    height: hp("20%"),
    top: hp("7%"),
    left: Platform.OS === "ios" ? wp("10") : wp("10%"),
  },
  drawerNavigation: {
    top: hp("7%"),
    left: wp("5%"),
  },

  languageContainer: {
    flexDirection: "row",
    alignItems: Platform.OS === "ios" ? "center" : "center",
    padding: Platform.OS === "ios" ? null : wp("0"),
    margin: Platform.OS === "ios" ? null : wp("0"),
  },
  lanText: {
    color: "#fff",
    fontSize: Platform.OS === "ios" ? hp("3%") : hp("2.5%"),
    fontFamily: "jammel",
    // padding: 12,
    bottom: Platform.OS === "ios" ? null : hp("1.2%"),
    textAlign: "right",
  },
  icon: {
    padding: wp("4%"),
  },
  navigation: {
    flexDirection: "row",
    alignItems: "center",
  },
  socialIcon: {
    flexDirection: "row",
  },

  iconStyle: {
    margin: 8,
    borderRadius: 13,
    padding: 4,
  },

  textColor: {
    color: "#fff",
    fontSize: hp("2%"),
    padding: 12,
    fontFamily: "jammel",
    fontWeight: "bold",
    textAlign: "right",
  },
  navData: {
    top: hp("3%"),
  },
  textEntry: {
    top: hp("7%"),

    alignItems: "center",
  },
});
