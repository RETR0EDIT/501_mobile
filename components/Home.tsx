import React from "react";
import {
  View,
  Text,
  Button,
  Image,
  StyleSheet,
  ScrollView,
} from "react-native";
import { useDarkMode } from "./utils/DarkModeContext";

const Home = () => {
  const { isDarkMode } = useDarkMode();

  return (
    <ScrollView style={styles.container}>
      <View style={styles.jpoSection}>
        <View style={styles.jpoContent}>
          <View style={styles.jpoHeader}>
            <Text style={styles.jpoTitle}>caca PORTE OUVERTE</Text>
          </View>
          <Text style={styles.jpoDate}>14 avril 2025</Text>
          <View style={styles.jpoActions}>
            <Button title="Découvrir l’IUT" onPress={() => {}} />
            <Image
              source={require("../assets/images/logo_univ3d.svg")}
              style={styles.jpoImage}
            />
          </View>
        </View>
      </View>

      <View style={styles.aproposSection}>
        <View style={styles.aproposContentLeft}>
          <View style={styles.aproposHeader}>
            <Text style={styles.aproposTitle}>À Propos de l’iut</Text>
          </View>
          <View style={styles.aproposText}>
            <Text>
              Je suis un paragraphe. Cliquez ici pour ajouter votre propre
              texte. Cliquez sur "Modifier Texte" ou double-cliquez ici pour
              ajouter votre contenu et personnaliser les polices. Déplacez-moi
              où vous le souhaitez sur votre page.
            </Text>
            <Text>
              C'est l'espace idéal pour présenter votre entreprise, vos services
              et vos équipes en détails. Présentez votre équipe et les services
              proposés. Racontez l'histoire de votre entreprise et la raison
              pour laquelle elle a été crée.
            </Text>
            <Text>
              services et vos équipes en détails. Présentez votre équipe et les
              services proposés. Racontez l'histoire de votre entreprise et la
              raison pour laquelle elle a été crée.
            </Text>
            <View style={styles.aproposActions}>
              <Button title="En savoir plus" onPress={() => {}} />
              <Image
                source={
                  isDarkMode
                    ? require("../assets/images/arrow_dark.svg")
                    : require("../assets/images/arrow.svg")
                }
                style={styles.aproposImage}
              />
            </View>
          </View>
        </View>
        <View style={styles.aproposContentRight}>
          <Image
            source={require("../assets/images/apropos.svg")}
            style={styles.aproposImage}
          />
        </View>
      </View>

      <View style={styles.nosFormation}>
        <View>
          <Text style={styles.nosFormationTitle}>Nos formations</Text>
          <View style={styles.nosFormationContent}>
            <View style={styles.formationItem}>
              <Image
                source={require("../assets/images/mmi.svg")}
                style={styles.formationImage}
              />
              <Text style={styles.formationText}>Formation 1</Text>
            </View>
            <View style={styles.formationItem}>
              <Image
                source={require("../assets/images/gea.svg")}
                style={styles.formationImage}
              />
              <Text style={styles.formationText}>Formation 2</Text>
            </View>
            <View style={styles.formationItem}>
              <Image
                source={require("../assets/images/tc.svg")}
                style={styles.formationImage}
              />
              <Text style={styles.formationText}>Formation 3</Text>
            </View>
          </View>
        </View>
        <View>
          <View>
            <Text style={styles.visitTitle}>
              Préparez votre visite dès maintenant
            </Text>
            <Text style={styles.visitText}>
              En vue de notre Journée Portes Ouvertes, plongez dans une visite
              virtuelle immersive pour découvrir tout ce qui vous attend à l’IUT
              de Meaux. Familiarisez-vous avec nos locaux, explorez les salles
              de cours, fond vert, réalité virtuelle, et les espaces étudiants
              avant même de venir sur place.
            </Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  jpoSection: {
    marginBottom: 20,
  },
  jpoContent: {
    alignItems: "center",
  },
  jpoHeader: {
    marginBottom: 10,
  },
  jpoTitle: {
    fontSize: 24,
    fontWeight: "bold",
  },
  jpoDate: {
    fontSize: 18,
    marginBottom: 10,
  },
  jpoActions: {
    flexDirection: "row",
    alignItems: "center",
  },
  jpoImage: {
    width: 50,
    height: 50,
    marginLeft: 10,
  },
  aproposSection: {
    marginBottom: 20,
  },
  aproposContentLeft: {
    marginBottom: 20,
  },
  aproposContentRight: {
    alignItems: "center", 
    justifyContent: "center",
    marginBottom: 20,
  },
  aproposHeader: {
    marginBottom: 10,
  },
  aproposTitle: {
    fontSize: 22,
    fontWeight: "bold",
  },
  aproposText: {
    marginBottom: 10,
  },
  aproposActions: {
    flexDirection: "row",
    alignItems: "center",
  },
  aproposImage: {
    width: 20,
    height: 20,
    marginLeft: 10,
  },
  nosFormation: {
    marginBottom: 20,
  },
  nosFormationTitle: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 10,
  },
  nosFormationContent: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  formationItem: {
    alignItems: "center",
  },
  formationImage: {
    width: 50,
    height: 50,
    marginBottom: 5,
  },
  formationText: {
    fontSize: 16,
  },
  visitTitle: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 10,
  },
  visitText: {
    fontSize: 16,
    marginBottom: 10,
  },
  visitImage: {
    width: "100%",
    height: 200,
  },
});

export default Home;
