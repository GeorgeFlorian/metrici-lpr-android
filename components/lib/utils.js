import { manipulateAsync, SaveFormat } from "expo-image-manipulator";

export const uploadImage = async (imageUri, setIsUploading) => {
  setIsUploading(true);
  const manipResult = await manipulateAsync(imageUri, [], {
    compress: 0.5,
    format: SaveFormat.JPEG,
  });

  setTimeout(() => {
    setIsUploading(false);
  }, 2000);
  if (manipResult) {
    // setIsUploading(false);
    console.log("Image uploaded successfully");
    const result = JSON.stringify(manipResult);
    // router.push("/result", { result: result });
  }
};
