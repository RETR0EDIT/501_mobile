import React, { useState, useRef} from "react";
import {
  View,
  Text,
  Image,
  Linking,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
} from "react-native";
import { useNavigation } from "@react-navigation/native";


const Home = () => {
  const navigation = useNavigation();
  const [isImageExpanded, setIsImageExpanded] = useState(false);

  const scrollViewRef = useRef<ScrollView>(null);
  const formationRef = useRef<View>(null);

  const scrollToFormation = () => {
    formationRef.current?.measure((fx, fy, width, height, px, py) => {
      scrollViewRef.current?.scrollTo({ y: py, animated: true });
    });
  };

  const openLink = (url) => {
    Linking.openURL(url).catch((err) =>
      console.error("An error occurred", err)
    );
  };

  const handleImagePress = () => {
    setIsImageExpanded(!isImageExpanded);
  };

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
            onPress={scrollToFormation}
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
        <Text style={styles.rejoindreTitle}>Comment nous rejoindre ?</Text>
        <View style={styles.rejoindreInfos}>
          <Text style={styles.rejoindreText}>
            Adresse : 17 Rue Jablinot, 77100 Meaux
          </Text>
          <Text style={styles.rejoindreTextTitle}>En transport : </Text>
          <Text style={styles.rejoindreText}>
            {"• Train : Ligne P, Gare de Meaux\n"}
            {"• Bus : Ligne 3, arrêt Médiathèque\n"}
          </Text>
          <Text style={styles.rejoindreTextTitle}>En voiture : </Text>
          <Text style={styles.rejoindreText}>
            {
              "• De Paris : Autoroute A4, sortie Val d'Europe puis direction Chessy-Magny Le Hongre - Meaux\n"
            }
            {"• De la Francilienne : sortie Claye-Souilly - Meaux\n"}
          </Text>
          <TouchableOpacity>
            <Image
              source={require("../../assets/images/carte2.png")}
              style={
                isImageExpanded
                  ? styles.rejoindreImageExpanded
                  : styles.rejoindreImage
              }
            ></Image>
          </TouchableOpacity>
        </View>
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

      {/* 6. Section Formations  */}
      <View ref={formationRef} style={styles.formationSection}>
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

      {/* 7. Section Informations Pratiques */}
      <View style={styles.infosContainer}>
      <Image
            source={require("../../assets/images/background_logo_eiffel.png")}
            style={styles.infosBackground}
            resizeMode="cover"
          />
        <Text style={styles.infosTitle}>Informations pratiques :</Text>
        <Text style={styles.infosText}>Coordonnées :</Text>
        <Text style={styles.infosText1}>
          {"• Adresse : 17 Rue Jablinot - BP 24, 77100 Meaux Cedex\n"}
          {"• Tél. : 01 64 36 44 15\n"}
          {"• Courriel : scolarite.iut@listes.univ-eiffel.fr"}
        </Text>
        <Text style={styles.infosText}>Horaires d'ouverture :</Text>
        <Text style={styles.infosText1}>
          {
            "• Du lundi au jeudi de 9h30 à 12h30 et de 14h00 à 16h30 et le vendredi de 9h30 à 12h30\n"
          }
          {"• Samedi et dimanche fermé\n"}
        </Text>
        <Text style={styles.infosText}>Réseaux sociaux :</Text>
        <Text style={styles.infosText2}>Suivez-nous pour les dernières actualités et évènemets :</Text>
        <Text style={styles.infosText2}>
         
          <Text
            style={styles.link}
            onPress={() =>
              openLink("https://www.facebook.com/profile.php?id=61563123371635")
            }
          >
            • Facebook
          </Text>
          {"\n"}
          <Text
            style={styles.link}
            onPress={() => openLink("https://www.instagram.com/universitegustaveeiffel/")}
          >
            • Instagram
          </Text>
          {"\n"}
          <Text
            style={styles.link}
            onPress={() => openLink("https://www.linkedin.com/school/universit%C3%A9-gustave-eiffel/posts/?feedView=all")}
          >
            • LinkedIn
          </Text>
        </Text>
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
    margin: 10,
    marginLeft: 55,
  },
  iutChiffresColumn: {
    borderWidth: 2,
    borderColor: "#fff",
    borderRadius: 45,
    width: "90%",
    marginLeft: "auto",
    marginRight: "auto",
    marginBottom: 25,
  },
  visitTitle2: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 30,
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

  // 5. Section Comment Nous Rejoindre
  rejoindreInfos: {
    backgroundColor: "#fff",
  },
  rejoindreContainer: {
    margin: 20,
    marginTop: 30,
  },
  rejoindreText: {
    fontSize: 16,
    color: "#black",
    lineHeight: 24,
    marginBottom: 15,
  },
  rejoindreTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#432683",
    marginBottom: 25,
    marginTop: 20,
  },

  rejoindreTextTitle: {
    fontSize: 16,
    color: "#black",
    fontWeight: "bold",
    marginBottom: 5,
  },
  rejoindreImage: {
    width: "100%",
    height: 250,
    resizeMode: "contain",
    marginBottom: 20,
  },
  rejoindreImageExpanded: {
    width: "100%",
    height: 400,
    resizeMode: "contain",
    marginBottom: 20,
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

  // 7. Section Visite Virtuelle
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
    position: "absolute",
    bottom: -30,
    right: -20,
    width: 200,
    height: 190,
    marginBottom: -20,
    marginLeft: 50,
  },
  // 8. Section Informations Pratiques

  infosText: {
    padding: 10,
    fontSize: 20,
    color: "#fff",
  },
  infosText1: {
    padding: 10,
    fontSize: 15,
    color: "#fff",
    marginLeft: 20,
    marginBottom: 20,
  },
  infosContainer: {
    zIndex: -1,
    backgroundColor: "#583E92",
    width: "100%",
    height: 670,
    padding: 20,
  },
  infosTitle: {
    padding: 10,
    fontSize: 30,
    marginBottom: 20,
    marginTop: 40,
    fontWeight: "bold",
    color: "#fff",
  },
  infosText2: {
    marginLeft: 30,
    fontSize: 15,
    color: "#fff",
  },
  infosBackground: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    resizeMode: "cover",
    transform: [{ scaleX: -1 }],
    opacity: 0.5,
  },
});

export default Home;
