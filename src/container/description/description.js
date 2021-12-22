import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Navbar from "../../component/header/Navbar";
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
  } from "react-native-responsive-screen";
  import { Ionicons} from '@expo/vector-icons'; 
import { ScrollView } from "react-native-gesture-handler";

const Description = ({navigation,route}) => {
    const{description} = route.params
  return (
    <View style={styles.description}>
      <Navbar
        name="Book"
        menu={() => navigation.goBack()}
        search={() => navigation.navigate("Search")}
        home={() => navigation.navigate("DrawerNavigator")}
        home={() => navigation.navigate("DrawerNavigator")}
        bookmark={() => navigation.navigate("Favorite")}
        leftIcon={<Ionicons name="arrow-back" size={34} color="#fff" />}
      />
      <View style={styles.descriptionStyle}>
          <ScrollView style={styles.scroll}>
<Text style={styles.descriptionText}>{description}</Text>
          
          </ScrollView>
      </View>

    </View>
  );
};

export default Description;

const styles = StyleSheet.create({
    descriptionStyle:{
        top:hp('6%'),
        padding:12
    },
    descriptionText:{
        padding:12,
        fontSize:hp('2%')
    }
});
