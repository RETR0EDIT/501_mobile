import React from "react";
import { Text, View } from "@/components/Themed";
import { SafeAreaView, ScrollView, StyleSheet } from "react-native";

export default function Apropos() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        <View style={styles.section}>
          <Text style={styles.title}>À propos de l'IUT</Text>
          <Text style={styles.text}>
            L’IUT de Meaux, affilié à l’Université Gustave Eiffel, est un établissement d’enseignement supérieur au cœur de l’Île-de-France. Il offre un cadre moderne et dynamique, idéal pour développer des compétences pratiques et théoriques dans divers domaines.
          </Text>
          <Text style={styles.text}>
            Sa mission : former des étudiants pour devenir des professionnels qualifiés et polyvalents grâce à des projets concrets et une pédagogie innovante. L’approche professionnalisante de l’IUT, ses infrastructures modernes, et ses liens avec le monde de l’entreprise en font un choix idéal pour réussir.
          </Text>
          <Text style={styles.text}>
            Rejoindre l’IUT de Meaux, c’est opter pour :
          </Text>
          <Text style={styles.text}>
            - Une formation adaptée aux besoins actuels.
          </Text>
          <Text style={styles.text}>
            - Un accompagnement personnalisé dans un environnement à taille humaine.
          </Text>
          <Text style={styles.text}>
            - De multiples opportunités professionnelles et académiques.
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  content: {
    padding: 20,
  },
  section: {
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#432683",
    marginBottom: 10,
  },
  text: {
    fontSize: 16,
    color: "#333",
    marginBottom: 10,
  },
});
