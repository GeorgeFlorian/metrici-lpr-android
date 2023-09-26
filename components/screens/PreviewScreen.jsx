import BTN from "components/layout/BTN";
import ErrorModal from "components/layout/ErrorModal";
import { CONTAINER_STYLE } from "components/lib/constants";
import { compressImage } from "components/lib/utils";
import ResultBox from "components/layout/ResultBox";
import React, { useState } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { router, useLocalSearchParams } from "expo-router";

const styles = StyleSheet.create({
  imageContainer: CONTAINER_STYLE,
  text: {
    color: "#f4511e",
  },
  selectedImage: {
    width: "90%",
    height: "50%",
    marginBottom: 40,
    resizeMode: "contain",
  },
});

const PreviewScreen = () => {
  const params = useLocalSearchParams();
  const [compressedImage, setCompressedImage] = useState(null);
  const [error, setError] = useState(null);
  const selectedImage = {
    uri: params.imageUri,
    width: params.imageWidth,
    height: params.imageHeight,
  };

  const onCompressImage = async () => {
    setCompressedImage(await compressImage(selectedImage));
  };
  const onChangeImage = () =>
    router.canGoBack() ? router.back() : router.replace("/");

  if (!selectedImage.uri)
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
      <Image source={{ uri: selectedImage.uri }} style={styles.selectedImage} />
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
