import { View, Text, StyleSheet, Dimensions } from "react-native";
import CustomImageTextInnerCard from "@/components/core/customImageTextInnerCard";

const { width } = Dimensions.get("window");

export default function FavoritesScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.gridContainer}>
        <View style={styles.cardContainer}>
          <CustomImageTextInnerCard title="Virtual Documents" />
        </View>
        <View style={styles.cardContainer}>
          <CustomImageTextInnerCard title="Currency Converter" />
        </View>
        <View style={styles.cardContainer}>
          <CustomImageTextInnerCard title="Weather Updates" />
        </View>
        <View style={styles.cardContainer}>
          <CustomImageTextInnerCard title="Hotel Booking" />
        </View>
        <View style={styles.cardContainer}>
          <CustomImageTextInnerCard title="Hotel Booking" />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F4F8FB",
    padding: 20,
    alignItems: "center",
  },
  gridContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    width: "100%",
  },
  cardContainer: {
    width: "48%",
    backgroundColor: "#007AFF", 
    borderRadius: 10,
    padding: 20,
    marginBottom: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  cardText: {
    color: "#F4F8FB", 
    fontSize: 16,
    textAlign: "center",
    fontWeight: "bold",
  },
});