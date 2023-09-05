import React, { useState } from "react";
import { Image, StyleSheet, View } from "react-native";
import BTN from "components/layout/BTN";
import * as ImagePicker from "expo-image-picker";
import { router } from "expo-router";

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

const HomeScreen = () => {
  const logo = require("assets/img/logo.png");
  const [selectedImage, setSelectedImage] = useState(null);

  const pickImageAsync = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      setSelectedImage(result.assets[0].uri);
    } else {
      alert("You did not select any image.");
    }
  };

  if (selectedImage) {
    console.log("selectedImage", selectedImage);

    // fetch("http://dev2.metrici.ro/ext/cloud/get_plate_number.php", {
    //   method: "POST",
    //   // headers: {
    //   //   "Content-Type": "application/json",
    //   // },
    //   body: JSON.stringify({ image: selectedImage }),
    // })
    //   .then((response) => response.json())
    //   .then((data) => {
    //     console.log("Success:", data);
    //   })
    //   .catch((error) => {
    //     console.error("Error:", error);
    //   });
  }

  return (
    <>
      <Image source={logo} style={styles.img} />
      <View style={styles.btn_container}>
        {/*Open the image library*/}
        <BTN
          label="Choose a photo"
          icon={"picture-o"}
          onPress={pickImageAsync}
        />
        {/*Open the camera*/}
        <BTN
          label="Take a picture"
          icon={"camera"}
          onPress={() => {
            router.push("/camera");
          }}
        />
      </View>
    </>
  );
};

export default HomeScreen;
