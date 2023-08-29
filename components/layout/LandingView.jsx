import React from "react";
import { Image, StyleSheet, View } from "react-native";
import BTN from "./BTN";

const styles = StyleSheet.create({
  btn_container: {
    // flex: 0,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#000",
  },
  text: {
    color: "#fff",
  },
  img: {
    width: "80%",
    // height: 200,
    marginBottom: 20,
    resizeMode: "contain",
  },
});

const LandingView = () => {
  const logo = require("assets/img/logo.png");

  return (
    <>
      <Image source={logo} style={styles.img} />
      <View style={styles.btn_container}>
        <BTN label="Choose a picture" icon={"picture-o"} onPress={() => {}} />
        <BTN label="Take a picture" icon={"camera"} onPress={() => {}} />
      </View>
    </>
  );
};

export default LandingView;
