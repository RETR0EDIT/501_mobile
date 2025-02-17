import React, { useState } from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { useDarkMode } from "./utils/DarkModeContext";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isDarkMode, toggleDarkMode } = useDarkMode();
  const navigation = useNavigation();
  const route = useRoute();
  const [userRole, setUserRole] = useState<string | null>(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLogout = async () => {
    await AsyncStorage.removeItem("userRole");
    setUserRole(null);
    navigation.navigate("Login");
  };

  const getUserRole = async () => {
    const role = await AsyncStorage.getItem("userRole");
    setUserRole(role);
  };

  React.useEffect(() => {
    getUserRole();
  }, []);

  return (
    <View
      style={[
        styles.headerNav,
        (route.name === "Login" || route.name === "SignIn") && styles.loginPage,
        isDarkMode && styles.darkMode,
      ]}
    >
      <TouchableOpacity style={styles.burgerMenu} onPress={toggleMenu}>
        <View style={styles.burgerBar}></View>
        <View style={styles.burgerBar}></View>
        <View style={styles.burgerBar}></View>
      </TouchableOpacity>
      <View style={styles.navCtn}>
        <View
          style={[styles.navList, styles.mainNav, isMenuOpen && styles.open]}
        >
          <TouchableOpacity
            style={styles.navItem}
            onPress={() => navigation.navigate("Home")}
          >
            <Image
              source={require("../assets/images/assets/assets/logo_jpo.png")}
              style={styles.jpoLogo}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.navItem}
            onPress={() => navigation.navigate("RoomTour")}
          >
            <Text style={styles.navLink}>Visite virtuelle</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.navItem}
            onPress={() => navigation.navigate("Cursus")}
          >
            <Text style={styles.navLink}>Cursus</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.navItem}
            onPress={() => navigation.navigate("SignIn")}
          >
            <Text style={styles.navLink}>À propos</Text>
          </TouchableOpacity>
          {(userRole === "OTHER" || userRole === "USER") && (
            <TouchableOpacity
              style={styles.navItem}
              onPress={() => navigation.navigate("Visiteur")}
            >
              <Text style={styles.navLink}>Visiteur</Text>
            </TouchableOpacity>
          )}
          {userRole === "PROFESSEUR" && (
            <TouchableOpacity
              style={styles.navItem}
              onPress={() => navigation.navigate("Professeur")}
            >
              <Text style={styles.navLink}>Professeur</Text>
            </TouchableOpacity>
          )}
        </View>
        <View style={styles.authSection}>
          <View style={styles.divTest}>
            <View
              style={[
                styles.navList,
                styles.authNav,
                isMenuOpen && styles.open,
              ]}
            >
              {!userRole && route.name !== "SignIn" && (
                <TouchableOpacity
                  style={styles.navItem}
                  onPress={() => navigation.navigate("SignIn")}
                >
                  <Text style={styles.navLink}>S’inscrire</Text>
                </TouchableOpacity>
              )}
              {!userRole && route.name !== "Login" && (
                <TouchableOpacity
                  style={styles.navItem}
                  onPress={() => navigation.navigate("Login")}
                >
                  <Text style={styles.navLink}>Se connecter</Text>
                </TouchableOpacity>
              )}
              {userRole && (
                <TouchableOpacity
                  style={styles.navItem}
                  onPress={() =>
                    navigation.navigate(
                      userRole === "professeur"
                        ? "ProfesseurProfils"
                        : "VisiteurProfils"
                    )
                  }
                >
                  <Image
                    source={
                      isDarkMode
                        ? require("../assets/images/assets/assets/profils_dark.png")
                        : require("../assets/images/assets/assets/profils.png")
                    }
                    style={styles.icon}
                  />
                </TouchableOpacity>
              )}
              {userRole && (
                <TouchableOpacity style={styles.navItem} onPress={handleLogout}>
                  <Image
                    source={
                      isDarkMode
                        ? require("../assets/images/assets/assets/logout_dark.png")
                        : require("../assets/images/assets/assets/logout.png")
                    }
                    style={styles.icon}
                  />
                </TouchableOpacity>
              )}
            </View>
            <TouchableOpacity
              style={styles.themeToggleButton}
              onPress={toggleDarkMode}
            >
              <Image
                source={
                  isDarkMode
                    ? require("../assets/images/assets/moon.png")
                    : require("../assets/images/assets/assets/sun.png")
                }
                style={styles.themeToggle}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerNav: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 10,
    backgroundColor: "#fff",
  },
  loginPage: {
    backgroundColor: "#f0f0f0",
  },
  darkMode: {
    backgroundColor: "#333",
  },
  burgerMenu: {
    padding: 10,
  },
  burgerBar: {
    width: 25,
    height: 3,
    backgroundColor: "#000",
    marginVertical: 2,
  },
  navCtn: {
    flexDirection: "row",
    alignItems: "center",
  },
  navList: {
    flexDirection: "row",
    alignItems: "center",
  },
  mainNav: {
    marginRight: 20,
  },
  open: {
    display: "flex",
  },
  navItem: {
    marginHorizontal: 10,
  },
  navLink: {
    fontSize: 16,
    color: "#007bff",
  },
  jpoLogo: {
    width: 50,
    height: 50,
  },
  authSection: {
    flexDirection: "row",
    alignItems: "center",
  },
  divTest: {
    flexDirection: "row",
    alignItems: "center",
  },
  authNav: {
    flexDirection: "row",
    alignItems: "center",
  },
  icon: {
    width: 20,
    height: 20,
    marginHorizontal: 10,
  },
  themeToggleButton: {
    padding: 10,
  },
  themeToggle: {
    width: 20,
    height: 20,
  },
});

export default Header;
