import { Text, View, StyleSheet } from 'react-native';
import { Stack } from 'expo-router';
export default function HomeScreen() {
  return (
    <View style={styles.container}>
    <Stack.Screen name="index" options={{ headerShown: false }} />
    <View style={styles.trendingTours}>
        <Text style={styles.trendingToursText}>Trending Tours</Text>
    </View>

    {/* <View style={styles.popularDestinations}>
        <Text style={styles.popularDestinationsText}>Popular Destinations</Text>
    </View> */}
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        // backgroundColor: 'red',
        // margin:4,
        
    },
    trendingTours: {
        // backgroundColor: 'red',
        margin:4,
        padding: 10,
        borderRadius: 10,
    },
    trendingToursText: {
        fontSize: 20,
        color: '#000',
        fontFamily: 'Inter',
    },
    popularDestinations: {
        // backgroundColor: 'red',
        margin:4,
        padding: 10,
        borderRadius: 10,
    },
    popularDestinationsText: {
        fontSize: 20,
        color: '#000',
        fontFamily: 'Inter',
    }
})

