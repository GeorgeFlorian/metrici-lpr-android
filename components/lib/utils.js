import { manipulateAsync, SaveFormat } from "expo-image-manipulator";
import { router } from "expo-router";

export const uploadImage = async (selectedImage) => {
  const manipResult = await manipulateAsync(selectedImage, [], {
    compress: 0.5,
    format: SaveFormat.JPEG,
  });

  if (manipResult) {
    router.push({
      pathname: "/result",
      params: { compressedImage: JSON.stringify(manipResult) },
    });
  }
};
