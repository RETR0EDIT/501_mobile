import React from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import Apropos from "../Apropos";

const Home = () => {
  const navigation = useNavigation();

  return (
    <ScrollView style={styles.container}>
      {/* 1. Bandeau violet avec logo */}
      <View style={styles.headerBanner}>
        <Image
          source={require("../../assets/images/logo_jpo.png")}
          style={styles.headerLogo}
        />
      </View>

      {/* 2. Section JPO */}
      <View style={styles.jpoMasterContainer}>
        <Image
          source={require("../../assets/images/background_home.png")}
          style={styles.jpoBackgroundImage}
          resizeMode="cover"
        />
        <View style={styles.jpoSection}>
          <View style={styles.jpoTextContainer}>
            <Text style={styles.jpoTitle}>JOURNEE PORTE</Text>
            <Text style={styles.jpoSubtitle}>OUVERTE</Text>
            <Text style={styles.jpoDate}>14 avril 2025</Text>
          </View>
          <TouchableOpacity
            onPress={() => navigation.navigate("Apropos")}
            style={styles.jpoButton}
          >
            <Text style={styles.jpoButtonText}>Découvrir l'IUT</Text>
          </TouchableOpacity>
          <Image
            source={require("../../assets/images/logo_univ3d.png")}
            style={styles.jpoCornerImage}
          />
        </View>
      </View>

      {/* 3. Section À propos */}
      <View style={styles.aproposContainer}>
        <Text style={styles.sectionTitle}>À Propos de l'IUT</Text>
        <Text style={styles.aproposText}>
          L’IUT de Meaux, affilié à l’Université Gustave Eiffel, est un
          établissement d’enseignement supérieur au cœur de l’Île-de-France. Il
          offre un cadre moderne et dynamique, idéal pour développer des
          compétences pratiques et théoriques dans divers domaines.
        </Text>
        <Text style={styles.aproposText}>
          Sa mission : former des étudiants pour devenir des professionnels
          qualifiés et polyvalents grâce à des projets concrets et une pédagogie
          innovante. L’approche professionnalisante de l’IUT, ses
          infrastructures modernes, et ses liens avec le monde de l’entreprise
          en font un choix idéal pour réussir.
        </Text>

        <Text style={styles.aproposText2}>
          Rejoindre l’IUT de Meaux, c’est opter pour :
        </Text>
        <Text style={styles.aproposText3}>
          {"• Une formation adaptée aux besoins actuels.\n"}
          {
            "• Un accompagnement personnalisé dans un environnement à taille humaine.\n"
          }
          {"• De multiples opportunités professionnelles et académiques."}
        </Text>

        <Image
          source={require("../../assets/images/apropos.png")}
          style={styles.aproposImage}
          resizeMode="contain"
        />
      </View>

      {/* 4. Section IUT En Quelques Chiffres  */}
      <View style={styles.iutChiffresContainer}>
        <Image
          source={require("../../assets/images/background_logo_eiffel.png")}
          style={styles.iutChiffresBackground}
        />
        <View style={styles.iutChiffresRow}>
          <Text style={styles.visitTitle2}>L'IUT en quelques chiffres</Text>
          <Text style={styles.iutChiffresTitle}>
            Effectifs rentré 2023-2024
          </Text>
          <View style={styles.iutChiffresColumn}>
            <Text style={styles.iutChiffresNumber}>2211 ETUDIANTS</Text>
            <Text style={styles.iutChiffresText}>
              Répartis sur les sites de Champs-sur-Marne et de Meaux
            </Text>
          </View>
          <Text style={styles.iutChiffresTitle}>Personnels enseignants</Text>
          <View style={styles.iutChiffresColumn}>
            <Text style={styles.iutChiffresNumber}>
              90 ENSEIGNANTS-CHERCHEURS
            </Text>
            <Text style={styles.iutChiffresText}>
              Enseignants et 250 vacataires professionnels
            </Text>
          </View>
          <Text style={styles.iutChiffresTitle}>Personnels administratifs</Text>
          <View style={styles.iutChiffresColumn}>
            <Text style={styles.iutChiffresNumber}>
              40 Personnels administratifs
            </Text>
            <Text style={styles.iutChiffresText}>
              Agents administratifs répartis sur nos 2 sites de Champs-sur-Marne
              et Meaux
            </Text>
          </View>
        </View>
      </View>


      {/* 5. Section Comment Nous Rejoindre */}
      <View style={styles.rejoindreContainer}>


      </View>

      
      {/* 6. Section Formations  */}
      <View style={styles.formationSection}>
        <Text style={styles.sectionTitle}>Nos formations</Text>

        {/* Carte MMI */}
        <TouchableOpacity
          onPress={() => navigation.navigate("Cursus", { section: "mmi" })}
          style={styles.formationCard}
        >
          <Image
            source={require("../../assets/images/mmi.png")}
            style={styles.formationImage}
            resizeMode="cover"
          />
          <View style={styles.formationOverlay}>
            <Text style={styles.formationTitle} numberOfLines={2}>
              Métiers du Multimédia et de l'Internet
            </Text>
          </View>
        </TouchableOpacity>

        {/* Carte TC */}
        <TouchableOpacity
          onPress={() => navigation.navigate("Cursus", { section: "tc" })}
          style={styles.formationCard}
        >
          <Image
            source={require("../../assets/images/tc.png")}
            style={styles.formationImage}
            resizeMode="cover"
          />
          <View style={styles.formationOverlay}>
            <Text style={styles.formationTitle} numberOfLines={2}>
              Techniques de Commercialisation
            </Text>
          </View>
        </TouchableOpacity>

        {/* Carte GEA */}
        <TouchableOpacity
          onPress={() => navigation.navigate("Cursus", { section: "gea" })}
          style={[styles.formationCard, styles.lastFormationCard]}
        >
          <Image
            source={require("../../assets/images/gea.png")}
            style={styles.formationImage}
            resizeMode="cover"
          />
          <View style={styles.formationOverlay}>
            <Text style={styles.formationTitle} numberOfLines={2}>
              Gestion des Entreprises et des Administrations
            </Text>
          </View>
        </TouchableOpacity>
      </View>

      <View style={styles.visitContainer}>
        {/* Fond violet avec logo Eiffel */}
        <Image
          source={require("../../assets/images/background_logo_eiffel.png")}
          style={styles.visitBackgroundImage}
          resizeMode="cover"
        />

        <View style={styles.visitContent}>
          <Text style={styles.visitTitle}>Visite Virtuelle</Text>
          <Text style={styles.visitText}>
            En vue de notre Journée Portes Ouvertes, plongez dans une visite
            virtuelle immersive pour découvrir tout ce qui vous attend à l’IUT
            de Meaux. Familiarisez-vous avec nos locaux, explorez les salles de
            cours, fond vert, réalité virtuelle, et les espaces étudiants avant
            même de venir sur place.
          </Text>

          <View style={styles.visitButtonContainer}>
            <TouchableOpacity
              style={styles.visitButton}
              onPress={() => navigation.navigate("VisiteVirtuelle")}
            >
              <Text style={styles.visitButtonText}>En savoir plus</Text>
            </TouchableOpacity>

            <Image
              source={require("../../assets/images/visite_virtuelle.png")}
              style={styles.visitIllustration}
            />
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f0f0f5",
  },

  // 1. Bandeau violet
  headerBanner: {
    backgroundColor: "#432683",
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  headerLogo: {
    width: 60,
    height: 60,
    resizeMode: "contain",
  },

  // 2. Section JPO
  jpoMasterContainer: {
    height: 300,
    position: "relative",
  },
  jpoBackgroundImage: {
    width: "100%",
    height: "80%",
  },
  jpoSection: {
    position: "absolute",
    left: 20,
    bottom: 0,
    width: "60%",
    backgroundColor: "#432683",
    padding: 15,
    paddingBottom: 10,
  },
  jpoTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff",
  },
  jpoSubtitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 5,
  },
  jpoDate: {
    fontSize: 14,
    color: "#fff",
    fontStyle: "italic",
  },
  jpoButton: {
    backgroundColor: "#fff",
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 0,
    alignSelf: "flex-start",
    marginTop: 10,
  },
  jpoButtonText: {
    color: "#432683",
    fontWeight: "600",
    fontSize: 14,
  },
  jpoCornerImage: {
    position: "absolute",
    right: 8,
    bottom: 5,
    width: 40,
    height: 40,
    resizeMode: "contain",
  },

  // 3. Section À propos
  aproposContainer: {
    padding: 25,
    margin: 20,
    marginTop: 30,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#432683",
    marginBottom: 15,
  },
  aproposText: {
    fontSize: 16,
    color: "#432683",
    lineHeight: 24,
  },
  aproposText2: {
    fontSize: 16,
    color: "#432683",
    lineHeight: 24,
    fontWeight: "bold",
    marginTop: 30,
  },
  aproposText3: {
    fontSize: 15,
    color: "#432683",
    lineHeight: 24,
    marginLeft: 15,
  },
  savoirPlusButton: {
    backgroundColor: "#432683",
    borderRadius: 5,
    paddingVertical: 8,
    paddingHorizontal: 15,
    alignSelf: "flex-end",
    marginTop: 15,
    alignItems: "center",
  },
  savoirPlusText: {
    color: "#fff",
    fontWeight: "600",
    fontSize: 14,
  },
  savoirPlusUnderline: {
    height: 1,
    backgroundColor: "#fff",
    width: "100%",
    marginTop: 3,
  },
  aproposImage: {
    width: "150%",
    height: 300,
    alignSelf: "center",
  },

  // 4. Section IUT En Quelques Chiffres
  iutChiffresContainer: {
    position: "relative",
    padding: 20,
    height: 700,
    backgroundColor: "#583E92",
    justifyContent: "center",
    alignItems: "center",
  },

  iutChiffresBackground: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "120%",
    height: "120%",
    resizeMode: "cover",
    opacity: 0.5,
    transform: [{ scaleX: -1 }],
  },
  iutChiffresTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff",
    margin: 20,
  },
  iutChiffresColumn: {
    borderWidth: 2,
    borderColor: "#fff",
    borderRadius: 45,
    width: "90%",
    margin: "auto",
  },
  visitTitle2: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 15,
  },
  iutChiffresRow: {},

  iutChiffresNumber: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
    paddingTop: 10,
    margin: "auto",
  },
  iutChiffresText: {
    fontSize: 16,
    color: "#fff",
    margin: "auto",
    padding: 20,
    textAlign: "center",
  },

  // 6. Section Formations
  formationSection: {
    padding: 20,
    marginHorizontal: 20,
    marginBottom: 20,
  },
  formationCard: {
    height: 200,
    borderRadius: 10,
    overflow: "hidden",
    marginBottom: 20,
    position: "relative",
  },
  formationImage: {
    width: "100%",
    height: "100%",
  },
  formationOverlay: {
    position: "absolute",
    bottom: 0,
    left: 2,
    backgroundColor: "rgba(67, 38, 131, 0.85)",
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderBottomLeftRadius: 5,
    width: "80%",
  },
  formationTitle: {
    color: "#fff",
    fontWeight: "600",
    fontSize: 14,
    flexShrink: 1,
  },
  lastFormationCard: {
    marginBottom: -60,
    zIndex: 1,
  },

  // 5. Section Visite Virtuelle
  visitContainer: {
    backgroundColor: "#583E92",
    paddingTop: 50,
    paddingBottom: 40,
    paddingHorizontal: 20,
    position: "relative",
    marginBottom: 50,
    overflow: "hidden",
    zIndex: -1,
  },
  visitBackgroundImage: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    width: "100%",
    height: "100%",
    opacity: 0.5,
    resizeMode: "contain",
    zIndex: 1,
  },
  visitContent: {
    position: "relative",
    zIndex: 2,
  },
  visitTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 15,
  },
  visitText: {
    fontSize: 16,
    color: "#fff",
    lineHeight: 24,
    marginBottom: 25,
    maxWidth: "80%",
  },
  visitButtonContainer: {
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "space-between",
  },
  visitButton: {
    flexDirection: "column",
    alignItems: "flex-start",
  },
  visitButtonText: {
    color: "#fff",
    fontWeight: "600",
    fontSize: 14,
    textDecorationLine: "underline",
    marginBottom: 100,
  },
  visitButtonArrow: {
    width: 24,
    height: 24,
    marginLeft: 10,
  },
  visitIllustration: {
    width: 200,
    height: 150,
    marginBottom: -20,
    marginLeft: 50,
  },
});

export default Home;
