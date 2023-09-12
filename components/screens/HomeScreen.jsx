import OpenCamera from "components/layout/OpenCamera";
import OpenGallery from "components/layout/OpenGallery";
import React from "react";
import { Image, StyleSheet, View } from "react-native";
const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#000",
  },
  img: {
    width: "80%",
    marginBottom: 20,
    resizeMode: "contain",
  },
});

const HomeScreen = () => {
  const logo = require("assets/img/logo.png");

  return (
    <>
      <Image source={logo} style={styles.img} />
      <View style={styles.container}>
        {/*Open the image gallery*/}
        <OpenGallery />
        {/*Open the camera */}
        <OpenCamera />
      </View>
    </>
  );
};

export default HomeScreen;
