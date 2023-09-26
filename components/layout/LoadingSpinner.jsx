import { StyleSheet } from "react-native";
import { Grid } from "react-native-animated-spinkit";
import Spinner from "react-native-loading-spinner-overlay";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  spinnerTextStyle: {
    color: "#FFF",
  },
});

function LoadingSpinner({ visible = false }) {
  return (
    <Spinner
      visible={visible}
      textContent={"Loading..."}
      textStyle={styles.spinnerTextStyle}
      customIndicator={<Grid size={60} color="#FFF" />}
      overlayColor={"rgba(0, 0, 0, 0.7)"}
    />
  );
}

export default LoadingSpinner;
