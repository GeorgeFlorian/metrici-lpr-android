import LoadingSpinner from "components/layout/LoadingSpinner";
import OpenCamera from "components/layout/OpenCamera";
import OpenGallery from "components/layout/OpenGallery";
import {
  CONTAINER_STYLE,
  GRANT_PERMISSION_TEXT,
} from "components/lib/constants";
import * as ImagePicker from "expo-image-picker";
import React, { useEffect, useState } from "react";
import { Button, Image, StyleSheet, Text, View } from "react-native";
import { useNavigation, useRouter } from "expo-router";

const styles = StyleSheet.create({
  container: CONTAINER_STYLE,
  img: {
    width: "80%",
    marginBottom: 20,
    resizeMode: "contain",
  },
  permissionContainer: {
    flex: 1,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    gap: 16,
  },
  permissionText: {
    textAlign: "center",
    marginBottom: 16,
    color: "#FFF",
    fontSize: 16,
  },
  permissionButton: {
    marginVertical: 8,
  },
});

const HomeScreen = () => {
  const logo = require("assets/img/logo.png");

  const [imagePicked, setImagePicked] = useState(false);
  const navigation = useNavigation();

  useEffect(() => {
    navigation.addListener("focus", () => {
      setImagePicked(false);
    });
  }, []);

  const [cameraPermission, requestCameraPermission] =
    ImagePicker.useCameraPermissions();
  const [galleryPermission, requestGalleryPermission] =
    ImagePicker.useMediaLibraryPermissions();

  const requestAllPermissions = async () => {
    // First request camera permission
    await requestCameraPermission();
    // Then request gallery permission
    await requestGalleryPermission();
  };

  if (!galleryPermission || !cameraPermission) {
    // Camera permissions are still loading
    return <View />;
  }

  if (!galleryPermission.granted || !cameraPermission.granted) {
    // Camera and Image Gallery permissions are not granted yet
    return (
      <View style={styles.permissionContainer}>
        <Image source={logo} style={styles.img} />
        <Text style={styles.permissionText}>{GRANT_PERMISSION_TEXT}</Text>
        <Button
          onPress={requestAllPermissions}
          title="Grant Permissions"
          style={styles.permissionButton}
        />
      </View>
    );
  }

  if (imagePicked) {
    return (
      <View style={styles.container}>
        <LoadingSpinner
          visible={imagePicked}
          overlayColor={"rgba(34, 34, 34,  1)"}
        />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Image source={logo} style={styles.img} />
      {/*Open the image gallery*/}
      <OpenGallery setImagePicked={setImagePicked} />
      {/*Open the camera */}
      <OpenCamera setImagePicked={setImagePicked} />
    </View>
  );
};

export default HomeScreen;
