import { View, Text, StyleSheet, Image } from "react-native";

export default function ProfileScreen() {
  return (
    <View style={styles.container}>
      {/* Settings Header */}
      <Text style={styles.settingText}>Settings</Text>

      {/* Profile Section */}
      <View style={styles.profileContainer}>
        <View style={styles.imageWrapper}>
          <Text style={styles.imagePlaceholder}>Image</Text>
        </View>
        <Text style={styles.userName}>User Name</Text>
      </View>

      {/* Settings Options */}
      <View style={styles.settingsList}>
        <Text style={styles.settingItem}> About Us</Text>
        <Text style={styles.settingItem}> Contact Us</Text>
        <Text style={styles.settingItem}> Privacy Policy</Text>
        <Text style={styles.settingItemlast}> Help & Support</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F4F8FB", // Soft Light Blue (Premium Feel)
    padding: 20,
  },
  settingText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#007AFF", // Vibrant Explorer Blue
    marginBottom: 20,
  },
  profileContainer: {
    alignItems: "center",
    marginBottom: 30,
  },
  imageWrapper: {
    width: 100,
    height: 100,
    backgroundColor: "#FF6F61", // Coral (Accent Color)
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
  },
  imagePlaceholder: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: "bold",
  },
  userName: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#2C3E50", // Deep Navy for Contrast
  },
  settingsList: {
    backgroundColor: "#FFF",
    padding: 15,
    borderRadius: 10,
    elevation: 3, // Shadow for Premium Look
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },
  settingItem: {
    fontSize: 18,
    color: "#2C3E50",
    fontWeight: "500",
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#E0E0E0",
  },
  settingItemlast: {
    fontSize: 18,
    color: "#2C3E50",
    fontWeight: "500",
    paddingVertical: 10,
  },
});
