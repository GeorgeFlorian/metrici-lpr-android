import { manipulateAsync, SaveFormat } from "expo-image-manipulator";

export const compressImage = async ({ uri, height, width }) => {
  const manipResult = await manipulateAsync(
    uri,
    [
      {
        resize: {
          height: Math.floor(height / 4) * 4,
          width: Math.floor(width / 4) * 4,
        },
      },
    ],
    {
      compress: 0.5,
      format: SaveFormat.JPEG,
    },
  );

  return JSON.stringify(manipResult);
};
