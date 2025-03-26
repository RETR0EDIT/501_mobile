import React, { useEffect } from "react";
import {
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function Cursus() {
  const navigation = useNavigation();

  return (
    <ScrollView>
      <View style={styles.banniere}>
          <Image
            source={require('@/assets/images/logo2.png')}
            style={styles.banniereImage}
          />
        </View>
      <View style={styles.allContainer}>
        
      {/* Section GEA */}
      <View style={styles.geaContainer}>
        <Text style={styles.allTitle}>
          GESTION DES ENTREPRISES ET DES ADMINISTRATIONS
        </Text>
        <Image
        source={require('@/assets/images/banniere_gea.png')}
        style={styles.allImage}
        
        />
        <Text style={styles.allText}>
          le BUT GEA est une formation polyvalente qui forme les étudiants aux
          métiers de la gestion dans des contextes variés : entreprises,
          associations ou administrations. En combinant théorie et pratique, les
          étudiants y apprennent les fondamentaux de la comptabilité, de la
          finance, de la gestion des ressources humaines, du management et de
          l’analyse stratégique. cette formation leur permet de maîtriser les
          outils nécessaires pour piloter les activités administratives et
          financières d’une organisation, tout en s’adaptant aux besoins du
          marché et aux évolutions économiques. 
        </Text>
        <Text style={styles.allText}>grâce à une spécialisation
          progressive, les étudiants peuvent choisir parmi quatre parcours leur
          permettant de se concentrer sur des domaines spécifiques (voir
          ci-dessous). Le BUT GEA forme ainsi des professionnels capables de
          produire des solutions adaptées et stratégiques pour améliorer la
          performance des entreprises, tout en favorisant une gestion optimale
          de leurs ressources.</Text>
        <TouchableOpacity
          style={{ backgroundColor: "#007bff", padding: 10, marginTop: 10 }}
          onPress={() => navigation.navigate("Problemes")}
        >
          <Text style={{ color: "white", textAlign: "center" }}>
            Accedez ici
          </Text>
        </TouchableOpacity>
      </View>

      {/* Section MMI */}
      <View style={styles.mmiContainer}>
        
        <Text style={styles.allTitle}>
          MÉTIERS DU MULTIMÉDIA ET DE L'INTERNET
        </Text>
        <Image
        source={require('@/assets/images/mmi.png')}
        style={styles.allImage}
        
        />
        <Text>
          Le BUT MMI est une formation à la croisée des chemins entre
          technologie, design et communication.
        </Text>
        <TouchableOpacity
          style={{ backgroundColor: "#007bff", padding: 10, marginTop: 10 }}
          onPress={() => navigation.navigate("Problemes")}
        >
          <Text style={{ color: "white", textAlign: "center" }}>
            Accedez ici
          </Text>
        </TouchableOpacity>
      </View>

      {/* Section TC */}
      <View style={styles.tcContainer}>
        <Text style={styles.allTitle}>TECHNIQUES DE COMMERCIALISATION</Text>
        <Image
        source={require('@/assets/images/tc.png')}
        style={styles.allImage}
        
        />
        <Text>
          Le BUT TC prépare les étudiants à intégrer les métiers du commerce, du
          marketing et de la relation client.
        </Text>
        <TouchableOpacity
          style={{ backgroundColor: "#007bff", padding: 10, marginTop: 10 }}
          onPress={() => navigation.navigate("Problemes")}
        >
          <Text style={{ color: "white", textAlign: "center" }}>
            Accedez ici
          </Text>
        </TouchableOpacity>
      </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  banniere: {
    height: 50,
    marginBottom: 20,
    backgroundColor: "#432683",
    width: "100%",
  },
  banniereImage: {
    width: "20%",
    height: 35,
    marginTop: 10,
    marginLeft: "auto",
    marginRight: "auto",
  },
  allTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#432683",
    marginBottom: 10,
    marginLeft: 10,
  },
  allContainer: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",

  },
  allText: {
    fontSize: 16,
    marginTop: 10,
  },

  allImage: {
    width: "100%",
    height: 200,
    marginBottom: 10,
  },


  //Section GEA
  geaContainer: {
    marginBottom: 20,
  },
  

  //Section MMI
  mmiContainer: {
    marginBottom: 20,
  },

  //Section TC
  tcContainer: {
    marginBottom: 20,
  },
});
