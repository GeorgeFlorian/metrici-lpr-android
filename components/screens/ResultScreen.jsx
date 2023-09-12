import LoadingSpinner from "components/layout/LoadingSpinner";
import PlateDataView from "components/layout/PlateDataView";
import { router, useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import * as FileSystem from "expo-file-system";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#000",
  },
  text: {
    color: "#FFF",
  },
});

function ResultScreen() {
  const params = useLocalSearchParams();
  const compressedImage = JSON.parse(params.compressedImage);
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);

  if (!compressedImage || !compressedImage.uri) router.back();

  useEffect(() => {
    const formData = new FormData();

    const img = {
      uri: compressedImage.uri,
      name: compressedImage.uri.split("/").pop(),
      type: "image/jpeg",
    };

    // Append the image to the FormData object with a specified field name
    formData.append("image", img);

    fetch("http://dev2.metrici.ro/ext/cloud/get_plate_number.php", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "multipart/form-data",
      },
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.error === true) throw new Error(JSON.stringify(data));
        setResponse(data.response.body);
      })
      .catch((error) => {
        console.log("Error:", error.message);
        setError(error.message);
      });
  }, []);

  const isUploading = !response && !error;
  // if (!isUploading) console.log(response);

  return (
    <View style={styles.container}>
      <LoadingSpinner isLoading={isUploading} />
      {response && <PlateDataView plateData={response["1"]} />}
      {error && (
        <Text style={styles.text}>Error: Please go back and try again</Text>
      )}
    </View>
  );
}

export default ResultScreen;
