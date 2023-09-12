import BTN from "components/layout/BTN";
import * as ImagePicker from "expo-image-picker";
import { router } from "expo-router";
import { Button, StyleSheet, View } from "react-native";

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
});

const OpenCamera = () => {
  const [cameraPermission, requestCameraPermission] =
    ImagePicker.useCameraPermissions();
  const [galleryPermission, requestGalleryPermission] =
    ImagePicker.useMediaLibraryPermissions();

  if (!galleryPermission || !cameraPermission) {
    // Camera permissions are still loading
    return <View />;
  }

  // console.log("galleryPermission", galleryPermission);
  // console.log("cameraPermission", cameraPermission);

  if (!galleryPermission.granted || !cameraPermission.granted) {
    // Camera permissions are not granted yet
    return (
      <View style={styles.container}>
        <Text style={{ textAlign: "center" }}>
          We need your permission to show the camera
        </Text>
        <Button
          onPress={requestCameraPermission}
          title="Grant Camera Permission"
        />
        <Button
          onPress={requestGalleryPermission}
          title="Grant Image Gallery Permission"
        />
      </View>
    );
  }

  const pickCamera = async () => {
    let result = await ImagePicker.launchCameraAsync({
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      const image = result.assets[0];
      router.push({
        pathname: "/preview",
        params: { selectedImage: image.uri },
      });
    } else {
      // alert("You did not select any image.");
    }
  };

  return <BTN label="Take a picture" icon={"camera"} onPress={pickCamera} />;
};

export default OpenCamera;
