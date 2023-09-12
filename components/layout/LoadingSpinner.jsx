import { View, StyleSheet } from "react-native";
import { Grid } from "react-native-animated-spinkit";
import Spinner from "react-native-loading-spinner-overlay";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    // backgroundColor: "#F5FCFF",
  },
  spinnerTextStyle: {
    color: "#FFF",
  },
});

function LoadingSpinner({ isLoading = false }) {
  return (
    <Spinner
      visible={isLoading}
      textContent={"Loading..."}
      textStyle={styles.spinnerTextStyle}
      customIndicator={<Grid size={70} color="#FFF" />}
      overlayColor={"rgba(0, 0, 0, 0.7)"}
    />
  );
}

export default LoadingSpinner;
