import React from "react";
import { Text, View } from "@/components/Themed";
import { SafeAreaView, ScrollView, StyleSheet } from "react-native";

export default function Apropos() {
  return (
    <SafeAreaView style={[styles.container, { backgroundColor: "#fff" }]}>
      <ScrollView contentContainerStyle={[styles.content, { backgroundColor: "#fff" }]}>
        <View style={styles.section}>
          <Text style={styles.title}>À propos de l'IUT</Text>
          <Text style={styles.text}>
            L’IUT de Meaux, affilié à l’Université Gustave Eiffel, est un établissement d’enseignement supérieur au cœur de l’Île-de-France. Il offre un cadre moderne et dynamique, idéal pour développer des compétences pratiques et théoriques dans divers domaines.
          </Text>
          <Text style={styles.text}>
            Sa mission : former des étudiants pour devenir des professionnels qualifiés et polyvalents grâce à des projets concrets et une pédagogie innovante. L’approche professionnalisante de l’IUT, ses infrastructures modernes, et ses liens avec le monde de l’entreprise en font un choix idéal pour réussir.
          </Text>
          <Text style={styles.text2}>
            Rejoindre l’IUT de Meaux, c’est opter pour :
          </Text>
          <Text style={styles.text3}>
            {"- Une formation adaptée aux besoins actuels.\n"}
            {"- Un accompagnement personnalisé dans un environnement à taille humaine.\n"}
            {"- De multiples opportunités professionnelles et académiques."}
          </Text>
        </View>
      
      
        <View style={styles.section2}>
          <Text style={styles.title2}>INFORMATIONS PRATIQUES</Text>
          <Text style={styles.text}>
            L’IUT de Meaux, affilié à l’Université Gustave Eiffel, est un établissement d’enseignement supérieur au cœur de l’Île-de-France. Il offre un cadre moderne et dynamique, idéal pour développer des compétences pratiques et théoriques dans divers domaines.
          </Text>
          <Text style={styles.text}>
            Sa mission : former des étudiants pour devenir des professionnels qualifiés et polyvalents grâce à des projets concrets et une pédagogie innovante. L’approche professionnalisante de l’IUT, ses infrastructures modernes, et ses liens avec le monde de l’entreprise en font un choix idéal pour réussir.
          </Text>
          <Text style={styles.text2}>
            Rejoindre l’IUT de Meaux, c’est opter pour :
          </Text>
          <Text style={styles.text3}>
            {"- Une formation adaptée aux besoins actuels.\n"}
            {"- Un accompagnement personnalisé dans un environnement à taille humaine.\n"}
            {"- De multiples opportunités professionnelles et académiques."}
          </Text>
        </View>
        </ScrollView>
    </SafeAreaView>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  content: {
  
  },
  section: {
    marginBottom: 20,
  },
  title: {
    fontSize: 35,
    fontWeight: "bold",
    color: "#432683",
    marginBottom: 25,
    padding: 10,
  },
  text: {
    padding: 10,
    fontSize: 18,
    color: "#333",
    marginBottom: 10,
  },
  text2: {
    fontSize: 19,
    color: "#432683",
    marginBottom: 10,
    fontWeight: "bold",
    marginTop: 10,
    padding: 10,
  },
  text3: {
    padding: 10,
    fontSize: 18,
    color: "#333",
    marginLeft: 20,
  },

  section2: {
    marginTop: 31,
    backgroundColor: "#432683",
    width: "105%",
  },

  title2: {
    padding: 10,
    fontSize: 30,
    fontWeight: "bold",
    color: "#fff",
    },
});
