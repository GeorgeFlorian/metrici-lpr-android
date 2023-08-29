import { StyleSheet, View } from "react-native";
import { StatusBar } from "expo-status-bar";

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
      <StatusBar
        style="auto"
        animated
        backgroundColor={"#fff"}
        translucent={true}
      />
      {children}
    </View>
  );
};

export default MainLayout;
