import BTN from "components/layout/BTN";
import LoadingSpinner from "components/layout/LoadingSpinner";
import { uploadImage } from "components/lib/utils";
import React from "react";
import { Image, StyleSheet, View } from "react-native";
import { router, useLocalSearchParams } from "expo-router";

const styles = StyleSheet.create({
  imageContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#000",
  },
  text: {
    color: "#fff",
  },
  capturedImage: {
    width: 300,
    height: 300,
    marginBottom: 40,
  },
});

const PreviewScreen = () => {
  const params = useLocalSearchParams();
  const selectedImage = params.selectedImage;

  const onUploadImage = async () => await uploadImage(selectedImage);
  const onChangeImage = () => router.replace("/");

  if (!selectedImage)
    return (
      <View style={styles.imageContainer}>
        <Text style={styles.text}>No image to preview</Text>
        <BTN label={"Go back"} onPress={() => router.replace("/index")} />
      </View>
    );

  return (
    <View style={styles.imageContainer}>
      <Image source={{ uri: selectedImage }} style={styles.capturedImage} />
      <BTN label={"Send Image"} onPress={onUploadImage} icon={"send"} />
      <BTN label={"Change Image"} onPress={onChangeImage} />
    </View>
  );
};

export default PreviewScreen;
