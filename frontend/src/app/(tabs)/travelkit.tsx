import React from "react";
import { View, Text, FlatList, TouchableOpacity, StyleSheet, Dimensions } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const tools = [
  { id: "1", name: "Flight Status", icon: "airplane-outline" },
  { id: "2", name: "imortent documents", icon: "document-outline" },
  { id: "3", name: "Hotel Booking", icon: "bed-outline" },
  { id: "4", name: "Currency Converter", icon: "cash-outline" },
  { id: "5", name: "Weather Updates", icon: "partly-sunny-outline" },
  { id: "6", name: "Travel Insurance", icon: "shield-checkmark-outline" },
  { id: "7", name: "Emergency Contacts", icon: "alert-circle-outline" },
  { id: "8", name: "Language Translator", icon: "globe-outline" },
  { id: "9", name: "Food Finder", icon: "fast-food-outline" },
  { id: "10", name: "Local Events", icon: "calendar-outline" },
  { id: "11", name: "Packing Checklist", icon: "briefcase-outline" },
  { id: "12", name: "Public Transport Info", icon: "bus-outline" },
  { id: "13", name: "Travel Guide", icon: "book-outline" },
];

const { width } = Dimensions.get("window");
const cardSize = width / 2 - 30; // Two-column layout

export default function FavoritesScreen() {
  return (
    <View style={styles.container}>
      {/* Welcome Tile */}
      <View style={styles.welcomeCard}>
        <Text style={styles.welcomeText}>Welcome to Virtual Travel Tools!</Text>
        <Text style={styles.welcomeSubText}>Plan, explore, and travel smarter with our essential tools.</Text>
      </View>

      {/* Tools Grid */}
      <FlatList
        data={tools}
        keyExtractor={(item) => item.id}
        numColumns={2} // Two-column grid
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.toolCard}>
            <Ionicons name={item.icon as any} size={32} color="#FFC107" />
            <Text style={styles.toolText}>{item.name}</Text>
          </TouchableOpacity>
        )}
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F4F8FB",
    padding: 20,
  },
  welcomeCard: {
    backgroundColor: "#007AFF",
    padding: 20,
    borderRadius: 15,
    marginBottom: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  welcomeText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#ffffff",
  },
  welcomeSubText: {
    fontSize: 14,
    color: "#dfe6e9",
    marginTop: 5,
    textAlign: "center",
  },
  listContainer: {
    paddingBottom: 20,
    justifyContent: "center",
  },
  toolCard: {
    width: cardSize,
    height: cardSize * 0.8,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ffffff",
    padding: 15,
    borderRadius: 15,
    margin: 10,
    elevation: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  toolText: {
    fontSize: 16,
    fontWeight: "600",
    color: "#2C3E50",
    marginTop: 10,
    textAlign: "center",
  },
});
