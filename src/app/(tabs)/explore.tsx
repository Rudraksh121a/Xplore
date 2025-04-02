import React from "react";
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const trips = [
  { id: "1", title: "My Goa Adventure 🌊", date: "April 10 - April 15" },
  { id: "2", title: "Himalayan Trekking ⛰️", date: "May 5 - May 12" },
];

export default function ExploreScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Plan Your Trip</Text>

      {/* List of Created Trips */}
      <FlatList
        data={trips}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.cardTitle}>{item.title}</Text>
            <Text style={styles.cardDate}>{item.date}</Text>
          </View>
        )}
        ListEmptyComponent={<Text style={styles.emptyText}>No trips yet. Start planning!</Text>}
      />

      {/* Create New Trip Button */}
      <TouchableOpacity style={styles.createButton}>
        <Ionicons name="add-circle-outline" size={24} color="#fff" />
        <Text style={styles.createButtonText}>Create New Trip</Text>
      </TouchableOpacity>
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
    color: "#007AFF", // Main Explorer Blue
    marginBottom: 15,
  },
  card: {
    backgroundColor: "#ffffff",
    padding: 15,
    borderRadius: 12,
    marginBottom: 10,
    elevation: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.15,
    shadowRadius: 5,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#2C3E50", // Deep Navy
  },
  cardDate: {
    fontSize: 14,
    color: "#666",
    marginTop: 3,
  },
  emptyText: {
    textAlign: "center",
    fontSize: 16,
    color: "#888",
    marginVertical: 20,
  },
  createButton: {
    flexDirection: "row",
    backgroundColor: "#FF6F61", // Energetic Coral
    padding: 15,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 15,
  },
  createButtonText: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold",
    marginLeft: 8,
  },
});
