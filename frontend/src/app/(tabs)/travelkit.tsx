import React from "react";
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const tools = [
  { id: "1", name: "Documents", icon: "document-text-outline" },
  { id: "2", name: "Language Translator", icon: "globe-outline" },
  { id: "3", name: "Currency Converter", icon: "cash-outline" },
  { id: "4", name: "Weather Updates", icon: "partly-sunny-outline" },
  { id: "5", name: "Car/Bike Rentals", icon: "car-outline" },
  { id: "6", name: "Hotel & Flight Booking", icon: "airplane-outline" },
  { id: "7", name: "Emergency Contacts", icon: "alert-circle-outline" },
  { id: "8", name: "Map", icon: "map-outline" },
  { id: "9", name: "Travel Insurance", icon: "shield-checkmark-outline" },
  { id: "10", name: "packing idea for travel", icon: "shield-checkmark-outline" },
];

export default function FavoritesScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Virtual Travel Tools</Text>

      {/* Tools List */}
      <FlatList
        data={tools}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.toolCard}>
            <Ionicons name={item.icon as any} size={28} color="#FFC107" />
            <Text style={styles.toolText}>{item.name}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F4F8FB", // Soft Light Blue
    padding: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#007AFF", // Explorer Blue
    marginBottom: 15,
  },
  toolCard: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#ffffff",
    padding: 15,
    borderRadius: 12,
    marginBottom: 12,
    elevation: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.15,
    shadowRadius: 5,
  },
  toolText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#2C3E50", // Deep Navy
    marginLeft: 10,
  },
});
