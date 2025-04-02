import React, { useState } from "react";
import { View, Text, TextInput, ScrollView, StyleSheet, TouchableOpacity } from "react-native";
import CardList from "@/components/core/CustomImageTextCard";
import { Ionicons } from "@expo/vector-icons";
import FeaturesCard from "@/components/core/featruesCard";

const weekendTours = [
  { name: "Goa Beach Weekend", image: { uri: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/15/33/fc/f0/goa.jpg?w=2400&h=-1&s=1" } },
  { name: "Himalayan Adventure", image: { uri: "https://picsum.photos/id/238/200/300" } },
];

const popularDestinations = [
  { name: "Santorini", image: { uri: "https://picsum.photos/id/239/200/300" } },
  { name: "Kyoto", image: { uri: "https://picsum.photos/id/240/200/300" } },
];

const topChoices = [
  { name: "Bali", image: { uri: "https://picsum.photos/id/241/200/300" } },
  { name: "Swiss Alps", image: { uri: "https://picsum.photos/id/242/200/300" } },
];

const aboutFeatures = [
  "🔍 AI-Powered Tour Recommendations",
  "📅 Dynamic AI Itineraries & Weather Adjustments",
  "🗺️ AR Landmark Recognition & Walking Directions",
  "🤖 AI Chatbot for Travel Assistance",
  "💱 Real-Time Currency & Multi-Language Support",
];

export default function HomeScreen() {
  const [selectIndex, setSelectIndex] = useState(0);

  const handleLeftPress = () => {
    if (selectIndex > 0) setSelectIndex(selectIndex - 1);
  };

  const handleRightPress = () => {
    if (selectIndex < aboutFeatures.length - 1) setSelectIndex(selectIndex + 1);
  };

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {/* Header Section */}
      <View style={styles.header}>
        <Text style={styles.logo}>Xplore</Text>
        <View style={styles.searchContainer}>
          <Ionicons name="search-outline" size={20} color="#888" style={styles.searchIcon} />
          <TextInput style={styles.searchBar} placeholder="Search destinations..." placeholderTextColor="#888" />
        </View>
      </View>

      {/* Features Section */}
      <View style={styles.featuresContainer}>
        <FeaturesCard title={aboutFeatures[selectIndex]} onLeftArrowPress={handleLeftPress} onRightArrowPress={handleRightPress} />
      </View>

      {/* Travel Sections */}
      <CardList title="Weekend Tours" data={weekendTours} />
      <CardList title="Popular Destinations" data={popularDestinations} />
      <CardList title="Top Choice" data={topChoices} />

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F4F8FB", 
    padding: 20,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  logo: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#007AFF", 
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#ffffff",
    borderRadius: 10,
    paddingHorizontal: 12,
    elevation: 3,
    flex: 1,
    marginLeft: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },
  searchIcon: {
    marginRight: 6,
  },
  searchBar: {
    flex: 1,
    fontSize: 16,
    paddingVertical: 10,
    color: "#2C3E50", 
  },
  featuresContainer: {
    marginBottom: 20,
  },
  exploreButton: {
    backgroundColor: "#FF6F61", 
    paddingVertical: 12,
    borderRadius: 12,
    alignItems: "center",
    marginTop: 20,
    shadowColor: "#FF3B30", 
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 6,
    elevation: 4,
  },
  exploreButtonText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#ffffff",
  },
});

