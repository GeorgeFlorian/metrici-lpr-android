import BTN from "components/layout/BTN";
import * as ImagePicker from "expo-image-picker";
import { router } from "expo-router";

const OpenCamera = () => {
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
