import React, { useState, useEffect, useRef } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  Image,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Accounts from "@/src/services/Accounts";
import { useDarkMode } from "./utils/DarkModeContext";

const Login: React.FC = () => {
  const { isDarkMode } = useDarkMode();
  const [loginData, setLoginData] = useState({
    login: "",
    password: "",
  });
  const [message, setMessage] = useState("");
  const titleRef = useRef(null);

  const handleChange = (name: string, value: string) => {
    setLoginData({ ...loginData, [name]: value });
  };

  const handleSubmit = async () => {
    try {
      const response = await Accounts.Login(loginData);
      if (response) {
        setMessage("Connexion réussie");
        await AsyncStorage.setItem("userId", response.id);
        await AsyncStorage.setItem("userRole", response.role);

        if (response.role === "professeur") {
          navigation.navigate("Professeur");
        } else {
          navigation.navigate("Visiteur");
        }
      } else {
        setMessage("Erreur lors de la connexion");
        console.log("Réponse de l'API", response);
      }
    } catch (err) {
      setMessage("Erreur lors de la connexion");
      console.error("Erreur lors de la connexion", err);
    }
  };

  useEffect(() => {
    const titleElement = titleRef.current;
    if (titleElement && titleElement.scrollHeight > titleElement.clientHeight) {
      titleElement.classList.add("shrink");
    }
  }, []);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.welcomeSection}>
        <View style={styles.welcomeTitle}>
          <Text ref={titleRef} style={styles.title}>
            Bienvenue sur le site de la Journée porte ouverte
          </Text>
        </View>
        <View style={styles.welcomeTxt}>
          <Text>Connectez-vous pour accéder à toutes les informations.</Text>
        </View>
        <View style={styles.divLoginLogo}>
          <Image
            source={require("../assets/images/logo_login.svg")}
            style={styles.loginLogo}
          />
        </View>
      </View>
      <View style={styles.loginSection}>
        <View style={styles.loginCtn}>
          <Image
            source={
              isDarkMode
                ? require("../assets/images/login_title_dark.svg")
                : require("../assets/images/login_title.svg")
            }
            style={styles.loginFormTitle}
          />

          <View style={styles.loginForm}>
            <View style={styles.inputCtn}>
              <Text style={styles.loginSpan}>E-mail</Text>
              <TextInput
                style={styles.loginInput}
                placeholder="Exemple@gmail.com"
                value={loginData.login}
                onChangeText={(value) => handleChange("login", value)}
                required
              />
            </View>
            <View style={styles.inputCtn}>
              <Text style={styles.loginSpan}>Mot de passe</Text>
              <TextInput
                style={styles.loginInput}
                placeholder="***************"
                value={loginData.password}
                onChangeText={(value) => handleChange("password", value)}
                secureTextEntry
                required
              />
            </View>

            <TouchableOpacity onPress={handleSubmit} style={styles.loginButton}>
              <Text>Se connecter</Text>
              <Image
                source={
                  isDarkMode
                    ? require("../assets/images/arrow_dark.svg")
                    : require("../assets/images/arrow.svg")
                }
                style={styles.loginButtonIcon}
              />
            </TouchableOpacity>
          </View>
          {message && <Text style={styles.loginMessage}>{message}</Text>}
        </View>
      </View>
      <Image
        source={require("../assets/images/Elispe.svg")}
        style={styles.elipse}
      />
      <Image
        source={require("../assets/images/Elipse_2.svg")}
        style={styles.elipse2}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: "#fff",
  },
  welcomeSection: {
    marginBottom: 20,
  },
  welcomeTitle: {
    marginBottom: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
  welcomeTxt: {
    marginBottom: 20,
  },
  divLoginLogo: {
    alignItems: "center",
    marginBottom: 20,
  },
  loginLogo: {
    width: 100,
    height: 100,
  },
  loginSection: {
    marginBottom: 20,
  },
  loginCtn: {
    alignItems: "center",
  },
  loginFormTitle: {
    width: 200,
    height: 50,
    marginBottom: 20,
  },
  loginForm: {
    width: "100%",
  },
  inputCtn: {
    marginBottom: 20,
  },
  loginSpan: {
    marginBottom: 5,
  },
  loginInput: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    borderRadius: 5,
  },
  loginButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    backgroundColor: "#007bff",
    borderRadius: 5,
  },
  loginButtonIcon: {
    width: 20,
    height: 20,
    marginLeft: 10,
  },
  loginMessage: {
    marginTop: 20,
    color: "red",
  },
  elipse: {
    position: "absolute",
    bottom: 0,
    left: 0,
    width: 100,
    height: 100,
  },
  elipse2: {
    position: "absolute",
    bottom: 0,
    right: 0,
    width: 100,
    height: 100,
  },
});

export default Login;
