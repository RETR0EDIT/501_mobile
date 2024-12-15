import React, { useState } from "react";
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
import Accounts from "@/src/services/Accounts";
import { useDarkMode } from "./utils/DarkModeContext";
import ModelAccount from "@/src/models/ModelAccount";

const Signin = () => {
  const { isDarkMode } = useDarkMode();
  const [accountData, setAccountData] = useState<ModelAccount>({
    id: 0,
    login: "",
    password: "",
    firstname: "",
    lastname: "",
    city: "",
    study: "",
    role: "USER",
    phone: "",
    image: "",
    createdat: new Date(),
    editedat: new Date(),
    valid: false,
    date: new Date(),
  });
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleChange = (name: string, value: string) => {
    if (name === "confirmPassword") {
      setConfirmPassword(value);
    } else {
      setAccountData((prevData) => ({
        ...prevData,
        [name]: value,
        ...(name === "email" && { login: value }),
      }));
    }
  };

  const handleRoleChange = (value: string) => {
    setAccountData((prevData) => ({
      ...prevData,
      role: value === "PROF" ? "PROFESSEUR" : value,
    }));
  };

  const handleSubmit = async () => {
    if (accountData.password !== confirmPassword) {
      setMessage("Les mots de passe ne correspondent pas");
      return;
    }
    try {
      let trueAccountData = await Accounts.Create(accountData);
      setMessage("Compte créé avec succès");
    } catch (err) {
      setMessage("Erreur lors de la création du compte");
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.welcomeSection}>
        <View style={styles.welcomeTitle}>
          <Text style={styles.title}>
            Bienvenue sur le site de la Journée porte ouverte
          </Text>
        </View>
        <View style={styles.welcomeTxt}>
          <Text>Connectez-vous pour accéder à toutes les informations.</Text>
        </View>
        <View style={styles.divSigninLogo}>
          <Image
            source={require("../assets/images/logo_login.svg")}
            style={styles.signinLogo}
          />
        </View>
      </View>
      <View style={styles.signinSection}>
        <View style={styles.signinCtn}>
          <Image
            source={
              isDarkMode
                ? require("../assets/images/signin_title_dark.svg")
                : require("../assets/images/signin_title.svg")
            }
            style={styles.signinFormTitle}
          />

          <View style={styles.signinForm}>
            <View style={styles.ctnInput}>
              <View style={styles.inputCtn}>
                <Text style={styles.signinSpan}>Prénom</Text>
                <TextInput
                  style={styles.signinInput}
                  placeholder="Prénom"
                  value={accountData.firstname}
                  onChangeText={(value) => handleChange("firstname", value)}
                  required
                />
              </View>
              <View style={styles.inputCtn}>
                <Text style={styles.signinSpan}>Nom</Text>
                <TextInput
                  style={styles.signinInput}
                  placeholder="Nom"
                  value={accountData.lastname}
                  onChangeText={(value) => handleChange("lastname", value)}
                  required
                />
              </View>
            </View>
            <View style={styles.ctnInput}>
              <View style={styles.inputCtn}>
                <Text style={styles.signinSpan}>Email</Text>
                <TextInput
                  style={styles.signinInput}
                  placeholder="Email"
                  value={accountData.login}
                  onChangeText={(value) => handleChange("email", value)}
                  required
                />
              </View>
              <View style={styles.inputCtn}>
                <Text style={styles.signinSpan}>Ville</Text>
                <TextInput
                  style={styles.signinInput}
                  placeholder="Ville"
                  value={accountData.city}
                  onChangeText={(value) => handleChange("city", value)}
                  required
                />
              </View>
            </View>
            <View style={styles.ctnInput}>
              <View style={styles.inputCtn}>
                <Text style={styles.signinSpan}>Statut</Text>
                <View style={styles.selectContainer}>
                  <Picker
                    selectedValue={accountData.role}
                    onValueChange={(value) => handleRoleChange(value)}
                    style={styles.signinInput}
                  >
                    <Picker.Item label="Étudiant" value="USER" />
                    <Picker.Item label="Prof" value="PROF" />
                    <Picker.Item label="Autre" value="OTHER" />
                  </Picker>
                </View>
              </View>
              <View style={styles.inputCtn}>
                <Text style={styles.signinSpan}>Filière souhaitée</Text>
                <View style={styles.selectContainer}>
                  <Picker
                    selectedValue={accountData.study}
                    onValueChange={(value) => handleChange("study", value)}
                    style={styles.signinInput}
                  >
                    <Picker.Item label="MMI" value="MMI" />
                    <Picker.Item label="GEA" value="GEA" />
                    <Picker.Item label="TC" value="TC" />
                  </Picker>
                </View>
              </View>
            </View>
            <View style={styles.ctnInput}>
              <View style={styles.inputCtn}>
                <Text style={styles.signinSpan}>Date de naissance</Text>
                <TextInput
                  style={styles.signinInput}
                  placeholder="Date de naissance"
                  value={accountData.date.toISOString().split("T")[0]}
                  onChangeText={(value) => {
                    handleChange("date", value);
                    setAccountData((prevData) => ({
                      ...prevData,
                      date: new Date(value),
                    }));
                  }}
                  required
                />
              </View>
              <View style={styles.inputCtn}>
                <Text style={styles.signinSpan}>Téléphone</Text>
                <TextInput
                  style={styles.signinInput}
                  placeholder="Téléphone"
                  value={accountData.phone}
                  onChangeText={(value) => handleChange("phone", value)}
                  required
                />
              </View>
            </View>
            <View style={styles.ctnInput}>
              <View style={styles.inputCtn}>
                <Text style={styles.signinSpan}>Mot de passe</Text>
                <TextInput
                  style={styles.signinInput}
                  placeholder="Mot de passe"
                  value={accountData.password}
                  onChangeText={(value) => handleChange("password", value)}
                  secureTextEntry
                  required
                />
              </View>
              <View style={styles.inputCtn}>
                <Text style={styles.signinSpan}>Confirmer</Text>
                <TextInput
                  style={styles.signinInput}
                  placeholder="Confirmer le mot de passe"
                  value={confirmPassword}
                  onChangeText={(value) =>
                    handleChange("confirmPassword", value)
                  }
                  secureTextEntry
                  required
                />
              </View>
            </View>

            <TouchableOpacity
              onPress={handleSubmit}
              style={styles.signinButton}
            >
              <Text>S’inscrire</Text>
              <Image
                source={
                  isDarkMode
                    ? require("../assets/images/arrow_dark.svg")
                    : require("../assets/images/arrow.svg")
                }
                style={styles.signinButtonIcon}
              />
            </TouchableOpacity>
          </View>
          {message && <Text style={styles.signinMessage}>{message}</Text>}
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
  divSigninLogo: {
    alignItems: "center",
    marginBottom: 20,
  },
  signinLogo: {
    width: 100,
    height: 100,
  },
  signinSection: {
    marginBottom: 20,
  },
  signinCtn: {
    alignItems: "center",
  },
  signinFormTitle: {
    width: 200,
    height: 50,
    marginBottom: 20,
  },
  signinForm: {
    width: "100%",
  },
  ctnInput: {
    marginBottom: 20,
  },
  inputCtn: {
    marginBottom: 10,
  },
  signinSpan: {
    marginBottom: 5,
  },
  signinInput: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    borderRadius: 5,
  },
  selectContainer: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
  },
  signinButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    backgroundColor: "#007bff",
    borderRadius: 5,
  },
  signinButtonIcon: {
    width: 20,
    height: 20,
    marginLeft: 10,
  },
  signinMessage: {
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

export default Signin;
