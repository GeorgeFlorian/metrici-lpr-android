import React, { useState } from "react";
import { Image, StyleSheet, View } from "react-native";
import { useLocalSearchParams } from "expo-router";

const styles = StyleSheet.create({
  imageContainer: {
    flex: 1,
    backgroundColor: "transparent",
    alignItems: "center",
  },
  text: {
    color: "#fff",
  },
  capturedImage: {
    width: 300,
    height: 300,
    marginTop: 20,
  },
});

const PreviewScreen = () => {
  const params = useLocalSearchParams();
  const imageUri = params.imageUri;

  // expo-image-manipulator
  // https://docs.expo.dev/versions/latest/sdk/imagemanipulator/#saveformat

  console.log("Preview Image URI:", imageUri);

  return (
    <View style={styles.imageContainer}>
      {imageUri && (
        <Image source={{ uri: imageUri }} style={styles.capturedImage} />
      )}
    </View>
  );
};

export default PreviewScreen;
