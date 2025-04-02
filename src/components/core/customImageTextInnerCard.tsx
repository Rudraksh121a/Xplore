import { View, Text, StyleSheet } from "react-native";
type CustomImageTextInnerCardProps = {  
  title: string;
};
export default function CustomImageTextInnerCard(props: CustomImageTextInnerCardProps) {
  return (
    <View style={styles.container}>
      <View style={styles.solidcolorblock}>
        <Text style={styles.text}>{props.title}</Text>
      </View>
    </View>
  );
}   

const styles = StyleSheet.create({
  container: {
    width: "100%",
    alignItems: "center",
  
  },
  solidcolorblock: {
    backgroundColor: "#007AFF",
    width: "100%",
    height: 100,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  text: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
});
