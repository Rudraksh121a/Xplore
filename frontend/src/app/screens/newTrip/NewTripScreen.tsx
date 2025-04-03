import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  Platform,
} from "react-native";
import { useForm, Controller } from "react-hook-form";
import { Ionicons } from "@expo/vector-icons";
import DateTimePicker from "@react-native-community/datetimepicker";
import DropDownPicker from "react-native-dropdown-picker";
import { useRouter } from "expo-router"; // Import useRouter for navigation

const destinations = [
  { id: "1", name: "Paris, France", type: "City" },
  { id: "2", name: "Maldives", type: "Beach" },
  { id: "3", name: "New York, USA", type: "City" },
  { id: "4", name: "Swiss Alps, Switzerland", type: "Mountains" },
  { id: "5", name: "Bali, Indonesia", type: "Beach" },
  { id: "6", name: "Dubai, UAE", type: "City" },
  { id: "7", name: "Santorini, Greece", type: "Beach" },
];

export default function NewTripScreen({ navigation }: { navigation: any }) {
  const { control, handleSubmit, reset } = useForm();
  const [date, setDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [budget, setBudget] = useState(null);
  const [openDropdown, setOpenDropdown] = useState(false);
  const [customBudget, setCustomBudget] = useState("");
  const [destination, setDestination] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);
  const [tripType, setTripType] = useState("Solo"); 
  const [numberOfDays, setNumberOfDays] = useState("");
  const [numberOfAdults, setNumberOfAdults] = useState("");
  const [numberOfChildren, setNumberOfChildren] = useState("");
  const [numberOfFriends, setNumberOfFriends] = useState("");

  const router = useRouter(); // Initialize router for navigation

  const budgetOptions = [
    { label: "💰 Budget-Friendly (₹5k - ₹20k)", value: "Budget-Friendly (₹5k - ₹20k)" },
    { label: "💼 Mid-Range (₹20k - ₹50k)", value: "Mid-Range (₹20k - ₹50k)" },
    { label: "🏨 Luxury (₹50k - ₹1L)", value: "Luxury (₹50k - ₹1L)" },
    { label: "🌟 Ultra-Luxury (₹1L+)", value: "Ultra-Luxury (₹1L+)" },
    { label: "✏️ Custom Amount", value: "Custom" },
  ];

  const filteredDestinations = destination
    ? destinations.filter((d) =>
        d.name.toLowerCase().includes(destination.toLowerCase())
      )
    : [];

  const onSubmit = (data: any) => {
    const finalBudget = budget === "Custom" ? customBudget : budget;
    const tripData = {
      ...data,
      startDate: date.toDateString(),
      destination,
      budget: finalBudget,
      tripType,
      numberOfDays,
      ...(tripType === "Family" && { numberOfAdults, numberOfChildren }),
      ...(tripType === "Friend" && { numberOfFriends }),
    };
    console.log("Trip Data:", tripData);
    reset(); // Reset the form
    // Navigate to explore.tsx
    router.push("/explore"); // Replace with the correct path to explore.tsx
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Plan Your Dream Trip</Text>

      {/* Trip Title */}
      <View style={styles.inputContainer}>
        <Ionicons name="bookmark-outline" size={22} color="#007AFF" />
        <Controller
          control={control}
          name="tripTitle"
          rules={{ required: "Trip title is required" }}
          render={({ field: { onChange, value } }) => (
            <TextInput
              style={styles.input}
              placeholder="Trip Title"
              placeholderTextColor="#666"
              value={value}
              onChangeText={onChange}
            />
          )}
        />
      </View>

      {/* Start Date */}
      <TouchableOpacity
        style={styles.inputContainer}
        onPress={() => setShowDatePicker(true)}
      >
        <Ionicons name="calendar-outline" size={22} color="#007AFF" />
        <Text style={[styles.input, !date && styles.placeholder]}>
          Starting Date : {date ? date.toDateString() : "Select your starting date"}
        </Text>
      </TouchableOpacity>
      {showDatePicker && (
        <DateTimePicker
          value={date}
          mode="date"
          display={Platform.OS === "ios" ? "inline" : "calendar"}
          onChange={(event, selectedDate) => {
            setShowDatePicker(false);
            if (selectedDate) setDate(selectedDate);
          }}
        />
      )}

      {/* Number of Days */}
      <View style={styles.inputContainer}>
        <Ionicons name="time-outline" size={22} color="#007AFF" />
        <TextInput
          style={styles.input}
          placeholder="Number of Days"
          placeholderTextColor="#666"
          value={numberOfDays}
          onChangeText={setNumberOfDays}
          keyboardType="numeric"
        />
      </View>

      {/* Destination Input */}
      <View style={styles.inputContainer}>
        <Ionicons name="location-outline" size={22} color="#007AFF" />
        <TextInput
          style={styles.input}
          placeholder="Search Destination"
          value={destination}
          onChangeText={(text) => {
            setDestination(text);
            setShowDropdown(text.length > 0);
          }}
        />
      </View>

      {/* Destination Suggestions */}
      {showDropdown && filteredDestinations.length > 0 && (
        <View style={styles.dropdown}>
          <FlatList
            data={filteredDestinations.slice(0, 5)}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <TouchableOpacity
                style={styles.listItem}
                onPress={() => {
                  setDestination(item.name);
                  setShowDropdown(false);
                }}
              >
                <Ionicons
                
                  name={
                    item.type === "City"
                      ? "business-outline"
                      : item.type === "Beach"
                      ? "sunny-outline"
                      : "mountain-outline"
                  }
                  size={18}
                  color="#FFC107"
                  style={{ marginRight: 10 }}
                />
                <Text style={styles.listText}>{item.name}</Text>
              </TouchableOpacity>
            )}
          />
        </View>
      )}

      {/* Trip Type Buttons */}
      <View style={styles.buttonContainer}>
        {["Family", "Solo", "Friend"].map((type) => (
          <TouchableOpacity
            key={type}
            style={[
              styles.button,
              tripType === type && styles.selectedButton,
            ]}
            onPress={() => setTripType(type)}
          >
            <Text
              style={[
                styles.buttonText,
                tripType === type && styles.selectedButtonText,
              ]}
            >
              {type}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Family-specific inputs */}
      {tripType === "Family" && (
        <>
          <View style={styles.inputContainer}>
            <Ionicons name="people-outline" size={22} color="#007AFF" />
            <TextInput
              style={styles.input}
              placeholder="Number of Adults"
              placeholderTextColor="#666"
              value={numberOfAdults}
              onChangeText={setNumberOfAdults}
              keyboardType="numeric"
            />
          </View>
          <View style={styles.inputContainer}>
            <Ionicons name="happy-outline" size={22} color="#007AFF" />
            <TextInput
              style={styles.input}
              placeholder="Number of Children"
              placeholderTextColor="#666"
              value={numberOfChildren}
              onChangeText={setNumberOfChildren}
              keyboardType="numeric"
            />
          </View>
        </>
      )}

      {/* Friend-specific input */}
      {tripType === "Friend" && (
        <View style={styles.inputContainer}>
          <Ionicons name="people-outline" size={22} color="#007AFF" />
          <TextInput
            style={styles.input}
            placeholder="Number of Friends"
            placeholderTextColor="#666"
            value={numberOfFriends}
            onChangeText={setNumberOfFriends}
            keyboardType="numeric"
          />
        </View>
      )}

      {/* Budget Dropdown */}
      <DropDownPicker
        open={openDropdown}
        value={budget}
        items={budgetOptions}
        setOpen={setOpenDropdown}
        setValue={setBudget}
        style={styles.dropdownPicker}
        dropDownContainerStyle={styles.dropdownContainer}
        placeholder="Select Budget"
        placeholderStyle={{ color: "#666" }}
      />

      {/* Custom Budget Input */}
      {budget === "Custom" && (
        <View style={styles.inputContainer}>
          <Ionicons name="cash-outline" size={22} color="#007AFF" />
          <TextInput
            style={styles.input}
            placeholder="Enter Custom Budget (₹)"
            keyboardType="numeric"
            placeholderTextColor="#666"
            value={customBudget}
            onChangeText={setCustomBudget}
          />
        </View>
      )}

      {/* Save Trip Button */}
      <TouchableOpacity
        style={styles.createButton}
        onPress={handleSubmit(onSubmit)}
      >
        <Ionicons name="checkmark-circle-outline" size={24} color="#fff" />
        <Text style={styles.createButtonText}>Save Trip</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    backgroundColor: "#F4F8FB", 
    padding: 20 
  },
  header: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#007AFF",
    textAlign: "center",
    marginBottom: 20,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 12,
    marginBottom: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  input: {
    flex: 1,
    marginLeft: 10,
    fontSize: 16,
    color: "#2C3E50",
  },
  placeholder: {
    color: "#666",
  },
  dropdown: {
    backgroundColor: "#fff",
    borderRadius: 10,
    marginTop: -10,
    marginBottom: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  listItem: {
    flexDirection: "row",
    alignItems: "center",
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#f0f0f0",
  },
  listText: {
    fontSize: 16,
    color: "#2C3E50",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 15,
  },
  button: {
    flex: 1,
    padding: 12,
    borderRadius: 10,
    backgroundColor: "#fff",
    alignItems: "center",
    marginHorizontal: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  selectedButton: {
    backgroundColor: "#007AFF",
  },
  buttonText: {
    fontSize: 16,
    color: "#2C3E50",
  },
  selectedButtonText: {
    color: "#fff",
    fontWeight: "bold",
  },
  dropdownPicker: {
    backgroundColor: "#fff",
    borderWidth: 0,
    borderRadius: 10,
    marginBottom: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  dropdownContainer: {
    backgroundColor: "#fff",
    borderWidth: 0,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  createButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#007AFF",
    padding: 15,
    borderRadius: 10,
    marginTop: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  },
  createButtonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 10,
  },
});