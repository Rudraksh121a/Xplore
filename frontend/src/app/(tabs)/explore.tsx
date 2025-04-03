import React, { useState } from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  Alert,
  TextInput,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { Link } from "expo-router";

export default function ExploreScreen() {
  const navigation = useNavigation();
  const [trips, setTrips] = useState([
    { id: "1", title: "My Goa Adventure 🌊", date: "April 10 - April 15" },
    { id: "2", title: "Himalayan Trekking ⛰️", date: "May 5 - May 12" },
  ]);
  const [editingTripId, setEditingTripId] = useState<string | null>(null);
  const [newTitle, setNewTitle] = useState("");

  // Handle Trip Rename
  const renameTrip = (id: string) => {
    setTrips((prevTrips) =>
      prevTrips.map((trip) =>
        trip.id === id ? { ...trip, title: newTitle || trip.title } : trip
      )
    );
    setEditingTripId(null);
    setNewTitle("");
  };

  // Handle Trip Deletion
  const deleteTrip = (id: string) => {
    Alert.alert("Delete Trip", "Are you sure you want to delete this trip?", [
      { text: "Cancel", style: "cancel" },
      {
        text: "Delete",
        style: "destructive",
        onPress: () =>
          setTrips((prevTrips) => prevTrips.filter((trip) => trip.id !== id)),
      },
    ]);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Plan Your Trip</Text>

      {/* List of Created Trips */}
      <FlatList
        data={trips}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            {editingTripId === item.id ? (
              <TextInput
                style={styles.input}
                value={newTitle}
                onChangeText={setNewTitle}
                placeholder="Enter new trip title"
                onBlur={() => renameTrip(item.id)}
                autoFocus
              />
            ) : (
              <TouchableOpacity onLongPress={() => setEditingTripId(item.id)}>
                <Text style={styles.cardTitle}>{item.title}</Text>
              </TouchableOpacity>
            )}
            <Text style={styles.cardDate}>{item.date}</Text>

            {/* Delete Button */}
            <TouchableOpacity
              style={styles.deleteButton}
              onPress={() => deleteTrip(item.id)}
            >
              <Ionicons name="trash-outline" size={22} color="#FF3B30" />
            </TouchableOpacity>
          </View>
        )}
        ListEmptyComponent={
          <View style={styles.emptyContainer}>
            <Ionicons name="airplane-outline" size={60} color="#888" />
            <Text style={styles.emptyText}>No trips yet. Start planning!</Text>
          </View>
        }
      />

      {/* Create New Trip Button */}
      <Link href="/screens/newTrip/NewTripScreen" asChild>
        <TouchableOpacity style={styles.createButton}>
          <Ionicons name="add-circle-outline" size={24} color="#fff" />
          <Text style={styles.createButtonText}>Create New Trip</Text>
        </TouchableOpacity>
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F4F8FB",
    padding: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#007AFF",
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
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#2C3E50",
  },
  cardDate: {
    fontSize: 14,
    color: "#666",
    marginTop: 3,
  },
  emptyContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 50,
  },
  emptyText: {
    textAlign: "center",
    fontSize: 16,
    color: "#888",
    marginTop: 10,
  },
  input: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#2C3E50",
    borderBottomWidth: 1,
    borderColor: "#007AFF",
    padding: 3,
    width: "70%",
  },
  deleteButton: {
    padding: 8,
  },
  createButton: {
    flexDirection: "row",
    backgroundColor: "#FF6F61",
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
