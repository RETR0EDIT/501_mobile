import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

const Footer: React.FC = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.footerCtn}>
      <View style={styles.footerTitle}>
        <Text style={styles.title}>NOUS CONTACTER</Text>
      </View>
      <View style={styles.footerDiv}>
        <View style={styles.footerContent}>
          <View style={styles.footerFlex}>
            <View style={styles.footerAddress}>
              <Text>IUT GUSTAVE EIFFEL - MEAUX</Text>
              <Text>7 Rue Jablinot</Text>
              <Text>77123 Meaux, France</Text>
            </View>
            <View style={styles.footerContact}>
              <View>
                <Text id="tel">Tel: 01 21 51 64 15</Text>
              </View>
              <View>
                <Text id="email">E-mail : IutMeaux@gmail.com</Text>
              </View>
            </View>
          </View>
          <View style={styles.footerLogo}>
            <Image
              source={require("../assets/images/logo_jpo.svg")}
              style={styles.logo}
            />
            <Text>IUT Meaux. Dev MMI © 2024</Text>
          </View>
        </View>

        <View style={styles.footerSocial}>
          <View style={styles.socialIcons}>
            <Image
              source={require("../assets/images/facebook.svg")}
              style={styles.icon}
            />
            <Image
              source={require("../assets/images/youtube.svg")}
              style={styles.icon}
            />
            <Image
              source={require("../assets/images/linkedin.svg")}
              style={styles.icon}
            />
          </View>
          <View style={styles.footerLinks}>
            <TouchableOpacity
              onPress={() => navigation.navigate("MentionsLegales")}
            >
              <Text style={styles.footerLink}>Mentions légales</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate("PolitiqueConfidentialite")}
            >
              <Text style={styles.footerLink}>
                Politique de confidentialité
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate("PolitiqueCookies")}
            >
              <Text style={styles.footerLink}>Politique de cookies</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  footerCtn: {
    padding: 20,
    backgroundColor: "#f8f8f8",
  },
  footerTitle: {
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
  footerDiv: {
    marginBottom: 20,
  },
  footerContent: {
    marginBottom: 20,
  },
  footerFlex: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  footerAddress: {
    marginBottom: 10,
  },
  footerContact: {
    marginBottom: 10,
  },
  footerLogo: {
    alignItems: "center",
    marginBottom: 20,
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 10,
  },
  footerSocial: {
    alignItems: "center",
  },
  socialIcons: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 10,
  },
  icon: {
    width: 30,
    height: 30,
    marginHorizontal: 10,
  },
  footerLinks: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  footerLink: {
    fontSize: 16,
    color: "#007bff",
  },
});

export default Footer;
