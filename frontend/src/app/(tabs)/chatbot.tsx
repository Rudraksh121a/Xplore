import React, { useState } from "react";
import { 
  View, Text, TextInput, TouchableOpacity, FlatList, StyleSheet, 
  KeyboardAvoidingView, Platform, Keyboard, TouchableWithoutFeedback 
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function Chatbot() {
  const [messages, setMessages] = useState([
    { id: "1", text: "Hello! 👋 How can I assist you with your trip?", sender: "bot" },
  ]);
  const [input, setInput] = useState("");

  const sendMessage = () => {
    if (input.trim()) {
      setMessages([...messages, { id: Date.now().toString(), text: input, sender: "user" }]);
      setInput("");
      setTimeout(() => {
        setMessages((prevMessages) => [
          ...prevMessages,
          { id: Date.now().toString(), text: "I'm here to help! 😊", sender: "bot" },
        ]);
      }, 1000);
    }
  };

  return (
    <KeyboardAvoidingView 
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.flexContainer}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.container}>
          {/* Chat Header */}
          <Text style={styles.header}>Xplora AI Chat</Text>

          {/* Chat Messages */}
          <FlatList
            data={messages}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <View style={[styles.messageContainer, item.sender === "user" ? styles.userMessage : styles.botMessage]}>
                <Text style={styles.messageText}>{item.text}</Text>
              </View>
            )}
            contentContainerStyle={styles.chatArea}
          />

          {/* Input Box */}
          <View style={styles.inputWrapper}>
            <TextInput
              style={styles.input}
              placeholder="Ask anything about your trip..."
              placeholderTextColor="#888"
              value={input}
              onChangeText={setInput}
            />
            <TouchableOpacity onPress={sendMessage} style={styles.sendButton}>
              <Ionicons name="send" size={24} color="#F4F8FB" />
            </TouchableOpacity>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  flexContainer: {
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: "#F4F8FB",
    padding: 20,
  },
  header: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#007AFF",
    textAlign: "center",
    marginBottom: 15,
  },
  chatArea: {
    flexGrow: 1,
    paddingBottom: 10,
  },
  messageContainer: {
    maxWidth: "75%",
    padding: 12,
    borderRadius: 10,
    marginBottom: 10,
  },
  botMessage: {
    backgroundColor: "#007AFF",
    alignSelf: "flex-start",
  },
  userMessage: {
    backgroundColor: "#FF6F61",
    alignSelf: "flex-end",
  },
  messageText: {
    color: "#FFF",
    fontSize: 16,
  },
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
  input: {
    flex: 1,
    fontSize: 16,
    color: "#2C3E50",
    paddingVertical: 10,
  },
  sendButton: {
    backgroundColor: "#007AFF",
    borderRadius: 20,
    padding: 10,
    marginLeft: 10,
  },
});
