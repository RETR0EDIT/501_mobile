import React, { useState, useEffect, useRef } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
} from "react-native";

import Accounts from "@/src/services/Accounts";

const Login: React.FC = ({ navigation }) => {
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
        <View>
          <Text style={styles.welcomeTxt}>
            Connectez-vous pour accéder à toutes les informations.
          </Text>
        </View>
        <View style={styles.divLoginLogo}></View>
      </View>
      <View style={styles.loginSection}>
        <View style={styles.loginCtn}>
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
              <Text style={styles.loginButtonText}>Se connecter</Text>
            </TouchableOpacity>
          </View>
          {message && <Text style={styles.loginMessage}>{message}</Text>}
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
  },
  welcomeSection: {
    alignItems: "center",

    padding: 20,
    backgroundColor: "#432683",
  },
  welcomeTitle: {
    marginBottom: 20,
  },
  title: {
    color: "#fff",
    fontFamily: "TT Norms Pro Regular",
    fontSize: 24,
    textAlign: "center",
  },
  welcomeTxt: {
    color: "#fff",
    fontFamily: "TT Norms Pro Regular",
    fontSize: 18,
    textAlign: "center",
  },
  divLoginLogo: {
    marginTop: 20,
  },
  loginSection: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  loginCtn: {
    justifyContent: "center",
    alignItems: "center",
    width: "80%",
    padding: 20,
    backgroundColor: "#fff",
    borderRadius: 25,
    borderWidth: 2,
    borderColor: "#432683",
  },
  loginForm: {
    width: "100%",
  },
  inputCtn: {
    marginBottom: 20,
  },
  loginSpan: {
    fontFamily: "TT Norms Pro Regular",
    color: "#432683",
    marginBottom: 5,
  },
  loginInput: {
    width: "100%",
    padding: 10,
    borderWidth: 1,
    borderColor: "#432683",
    borderRadius: 10,
  },
  loginButton: {
    padding: 10,
    backgroundColor: "#432683",
    borderRadius: 10,
    alignItems: "center",
  },
  loginButtonText: {
    color: "#fff",
  },
  loginMessage: {
    marginTop: 20,
    color: "red",
  },
});

export default Login;
