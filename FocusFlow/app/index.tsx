import { Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        //justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#4cc4c8ff",
      }}
    >
      <Text style={{
        fontSize: 45,
        fontWeight: "bold",
        color: "white",
        marginTop: 150,
        fontStyle: "italic",
      }}>FocusFlow</Text>

      <Text style={{
        fontSize: 25,
        color: "white",
        padding: 10,
      }}> What is the
      <Text style={{
        fontStyle: "italic",
        fontSize: 27,
      }}> task </Text>
      for today?</Text>
    </View>
  );
}
