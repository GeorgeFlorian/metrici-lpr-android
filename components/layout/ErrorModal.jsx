import React from "react";
import { Modal, Text, TouchableOpacity, View } from "react-native";

const styles = {
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)", // semi-transparent background
  },
  modalContent: {
    width: "80%",
    padding: 20,
    backgroundColor: "white",
    borderRadius: 10,
    alignItems: "center",
  },
  modalText: {
    fontSize: 18,
    marginBottom: 15,
    textAlign: "center",
  },
  modalCloseText: {
    fontSize: 16,
    color: "blue",
  },
};

const ErrorModal = ({ visible, reset }) => {
  return (
    <Modal
      transparent={true}
      animationType="slide"
      visible={!!visible}
      onRequestClose={() => reset()} // for Android back button
    >
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <Text style={styles.modalText}>Error: Please try again</Text>
          <TouchableOpacity onPress={() => reset()}>
            <Text style={styles.modalCloseText}>Close</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default ErrorModal;
