import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

type FeaturesCardProps = {
  title: string;
  onLeftArrowPress: () => void;
  onRightArrowPress: () => void;
};

export default function FeaturesCard(props: FeaturesCardProps) {
  return (
    <View style={styles.wrapper}>
      <View style={styles.container}>
        <Text style={styles.title}>{props.title}</Text>
      </View>

      {/* Navigation Arrows */}
      <TouchableOpacity
        style={[styles.arrow, styles.leftArrow]}
        onPress={props.onLeftArrowPress}
      >
        <Ionicons name="arrow-back" size={24} color="#F4F8FB" />
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.arrow, styles.rightArrow]}
        onPress={props.onRightArrowPress}
      >
        <Ionicons name="arrow-forward" size={24} color="#F4F8FB" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    position: "relative",
    width: "90%",
    alignSelf: "center",
    marginVertical: 10,
  },
  container: {
    backgroundColor: "#007AFF", // Main color
    padding: 15,
    borderRadius: 12,
    height: 140,
    alignItems: "center",
    justifyContent: "center",
    elevation: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  title: {
    fontSize: 22,
    fontWeight: "700",
    color: "#F4F8FB", // Light text for contrast
    fontFamily: "Poppins-SemiBold",
    letterSpacing: 1,
    textTransform: "capitalize",
    textShadowColor: "rgba(0, 0, 0, 0.2)",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
  arrow: {
    position: "absolute",
    top: "50%",
    transform: [{ translateY: -12 }],
    backgroundColor: "#FF6F61", // Accent color
    borderRadius: 20,
    width: 40,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    elevation: 3,
  },
  leftArrow: {
    left: -20,
  },
  rightArrow: {
    right: -20,
  },
});