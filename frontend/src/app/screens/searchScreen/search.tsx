import React, { useState } from "react";
import { View, TextInput, FlatList, Text, StyleSheet, TouchableOpacity, Keyboard } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import dummySearchArray from "@assets/data/searcharray";

export default function SearchScreen() {
  const [searchQuery, setSearchQuery] = useState("");
  const navigation = useNavigation(); // Navigation hook

  // Convert object to an array of country names
  const countries = Object.values(dummySearchArray).flat();

  // Filter countries based on search input
  const filteredCountries = searchQuery
    ? countries.filter(country => country.toLowerCase().includes(searchQuery.toLowerCase()))
    : [];

  // Handle search submission
  const handleSearchSubmit = () => {
    if (searchQuery.trim()) {
      Keyboard.dismiss(); // Hide keyboard
      navigation.navigate("NextScreen", { query: searchQuery }); // Navigate with search query
    }
  };

  return (
    <View style={styles.container}>
      {/* Search Bar */}
      <View style={styles.searchContainer}>
        <Ionicons name="search" size={22} color="#007AFF" style={styles.searchIcon} />
        <TextInput
          style={styles.searchInput}
          placeholder="Search destinations..."
          placeholderTextColor="#2C3E50"
          value={searchQuery}
          onChangeText={setSearchQuery}
          returnKeyType="search" // Changes "Return" button to "Search"
          onSubmitEditing={handleSearchSubmit} // Pressing enter triggers search
        />
        {searchQuery.length > 0 && (
          <Ionicons name="arrow-forward" size={22} color="#FF6F61" style={styles.inputRightIcon} />
        )}
      </View>

      {/* Search Results */}
      <FlatList
        data={filteredCountries}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity 
            style={styles.resultItem} 
            onPress={() => setSearchQuery(item)} // Clicking a result sets the text
          >
            <Text style={styles.resultText}>{item}</Text>
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
    padding: 16,
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 10,
    elevation: 4,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },
  searchIcon: {
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    color: "#2C3E50", // Deep Navy
  },
  inputRightIcon: {
    marginLeft: 10, // Spacing from text
  },
  resultItem: {
    backgroundColor: "#fff",
    marginTop: 6,
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 8,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 3,
    elevation: 2,
  },
  resultText: {
    fontSize: 16,
    color: "#2C3E50",
  },
});
