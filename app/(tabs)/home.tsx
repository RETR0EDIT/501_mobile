import React, { useEffect } from "react";
import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { StyleSheet } from "react-native";

const Home = () => {
  const navigation = useNavigation();

  return (
    <ScrollView style={styles.container}>
      {/* Section JPO */}
      <View style={styles.jpoSection}>
        <Text style={styles.jpoTitle}>JOURNÉE PORTE OUVERTE</Text>
        <Text style={styles.jpoDate}>14 avril 2025</Text>
        <TouchableOpacity onPress={() => navigation.navigate("Apropos")}>
          <View style={styles.buttonContainer}>
            <Text style={styles.buttonText}>Découvrir l’IUT</Text>
          </View>
        </TouchableOpacity>
        <Image
          source={require("../../assets/images/logo_univ3d.png")}
          style={styles.jpoImage}
        />
      </View>

      {/* Section À propos */}
      <View style={styles.aproposSection}>
        <Text style={styles.aproposTitle}>À Propos de l’IUT</Text>
        <Text style={styles.aproposText}>
          L’IUT de Meaux, affilié à l’Université Gustave Eiffel, est un
          établissement d’enseignement supérieur au cœur de l’Île-de-France...
        </Text>
        <Image
          source={require("../../assets/images/apropos.png")}
          style={styles.aproposImage}
        />
      </View>

      {/* Section Formations */}
      <View style={styles.formationSection}>
        <Text style={styles.formationTitle}>Nos formations</Text>
        <View style={styles.formationList}>
          <TouchableOpacity
            onPress={() => navigation.navigate("Cursus", { section: "mmi" })}
          >
            <Image
              source={require("../../assets/images/mmi.png")}
              style={styles.formationImage}
            />
            <Text style={styles.formationDescription}>
              Métiers du Multimédia et de l'Internet
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate("Cursus", { section: "gea" })}
          >
            <Image
              source={require("../../assets/images/gea.png")}
              style={styles.formationImage}
            />
            <Text style={styles.formationDescription}>
              Gestion des Entreprises et des Administrations
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate("Cursus", { section: "tc" })}
          >
            <Image
              source={require("../../assets/images/tc.png")}
              style={styles.formationImage}
            />
            <Text style={styles.formationDescription}>
              Techniques de Commercialisation
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f0f0f5", // Couleur de fond plus douce
  },

  jpoSection: {
    width: "100%",
    height: 300,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#432683",
    padding: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5, // Ombre pour Android
  },
  jpoTitle: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#fff",
    textAlign: "center",
    textTransform: "uppercase",
    letterSpacing: 1.5,
  },
  jpoDate: {
    fontSize: 18,
    color: "#fff",
    marginVertical: 10,
    fontStyle: "italic",
  },
  buttonContainer: {
    backgroundColor: "#fff",
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 25,
    marginTop: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 3,
  },
  buttonText: {
    fontSize: 16,
    color: "#432683",
    fontWeight: "600",
    textTransform: "uppercase",
  },
  jpoImage: {
    width: 120,
    height: 120,
    resizeMode: "contain",
    marginTop: 15,
  },

  aproposSection: {
    padding: 20,
    backgroundColor: "#fff",
    marginVertical: 10,
    borderRadius: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  aproposTitle: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#432683",
    marginBottom: 10,
    textAlign: "center",
  },
  aproposText: {
    fontSize: 16,
    color: "#333",
    lineHeight: 24,
    textAlign: "justify",
  },
  aproposImage: {
    width: "100%",
    height: 200,
    resizeMode: "cover",
    borderRadius: 10,
    marginTop: 20,
  },

  formationSection: {
    padding: 20,
    backgroundColor: "#f8f8f8",
    borderRadius: 15,
    marginVertical: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  formationTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#432683",
    textAlign: "center",
    marginBottom: 15,
  },
  formationList: {
    alignItems: "center",
  },
  formationImage: {
    width: 110,
    height: 110,
    alignSelf: "center",
    resizeMode: "contain",
    marginVertical: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#ddd",
  },
  formationDescription: {
    fontSize: 16,
    textAlign: "center",
    color: "#432683",
    marginTop: 5,
  },

  visitSection: {
    padding: 20,
    backgroundColor: "#fff",
    alignItems: "center",
    borderRadius: 15,
    marginVertical: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  visitTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#432683",
    textAlign: "center",
    marginBottom: 10,
  },
  visitDescription: {
    fontSize: 16,
    color: "#333",
    textAlign: "center",
    lineHeight: 24,
    marginBottom: 20,
  },
});
