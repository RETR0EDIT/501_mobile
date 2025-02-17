import React from "react";
import { View, Text } from "react-native";

export default function ErrorPage() {
  return (
    <View>
      <Text style={{ fontSize: 24, fontWeight: "bold" }}>Oops!</Text>
      <Text>Sorry, an unexpected error has occurred.</Text>
    </View>
  );
}
