import React from "react";
import PropTypes from "prop-types";
import { Camera, CameraType } from "expo-camera";
import { Button, StyleSheet, Text, View } from "react-native";

const CameraScreen = () => {
  const [permission, requestPermission] = Camera.useCameraPermissions();
  const cameraType = CameraType.back;

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

  return (
    <div>
      <Camera
        style={styles.backCamera}
        type={cameraType}
        ratio={"16:9"}
      ></Camera>
    </div>
  );
};

CameraScreen.propTypes = {};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  backCamera: {
    flex: 1,
  },
  buttonContainer: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "transparent",
    margin: 64,
  },
  button: {
    flex: 1,
    alignSelf: "flex-end",
    alignItems: "center",
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
  },
});

export default CameraScreen;
