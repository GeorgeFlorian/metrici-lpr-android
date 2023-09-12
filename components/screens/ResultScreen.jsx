import { useLocalSearchParams } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  spinnerTextStyle: {
    color: "#FFF",
  },
});

function ResultScreen() {
  const params = useLocalSearchParams();
  // const imageUri = params.imageUri;

  if (selectedImage) {
    console.log("selectedImage", selectedImage);
    // Create a FormData object
    const formData = new FormData();

    // Append the image to the FormData object with a specified field name
    formData.append("image", selectedImage);

    // fetch("http://dev2.metrici.ro/ext/cloud/get_plate_number.php", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "multipart/form-data",
    //   },
    //   body: formData,
    // })
    //   .then((response) => response.json())
    //   .then((data) => {
    //     console.log("Success:", data);
    //   })
    //   .catch((error) => {
    //     console.error("Error:", error);
    //   });
  }
  return (
    <View>
      <Text>Ceva</Text>
    </View>
  );
}

export default ResultScreen;
