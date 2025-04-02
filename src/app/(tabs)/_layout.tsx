import { Tabs } from "expo-router";
import { Ionicons, Feather } from "@expo/vector-icons";
import { KeyboardAvoidingView, Platform, TouchableWithoutFeedback, Keyboard } from "react-native";

export default function TabLayout() {
  return (
    <KeyboardAvoidingView 
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{ flex: 1 }}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <Tabs
          screenOptions={{
            tabBarActiveTintColor: "#007AFF",
            tabBarInactiveTintColor: "#8E8E93",
            tabBarStyle: {
              backgroundColor: "#F8F8F8",
              borderTopWidth: 0,
              elevation: 5,
              height: 60,
              paddingBottom: 8,
              paddingTop: 8,
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
                <Feather name="search" size={26} color={color} />
              ),
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
              title: "Chat",
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
