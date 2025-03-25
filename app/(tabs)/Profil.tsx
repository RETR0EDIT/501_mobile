import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ActivityIndicator,
  Image,
  TouchableOpacity,
  TextInput,
  Alert,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import { Ionicons } from "@expo/vector-icons";
import ModelAccount from "@/src/models/ModelAccount";
import Accounts from "@/src/services/Accounts";
import AsyncStorage from "@react-native-async-storage/async-storage";
const Profil = () => {
  const [profileData, setProfileData] = useState<ModelAccount | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<unknown>(null);
  const [isEditing, setIsEditing] = useState(false);
  const [editedData, setEditedData] = useState({
    login: "",
    password: "",
    phone: "",
  });

  useEffect(() => {
    const loadProfileData = async () => {
      try {
        // Récupérer l'userId depuis AsyncStorage
        const userId = await AsyncStorage.getItem("userId");
        if (userId) {
          // Utiliser l'userId pour effectuer la requête API
          const response = await Accounts.ReadOne(userId);
          setProfileData(response);
        } else {
          throw new Error("Aucun userId trouvé dans AsyncStorage");
        }
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    loadProfileData();
  }, []);

  const saveProfileData = async (data: ModelAccount) => {
    try {
      await Accounts.Update(data);
      Alert.alert("Succès", "Profil mis à jour avec succès");
    } catch (err) {
      setError(err);
      Alert.alert("Erreur", "Impossible de mettre à jour le profil");
    }
  };

  const pickImage = async () => {
    const permissionResult =
      await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (permissionResult.granted === false) {
      alert("Permission d'accès à la galerie requise !");
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    if (!result.canceled) {
      if (profileData) {
        const updatedProfileData = {
          ...profileData,
          image: result.assets[0].uri,
        };
        setProfileData(updatedProfileData);
        saveProfileData(updatedProfileData);
      }
    }
  };

  const handleEdit = () => {
    setIsEditing(true);
    setEditedData({
      login: profileData?.login || "",
      password: profileData?.password || "",
      phone: profileData?.phone || "",
    });
  };

  const handleSave = () => {
    if (profileData) {
      const updatedProfileData = {
        ...profileData,
        login: editedData.login,
        password: editedData.password,
        phone: editedData.phone,
      };
      setProfileData(updatedProfileData);
      saveProfileData(updatedProfileData);
    }
    setIsEditing(false);
  };

  const handleCancel = () => {
    setIsEditing(false);
  };

  if (loading) {
    return <ActivityIndicator size="large" color="#0000ff" />;
  }

  if (error) {
    return (
      <View style={styles.container}>
        <Text style={styles.errorText}>
          Erreur lors du chargement des données
        </Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {profileData ? (
        <>
          <View style={styles.profileContainer}>
            <TouchableOpacity onPress={pickImage}>
              <Image source={{ uri: profileData.image }} style={styles.image} />
            </TouchableOpacity>
            <Text style={styles.name}>
              {profileData.firstname} {profileData.lastname}
            </Text>
            <View style={styles.dividerBar} />
            <Text style={styles.role}>{profileData.role}</Text>
          </View>
          <View style={styles.accountContainer}>
            <View style={styles.accountHeader}>
              <Text style={styles.accountTitle}>Compte</Text>
              <TouchableOpacity onPress={handleEdit}>
                <Ionicons name="create" size={24} color="white" />
              </TouchableOpacity>
            </View>
            <View style={styles.detailsGrid}>
              <View style={styles.detailItem}>
                <Text style={styles.detailLabel}>Email</Text>
                {isEditing ? (
                  <TextInput
                    style={styles.detailText}
                    value={editedData.login}
                    onChangeText={(text) =>
                      setEditedData({ ...editedData, login: text })
                    }
                  />
                ) : (
                  <Text style={styles.detailText}>{profileData.login}</Text>
                )}
              </View>
              <View style={styles.detailItem}>
                <Text style={styles.detailLabel}>Mot de passe</Text>
                {isEditing ? (
                  <TextInput
                    style={styles.detailText}
                    value={editedData.password}
                    onChangeText={(text) =>
                      setEditedData({ ...editedData, password: text })
                    }
                    secureTextEntry
                  />
                ) : (
                  <Text style={styles.detailText}>**************</Text>
                )}
              </View>
              <View style={styles.detailItem}>
                <Text style={styles.detailLabel}>Numéro de téléphone</Text>
                {isEditing ? (
                  <TextInput
                    style={styles.detailText}
                    value={editedData.phone}
                    onChangeText={(text) =>
                      setEditedData({ ...editedData, phone: text })
                    }
                  />
                ) : (
                  <Text style={styles.detailText}>{profileData.phone}</Text>
                )}
              </View>
            </View>
            {isEditing && (
              <View style={styles.editButtons}>
                <TouchableOpacity
                  style={styles.saveButton}
                  onPress={handleSave}
                >
                  <Text style={styles.buttonText}>Enregistrer</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.cancelButton}
                  onPress={handleCancel}
                >
                  <Text style={styles.buttonText}>Annuler</Text>
                </TouchableOpacity>
              </View>
            )}
          </View>
        </>
      ) : (
        <Text style={styles.errorText}>Aucune donnée de profil trouvée</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    alignItems: "center",
  },
  profileContainer: {
    backgroundColor: "#432683",
    alignItems: "center",
    padding: 16,
    marginBottom: 16,
    width: "100%",
  },
  accountContainer: {
    backgroundColor: "#583E92",
    width: "100%",
    padding: 16,
    alignItems: "center",
  },
  accountHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
  },
  accountTitle: {
    fontSize: 40,
    fontWeight: "bold",
    marginBottom: 40,
    color: "#fff",
  },
  detailsGrid: {
    width: "100%",
  },
  detailItem: {
    borderWidth: 1,
    borderColor: "#fff",
    borderRadius: 8,
    padding: 20,
    marginBottom: 35,
  },
  detailLabel: {
    position: "absolute",
    top: -12,
    left: 15,
    backgroundColor: "#583E92",
    paddingHorizontal: 8,
    color: "#fff",
    fontSize: 20,
  },
  detailText: {
    color: "#fff",
    fontSize: 16,
  },
  editButtons: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
  },
  saveButton: {
    backgroundColor: "#4CAF50",
    padding: 10,
    borderRadius: 5,
    marginRight: 10,
  },
  cancelButton: {
    backgroundColor: "#f44336",
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 8,
    borderWidth: 1,
    borderColor: "#fff",
  },
  name: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 4,
  },
  dividerBar: {
    width: 150,
    height: 2,
    backgroundColor: "#fff",
    marginVertical: 10,
  },
  role: {
    fontSize: 18,
    color: "#fff",
  },
  label: {
    fontSize: 18,
    marginBottom: 8,
  },
  errorText: {
    fontSize: 18,
    color: "red",
  },
});

export default Profil;
