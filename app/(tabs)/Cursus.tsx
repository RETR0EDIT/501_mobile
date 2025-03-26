import React, { useEffect } from "react";
import { ScrollView, View, Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function Cursus() {
  const navigation = useNavigation();

  return (
    <ScrollView style={{ flex: 1, padding: 20, backgroundColor: "#fff" }}>
      {/* Section GEA */}
      <View>
        <Text style={{ fontSize: 24, fontWeight: "bold", textAlign: "center" }}>
          GESTION DES ENTREPRISES ET DES ADMINISTRATIONS
        </Text>
        <Text style={{ marginTop: 10 }}>
          Le BUT GEA est une formation polyvalente qui forme les étudiants aux
          métiers de la gestion dans des contextes variés : entreprises,
          associations ou administrations.
        </Text>
        <TouchableOpacity
          style={{ backgroundColor: "#007bff", padding: 10, marginTop: 10 }}
          onPress={() => navigation.navigate("Problemes")}
        >
          <Text style={{ color: "white", textAlign: "center" }}>Accedez ici</Text>
        </TouchableOpacity>
      </View>

      {/* Section MMI */}
      <View style={{ marginTop: 40 }}>
        <Text style={{ fontSize: 24, fontWeight: "bold", textAlign: "center" }}>
          MÉTIERS DU MULTIMÉDIA ET DE L'INTERNET
        </Text>
        <Text style={{ marginTop: 10 }}>
          Le BUT MMI est une formation à la croisée des chemins entre
          technologie, design et communication.
        </Text>
        <TouchableOpacity
          style={{ backgroundColor: "#007bff", padding: 10, marginTop: 10 }}
          onPress={() => navigation.navigate("Problemes")}
        >
          <Text style={{ color: "white", textAlign: "center" }}>Accedez ici</Text>
        </TouchableOpacity>
      </View>

      {/* Section TC */}
      <View style={{ marginTop: 40 }}>
        <Text style={{ fontSize: 24, fontWeight: "bold", textAlign: "center" }}>
          TECHNIQUES DE COMMERCIALISATION
        </Text>
        <Text style={{ marginTop: 10 }}>
          Le BUT TC prépare les étudiants à intégrer les métiers du commerce,
          du marketing et de la relation client.
        </Text>
        <TouchableOpacity
          style={{ backgroundColor: "#007bff", padding: 10, marginTop: 10 }}
          onPress={() => navigation.navigate("Problemes")}
        >
          <Text style={{ color: "white", textAlign: "center" }}>Accedez ici</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}
