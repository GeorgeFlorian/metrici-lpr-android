import { View, Text, StyleSheet } from "react-native";

const PlateDataView = ({ plateData }) => {
  return (
    <View style={styles.container}>
      <View style={styles.infoContainer}>
        <Text style={styles.label}>Country Name:</Text>
        <Text style={styles.value}>{plateData.country_name}</Text>
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.label}>Country Symbol:</Text>
        <Text style={styles.value}>{plateData.country_symbol}</Text>
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.label}>Plate Number:</Text>
        <Text style={styles.value}>{plateData.plate_number}</Text>
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.label}>Probability:</Text>
        <Text style={styles.value}>{plateData.probability}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 10,
    elevation: 2,
  },
  infoContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  label: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
  },
  value: {
    fontSize: 16,
    color: "#666",
  },
});

export default PlateDataView;
