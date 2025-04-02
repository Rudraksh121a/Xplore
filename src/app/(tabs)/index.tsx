import { Text, View } from 'react-native';
import { Stack } from 'expo-router';
export default function HomeScreen() {
  return (
    <View>
    <Stack.Screen name="index" options={{ headerShown: false }} />
    <Text>Home Screen</Text>
    </View>
  )
}
