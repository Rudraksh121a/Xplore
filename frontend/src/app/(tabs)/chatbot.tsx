import React, { useState } from "react";
import { View, Text, ScrollView, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import CardList from "@/components/core/CustomImageTextCard";
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
  const navigation = useNavigation();

  const handleLeftPress = () => {
    setSelectIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : aboutFeatures.length - 1));
  };

  const handleRightPress = () => {
    setSelectIndex((prevIndex) => (prevIndex < aboutFeatures.length - 1 ? prevIndex + 1 : 0));
  };

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {/* Header Section */}
      <View style={styles.header}>
        <Text style={styles.logo}>Xplore</Text>
        <TouchableOpacity onPress={() => navigation.navigate("Search")}>
          <Ionicons name="search-outline" size={28} color="#007AFF" />
        </TouchableOpacity>
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
    paddingVertical: 20,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
    paddingHorizontal: 16,
  },
  logo: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#007AFF",
  },
  featuresContainer: {
    marginHorizontal: 16,
  },
});
