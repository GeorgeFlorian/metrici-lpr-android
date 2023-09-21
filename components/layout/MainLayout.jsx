import { CONTAINER_STYLE } from "components/lib/constants";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";

const styles = StyleSheet.create({
  container: CONTAINER_STYLE,
  text: {
    color: "#fff",
  },
});

const MainLayout = ({ children }) => {
  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      {children}
    </View>
  );
};

export default MainLayout;
