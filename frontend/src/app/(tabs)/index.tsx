import React, { useState } from "react";
import { View, Text, ScrollView, StyleSheet, TouchableOpacity, ImageBackground } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Link } from "expo-router";
import CardList from "@/components/core/CustomImageTextCard";
import FeaturesCard from "@/components/core/featruesCard";
import { LinearGradient } from "expo-linear-gradient";

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
    setSelectIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : aboutFeatures.length - 1));
  };

  const handleRightPress = () => {
    setSelectIndex((prevIndex) => (prevIndex < aboutFeatures.length - 1 ? prevIndex + 1 : 0));
  };

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {/* Hero Section */}
      <ImageBackground
        source={{ uri: "https://picsum.photos/id/235/800/400" }}
        style={styles.hero}
      >
        <LinearGradient
          colors={['rgba(0,0,0,0.1)', 'rgba(0,0,0,0.7)']}
          style={styles.heroOverlay}
        >
          <View style={styles.header}>
            <Text style={styles.logo}>Xplore</Text>
            <Link href="/screens/searchScreen/search" asChild>
              <TouchableOpacity style={styles.searchButton}>
                <Ionicons name="search-outline" size={22} color="#FFF" />
                <Text style={styles.searchText}>Where to?</Text>
              </TouchableOpacity>
            </Link>
          </View>
          <Text style={styles.heroTitle}>Discover Your Next Adventure</Text>
          <Text style={styles.heroSubtitle}>Explore the world with AI-powered travel companion</Text>
        </LinearGradient>
      </ImageBackground>

      {/* Features Section - Premium Design */}
      <View style={styles.featuresContainer}>
        <Text style={styles.sectionTitle}>Why Choose Xplore?</Text>
        <FeaturesCard title={aboutFeatures[selectIndex]} onLeftArrowPress={handleLeftPress} onRightArrowPress={handleRightPress} />
      </View>

      {/* Travel Sections */}
      <View style={styles.travelSection}>
        <CardList title="Weekend Escapes" data={weekendTours} />
        <CardList title="Trending Destinations" data={popularDestinations} />
        <CardList title="Editor's Choice" data={topChoices} />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F4F8FB",
  },
  hero: {
    height: 400,
  },
  heroOverlay: {
    flex: 1,
    padding: 20,
    justifyContent: "space-between",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 40,
  },
  logo: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#FFF",
    textShadowColor: 'rgba(0, 0, 0, 0.3)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 5,
  },
  searchButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "rgba(255,255,255,0.2)",
    padding: 12,
    borderRadius: 25,
    gap: 8,
  },
  searchText: {
    color: "#FFF",
    fontSize: 16,
  },
  heroTitle: {
    fontSize: 36,
    fontWeight: "bold",
    color: "#FFF",
    textShadowColor: 'rgba(0, 0, 0, 0.3)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 5,
  },
  heroSubtitle: {
    fontSize: 18,
    color: "#FFF",
    opacity: 0.9,
    marginTop: 8,
    textShadowColor: 'rgba(0, 0, 0, 0.3)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 5,
  },
  featuresContainer: {
    margin: 16,
    backgroundColor: "#FFF",
    padding: 20,
    borderRadius: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.1,
    shadowRadius: 12,
    elevation: 8,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#1A1A1A",
    marginBottom: 16,
    textAlign: "center",
  },
  travelSection: {
    paddingHorizontal: 16,
    paddingBottom: 32,
    gap: 24,
  }
});