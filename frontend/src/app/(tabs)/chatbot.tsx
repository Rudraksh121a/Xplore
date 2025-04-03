import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  Keyboard,
  TouchableWithoutFeedback,
  Modal,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function Chatbot() {
  const [messages, setMessages] = useState([
    {
      id: "1",
      text: "Hello! 👋 How can I assist you with your trip?",
      sender: "bot",
    },
  ]);
  const [input, setInput] = useState("");
  const [modalVisible, setModalVisible] = useState(false);

  const trips = [
    { id: "1", title: "My Goa Adventure 🌊", date: "April 10 - April 15" },
    { id: "2", title: "Himalayan Trekking ⛰️", date: "May 5 - May 12" },
  ];

  const sendMessage = (message: string) => {
    if (message.trim()) {
      setMessages((prevMessages) => [
        ...prevMessages,
        { id: Date.now().toString(), text: message, sender: "user" },
      ]);
      setInput("");
      setTimeout(() => {
        setMessages((prevMessages) => [
          ...prevMessages,
          {
            id: Date.now().toString(),
            text: "I'm here to help! 😊",
            sender: "bot",
          },
        ]);
      }, 1000);
    }
  };

  const insertTripDetails = (trip: any) => {
    sendMessage(`Trip: ${trip.title}\nDate: ${trip.date}`);
    setModalVisible(false);
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.flexContainer}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.container}>
          <Text style={styles.header}>Xplora AI Chat</Text>

          <FlatList
            data={messages}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <View
                style={[
                  styles.messageContainer,
                  item.sender === "user"
                    ? styles.userMessage
                    : styles.botMessage,
                ]}
              >
                <Text style={styles.messageText}>{item.text}</Text>
              </View>
            )}
            contentContainerStyle={styles.chatArea}
          />

          <View style={styles.inputWrapper}>
            <TouchableOpacity
              onPress={() => setModalVisible(true)}
              style={styles.optionButton}
            >
              <Ionicons name="add" size={24} color="#007AFF" />
            </TouchableOpacity>
            <TextInput
              style={styles.input}
              placeholder="Ask anything about your trip..."
              placeholderTextColor="#888"
              value={input}
              onChangeText={setInput}
            />
            <TouchableOpacity
              onPress={() => sendMessage(input)}
              style={styles.sendButton}
            >
              <Ionicons name="send" size={24} color="#F4F8FB" />
            </TouchableOpacity>
          </View>

          {/* Modal for trip selection */}
          <Modal visible={modalVisible} animationType="slide" transparent>
            <View style={styles.modalContainer}>
              <View style={styles.modalContent}>
                <Text style={styles.modalTitle}>Select a Trip</Text>
                <FlatList
                  data={trips}
                  keyExtractor={(item) => item.id}
                  renderItem={({ item }) => (
                    <TouchableOpacity
                      onPress={() => insertTripDetails(item)}
                      style={styles.tripItem}
                    >
                      <Text style={styles.tripTitle}>{item.title}</Text>
                      <Text style={styles.tripDate}>{item.date}</Text>
                    </TouchableOpacity>
                  )}
                />
                <TouchableOpacity
                  onPress={() => setModalVisible(false)}
                  style={styles.closeButton}
                >
                  <Text style={styles.closeButtonText}>Close</Text>
                </TouchableOpacity>
              </View>
            </View>
          </Modal>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  flexContainer: { flex: 1 },
  container: { flex: 1, backgroundColor: "#F4F8FB", padding: 20 },
  header: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#007AFF",
    textAlign: "center",
    marginBottom: 15,
  },
  chatArea: { flexGrow: 1, paddingBottom: 10 },
  messageContainer: {
    maxWidth: "75%",
    padding: 12,
    borderRadius: 10,
    marginBottom: 10,
  },
  botMessage: { backgroundColor: "#007AFF", alignSelf: "flex-start" },
  userMessage: { backgroundColor: "#FF6F61", alignSelf: "flex-end" },
  messageText: { color: "#FFF", fontSize: 16 },
  inputWrapper: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFF",
    borderRadius: 25,
    paddingHorizontal: 15,
    elevation: 3,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    paddingVertical: 8,
    marginBottom: Platform.OS === "ios" ? 10 : 5,
  },
  input: { flex: 1, fontSize: 16, color: "#2C3E50", paddingVertical: 10 },
  sendButton: {
    backgroundColor: "#007AFF",
    borderRadius: 20,
    padding: 10,
    marginLeft: 10,
  },
  optionButton: { padding: 10, marginRight: 10 },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  modalContent: {
    backgroundColor: "#FFF",
    padding: 20,
    borderRadius: 10,
    width: "80%",
    alignItems: "center",
  },
  modalTitle: { fontSize: 18, fontWeight: "bold", marginBottom: 10 },
  tripItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
    width: "100%",
  },
  tripTitle: { fontSize: 16, fontWeight: "bold" },
  tripDate: { fontSize: 14, color: "#555" },
  closeButton: {
    marginTop: 10,
    padding: 10,
    backgroundColor: "#007AFF",
    borderRadius: 5,
  },
  closeButtonText: { color: "#FFF", fontWeight: "bold" },
});
