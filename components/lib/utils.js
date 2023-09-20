import { manipulateAsync, SaveFormat } from "expo-image-manipulator";

export const compressImage = async (selectedImage) => {
  const manipResult = await manipulateAsync(selectedImage, [], {
    compress: 0.5,
    format: SaveFormat.JPEG,
  });

  return JSON.stringify(manipResult);
};
