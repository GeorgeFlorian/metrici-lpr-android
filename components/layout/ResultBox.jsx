import LoadingSpinner from "components/layout/LoadingSpinner";
import PlateDataView from "components/layout/PlateDataView";
import { TIMEOUT, UPLOAD_IMG_URL } from "components/lib/constants";
import { router } from "expo-router";
import { useEffect, useState } from "react";

function ResultBox({ image, error, setError }) {
  const compressedImage = JSON.parse(image);
  const [response, setResponse] = useState(null);

  const controller = new AbortController();
  const signal = controller.signal;

  setTimeout(() => controller.abort(), TIMEOUT);

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

    fetch(UPLOAD_IMG_URL, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "multipart/form-data",
      },
      body: formData,
      signal: signal,
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.error === true) throw new Error(JSON.stringify(data));
        setResponse(data.response.body);
        console.log("Success:", data.response);
      })
      .catch((error) => {
        console.log("Error:", error.message);
        setError(error.message);
      });
  }, []);

  const isUploading = !response && !error;

  return (
    <>
      <LoadingSpinner visible={isUploading} />
      {response && <PlateDataView plateData={response["1"]} />}
    </>
  );
}

export default ResultBox;
