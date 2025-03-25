import React, { useState, useRef } from "react";
import { useRouter } from "expo-router";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Image,
  StyleSheet,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Accounts from "@/src/services/Accounts";

const Login: React.FC = () => {
  const router = useRouter();
  const [loginData, setLoginData] = useState({ login: "", password: "" });
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

        router.push("/home");
      } else {
        setMessage("Erreur lors de la connexion");
        console.log("Réponse de l'API", response);
      }
    } catch (err) {
      setMessage("Erreur lors de la connexion");
      console.error("Erreur lors de la connexion", err);
    }
  };

  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/images/logo_jpo.png")}
        style={styles.loginjpo}
      />

      <Image
        source={require("../assets/images/background_logo_eiffel.png")}
        style={styles.loginfond}
      />
      <View style={styles.loginSection}>
        <View style={styles.loginCtn}>
          <Image
            source={require("../assets/images/login_title_dark.png")}
            style={styles.loginImg}
          />
          <View style={styles.loginForm}>
            <View style={styles.inputCtn}>
              <TextInput
                style={styles.loginInput}
                placeholder="E-mail"
                value={loginData.login}
                onChangeText={(value) => handleChange("login", value)}
                required
              />
            </View>
            <View style={styles.inputCtn}>
              <TextInput
                style={styles.loginInput}
                placeholder="Mot de passe"
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
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#432683",
  },
  loginfond: {
    position: "absolute",
    width: "100%",
    height: "100%",
    zIndex: -2,
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
    padding: 30,
  },
  loginForm: {
    width: "100%",
  },
  loginImg: {
    marginBottom: 50,
  },
  inputCtn: {
    marginBottom: 20,
    backgroundColor: "#fff",
    color: "#432683",
    borderRadius: 10,
  },
  loginSpan: {
    color: "#432683",
    marginBottom: 5,
  },
  loginInput: {
    color: "#432683",
    width: "100%",
    padding: 10,
    height: 55,

    borderRadius: 10,
  },
  loginButton: {
    padding: 10,
    width: 200,
    height: 60,
    justifyContent: "center",
    alignSelf: "center",
    borderRadius: 10,
    alignItems: "center",
  },
  loginButtonText: {
    color: "#fff",
    borderColor: "#fff",
    borderWidth: 1,
    width: 200,
    height: 60,
    textAlign: "center",
    padding: 20,
    borderRadius: 10,
  },
  loginMessage: {
    marginTop: 20,
    color: "red",
  },
  loginjpo: {
    position: "absolute",
    top: 20,
    left: 20,
    width: 100,
    height: 100,
    resizeMode: "contain",
  },
});

export default Login;
