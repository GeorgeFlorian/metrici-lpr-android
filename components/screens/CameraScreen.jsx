import React, { useState } from "react";
import PropTypes from "prop-types";
import { Camera, CameraType } from "expo-camera";
import { Image } from "expo-image";
import { Button, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  backCamera: {
    flex: 1,
  },
  cameraContainer: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  captureButton: {
    backgroundColor: "#e00024",
    padding: 20,
    paddingHorizontal: 20,
    alignSelf: "center",
    marginBottom: "20%",
    borderRadius: 50, // Set the border radius to create a round button
  },
  captureText: {
    color: "white",
    fontSize: 16,
  },
  btnContainer: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "transparent",
    margin: 64,
  },
  imageContainer: {
    flex: 1,
    backgroundColor: "transparent",
    alignItems: "center",
  },
  capturedImage: {
    width: 300,
    height: 300,
    marginTop: 20,
  },
});

const CameraScreen = () => {
  const [permission, requestPermission] = Camera.useCameraPermissions();
  const cameraType = CameraType.back;
  const [camera, setCamera] = useState(null);
  const [photoUri, setPhotoUri] = useState("");
  const blurhash =
    "|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[";

  const takePicture = async () => {
    if (camera) {
      const photo = await camera.takePictureAsync();
      setPhotoUri(photo.uri);
    }
  };

  if (!permission) {
    // Camera permissions are still loading
    return <View />;
  }

  if (!permission.granted) {
    // Camera permissions are not granted yet
    return (
      <View style={styles.container}>
        <Text style={{ textAlign: "center" }}>
          We need your permission to show the camera
        </Text>
        <Button onPress={requestPermission} title="grant permission" />
      </View>
    );
  }

  if (photoUri) {
    // Navigate to the preview screen
    return (
      <View style={styles.imageContainer}>
        <Image source={{ uri: photoUri }} style={styles.capturedImage} />
      </View>
    );
  }

  return (
    <>
      <Camera
        style={styles.backCamera}
        type={cameraType}
        ratio={"16:9"}
        ref={(ref) => setCamera(ref)}
      >
        <View style={styles.cameraContainer}>
          <TouchableOpacity style={styles.captureButton} onPress={takePicture}>
            <Text style={styles.captureText}>Take Picture</Text>
          </TouchableOpacity>
        </View>
      </Camera>
    </>
  );
};

CameraScreen.propTypes = {};

export default CameraScreen;
