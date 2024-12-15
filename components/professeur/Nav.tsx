import React, { useState } from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { useDarkMode } from "../utils/DarkModeContext";
import { useNavigation } from "@react-navigation/native";
import "../styles/visiteur/nav.css";

const NavProf = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isDarkMode, toggleDarkMode } = useDarkMode();
  const navigation = useNavigation();
  const userRole = localStorage.getItem("userRole");

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLogout = () => {
    localStorage.removeItem("userRole");
    navigation.navigate("Login");
  };

  return (
    <View style={[styles.headerNav, isDarkMode && styles.darkMode]}>
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
              source={require("../../assets/images/logo_jpo.svg")}
              style={styles.jpoLogo}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.navItem}
            onPress={() => navigation.navigate("HomeProf")}
          >
            <Text style={styles.navLink}>Home</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.navItem}
            onPress={() => navigation.navigate("Stats")}
          >
            <Text style={styles.navLink}>Stats</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.navItem}
            onPress={() => navigation.navigate("Template")}
          >
            <Text style={styles.navLink}>Template</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.navItem}
            onPress={() => navigation.navigate("Monitoring")}
          >
            <Text style={styles.navLink}>Monitoring</Text>
          </TouchableOpacity>
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
              <TouchableOpacity
                style={styles.navItem}
                onPress={() =>
                  navigation.navigate(
                    userRole === "professeur"
                      ? "ProfilsProf"
                      : "ProfilsVisiteur"
                  )
                }
              >
                <Image
                  source={
                    isDarkMode
                      ? require("../../assets/images/profils_dark.svg")
                      : require("../../assets/images/profils.svg")
                  }
                />
              </TouchableOpacity>
              <TouchableOpacity style={styles.navItem} onPress={handleLogout}>
                <Image
                  source={
                    isDarkMode
                      ? require("../../assets/images/logout_dark.svg")
                      : require("../../assets/images/logout.svg")
                  }
                />
              </TouchableOpacity>
            </View>
            <TouchableOpacity
              style={styles.themeToggleButton}
              onPress={toggleDarkMode}
            >
              <Image
                source={
                  isDarkMode
                    ? require("../../assets/images/moon.svg")
                    : require("../../assets/images/sun.svg")
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

const styles = {
  headerNav: {
    // styles for headerNav
  },
  darkMode: {
    // styles for dark mode
  },
  burgerMenu: {
    // styles for burger menu
  },
  burgerBar: {
    // styles for burger bar
  },
  navCtn: {
    // styles for nav container
  },
  navList: {
    // styles for nav list
  },
  mainNav: {
    // styles for main nav
  },
  open: {
    // styles for open menu
  },
  navItem: {
    // styles for nav item
  },
  jpoLogo: {
    // styles for logo
  },
  navLink: {
    // styles for nav link
  },
  authSection: {
    // styles for auth section
  },
  divTest: {
    // styles for div test
  },
  authNav: {
    // styles for auth nav
  },
  themeToggleButton: {
    // styles for theme toggle button
  },
  themeToggle: {
    // styles for theme toggle
  },
};

export default NavProf;
