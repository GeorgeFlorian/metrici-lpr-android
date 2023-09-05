import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#000",
  },
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
