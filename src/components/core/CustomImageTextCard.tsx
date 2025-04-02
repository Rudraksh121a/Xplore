import React from "react";
import { View, Text, FlatList, Image, StyleSheet } from "react-native";

type CardListProps = {
  title: string;
  data: { name: string; image: any }[];
};

const CardList = ({ title, data }: CardListProps) => {
  return (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>{title}</Text>
      <FlatList
        data={data}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(_, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Image source={item.image} style={styles.cardImage} />
            <Text style={styles.cardText}>{item.name}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  section: {
    marginBottom: 25,
    paddingHorizontal: 12,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#007AFF", // Main Xplore Blue
    marginBottom: 12,
    textTransform: "capitalize",
  },
  card: {
    backgroundColor: "#ffffff",
    padding: 16,
    borderRadius: 12,
    marginRight: 12,
    alignItems: "center",
    elevation: 4, // Android shadow
    shadowColor: "#000", // iOS shadow
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  cardImage: {
    width: 140,
    height: 140,
    borderRadius: 12,
  },
  cardText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#2C3E50", // Deep Navy for readability
    marginTop: 8,
    textAlign: "center",
    textTransform: "capitalize",
  },
});

export default CardList;
