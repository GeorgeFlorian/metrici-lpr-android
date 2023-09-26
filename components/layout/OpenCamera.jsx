import BTN from "components/layout/BTN";
import * as ImagePicker from "expo-image-picker";
import { router } from "expo-router";

const OpenCamera = ({ setImagePicked }) => {
  const pickCamera = async () => {
    let result = await ImagePicker.launchCameraAsync({
      allowsEditing: true,
      quality: 1,
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      aspect: [1, 1],
    });

    if (!result.canceled) {
      const image = result.assets[0];
      setImagePicked(true);

      router.push({
        pathname: "/preview",
        params: {
          imageUri: image.uri,
          imageHeight: image.height,
          imageWidth: image.width,
        },
      });
    } else {
      // alert("You did not select any image.");
      setImagePicked(false);
    }
  };

  return <BTN label="Take a picture" icon={"camera"} onPress={pickCamera} />;
};

export default OpenCamera;
