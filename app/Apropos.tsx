import React from "react";
import { Text, View } from "@/components/Themed";
import { SafeAreaView, ScrollView, StyleSheet, Image } from "react-native";

export default function Apropos() {
  return (
    <SafeAreaView style={[styles.container, { backgroundColor: "#fff" }]}>
      <ScrollView
        contentContainerStyle={[styles.content, { backgroundColor: "#fff" }]}
      >
        <View style={styles.backgroundimage}>
          <Image
            source={require("../assets/images/background_home.png")}
            style={styles.image}
          />
          <View style={styles.apropos}>
            <Text style={styles.titlep}>À PROPOS</Text>
            <Text style={styles.textp}>
              {"L'iut ?\n"}
              {"Informations pratiques ?\n"}
              {"Plan d'accès ?"}
            </Text>
            <Image
              source={require("../assets/images/logo_univ3d.png")}
              style={styles.image2}
            />
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.title}>À propos de l'IUT</Text>
          <Text style={styles.text}>
            L’IUT de Meaux, affilié à l’Université Gustave Eiffel, est un
            établissement d’enseignement supérieur au cœur de l’Île-de-France.
            Il offre un cadre moderne et dynamique, idéal pour développer des
            compétences pratiques et théoriques dans divers domaines.
          </Text>
          <Text style={styles.text}>
            Sa mission : former des étudiants pour devenir des professionnels
            qualifiés et polyvalents grâce à des projets concrets et une
            pédagogie innovante. L’approche professionnalisante de l’IUT, ses
            infrastructures modernes, et ses liens avec le monde de l’entreprise
            en font un choix idéal pour réussir.
          </Text>
          <Text style={styles.text4}>
            Rejoindre l’IUT de Meaux, c’est opter pour :
          </Text>
          <Text style={styles.text3}>
            {"- Une formation adaptée aux besoins actuels.\n"}
            {
              "- Un accompagnement personnalisé dans un environnement à taille humaine.\n"
            }
            {"- De multiples opportunités professionnelles et académiques."}
          </Text>
        </View>

        <View style={styles.sectioni}>
          <Text style={styles.titlei}>Informations pratiques :</Text>
          <Text style={styles.textc}>Coordonnées :</Text>
          <Text style={styles.textc1}>
            {"- Adresse : 17 Rue Jablinot - BP 24, 77100 Meaux Cedex\n"}
            {"- Tél. : 01 64 36 44 15\n"}
            {"- Courriel : scolarite.iut@listes.univ-eiffel.fr"}
          </Text>
          <Text style={styles.textc}>Horaires d'ouverture :</Text>
          <Text style={styles.textc1}>
            {
              "- Du lundi au jeudi de 9h30 à 12h30 et de 14h00 à 16h30 et le vendredi de 9h30 à 12h30\n"
            }
            {"Samedi et dimanche fermé\n"}
          </Text>
          <Text style={styles.text2}>
            Rejoindre l’IUT de Meaux, c’est opter pour :
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
  content: {},
  backgroundimage: {
    alignItems: "center",
    marginBottom: 20,
  },
  image: {
    width: "100%",
    height: 250,
    resizeMode: "cover",
    marginBottom: 70,
  },
  image2: {
    height: 30,
    width: 30,
    position: "absolute",
    bottom: 10,
    right: 10,
  },
  apropos: {
    backgroundColor: "#432683",
    position: "absolute",
    top: 200,
    left: 50,
    width: "59%",
  },
  titlep: {
    color: "#fff",
    fontSize: 25,
    margin: 10,
  },
  textp: {
    color: "#fff",
    margin: 10,
    fontSize: 15,
  },
  section: {
    marginBottom: 20,
  },
  title: {
    fontSize: 35,
    fontWeight: "bold",
    color: "#432683",
    marginBottom: 20,
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
    color: "#FFF",
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
  text4: {
    fontSize: 19,
    color: "#432683",
    marginBottom: 10,
    fontWeight: "bold",
    marginTop: 10,
    padding: 10,
  },
  textc: {
    padding: 10,
    fontSize: 20,
    color: "#fff",
  },
  textc1: {
    padding: 10,
    fontSize: 15,
    color: "#fff",
    marginLeft: 20,
    marginBottom: 20,
  },
  sectioni: {
    marginTop: 31,
    backgroundColor: "#432683",
    width: "105%",
  },
  titlei: {
    padding: 10,
    fontSize: 30,
    marginBottom: 20,
    fontWeight: "bold",
    color: "#fff",
  },
});
