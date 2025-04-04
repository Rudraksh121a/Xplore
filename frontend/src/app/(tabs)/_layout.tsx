import { Tabs } from "expo-router";
import { Ionicons, Feather } from "@expo/vector-icons";
import {
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";

export default function TabLayout() {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{ flex: 1 }}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <Tabs
          screenOptions={{
            tabBarActiveTintColor: "#007AFF", // Main Premium Blue
            tabBarInactiveTintColor: "#8E8E93", // Soft Grey for Inactive Tabs
            tabBarStyle: {
              backgroundColor: "#F4F8FB", // Light Premium Background
              borderTopWidth: 0,
              elevation: 5,
              height: 65, // More space for better touch experience
              paddingBottom: 10,
              paddingTop: 10,
            },
            headerShown: false,
            tabBarHideOnKeyboard: true,
          }}
        >
          <Tabs.Screen
            name="index"
            options={{
              title: "Home",
              tabBarIcon: ({ color }) => (
                <Ionicons name="home-outline" size={26} color={color} />
              ),
            }}
          />
          <Tabs.Screen
            name="explore"
            options={{
              title: "Explore",
              tabBarIcon: ({ color }) => (
                <Ionicons name="airplane-outline" size={26} color={color} />
              ), // Airplane better represents trip planning
            }}
          />
          <Tabs.Screen
            name="travelkit"
            options={{
              title: "Travel Kit",
              tabBarIcon: ({ color }) => (
                <Ionicons name="briefcase-outline" size={26} color={color} />
              ),
            }}
          />
          <Tabs.Screen
            name="chatbot"
            options={{
              title: "Xplora AI",
              tabBarIcon: ({ color }) => (
                <Ionicons
                  name="chatbubble-ellipses-outline"
                  size={26}
                  color={color}
                />
              ),
            }}
          />
          <Tabs.Screen
            name="profile"
            options={{
              title: "Profile",
              tabBarIcon: ({ color }) => (
                <Feather name="user" size={26} color={color} />
              ),
            }}
          />
        </Tabs>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}
