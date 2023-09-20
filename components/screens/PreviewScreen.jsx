import BTN from "components/layout/BTN";
import ErrorModal from "components/layout/ErrorModal";
import { compressImage } from "components/lib/utils";
import ResultBox from "components/layout/ResultBox";
import React, { useState } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { router, useLocalSearchParams } from "expo-router";

const styles = StyleSheet.create({
  imageContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#000",
  },
  text: {
    color: "#f4511e",
  },
  selectedImage: {
    width: 300,
    height: 350,
    marginBottom: 40,
  },
});

const PreviewScreen = () => {
  const params = useLocalSearchParams();
  const selectedImage = params.selectedImage;
  const [compressedImage, setCompressedImage] = useState(null);
  const [error, setError] = useState(null);

  const onCompressImage = async () => {
    setCompressedImage(await compressImage(selectedImage));
  };
  const onChangeImage = () => router.replace("/");

  if (!selectedImage)
    return (
      <View style={styles.imageContainer}>
        <Text style={styles.text}>No image to preview</Text>
        <BTN label={"Go back"} onPress={() => router.replace("/")} />
      </View>
    );

  const reset = () => {
    setCompressedImage(null);
    setError(null);
  };

  return (
    <View style={styles.imageContainer}>
      <Image source={{ uri: selectedImage }} style={styles.selectedImage} />
      {compressedImage && !error ? (
        <ResultBox image={compressedImage} error={error} setError={setError} />
      ) : (
        <>
          <ErrorModal visible={error} reset={reset} />
          <BTN label={"Send Image"} onPress={onCompressImage} icon={"send"} />
          <BTN label={"Change Image"} onPress={onChangeImage} />
        </>
      )}
    </View>
  );
};

export default PreviewScreen;
