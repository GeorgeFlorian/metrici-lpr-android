import BTN from "components/layout/BTN";
import LoadingSpinner from "components/layout/LoadingSpinner";
import * as ImagePicker from "expo-image-picker";
import { router } from "expo-router";
import { useState } from "react";
import PropTypes from "prop-types";

const PickImage = ({ type }) => {
  const [loading, setLoading] = useState(false);

  const openMethod =
    type === "camera" ? "launchCameraAsync" : "launchImageLibraryAsync";
  const icon = type === "camera" ? "camera" : "picture-o";
  const label = type === "camera" ? "Take a picture" : "Choose a photo";

  const pickImage = async () => {
    setLoading(true);

    let result = await ImagePicker[openMethod]({
      allowsEditing: true,
      quality: 1,
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      aspect: [1, 1],
    });

    setLoading(false);

    if (!result.canceled) {
      const image = result.assets[0];

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
    }
  };

  return (
    <>
      <BTN label={label} icon={icon} onPress={pickImage} />
      <LoadingSpinner visible={loading} overlayColor={"rgba(34, 34, 34,  1)"} />
    </>
  );
};

PickImage.propTypes = {
  type: PropTypes.string.isRequired,
};

export default PickImage;
