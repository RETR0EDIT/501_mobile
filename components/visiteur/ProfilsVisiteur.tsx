import React, { useState, useEffect } from "react";
import { View, Text, Image, ActivityIndicator } from "react-native";
import Accounts from "@/src/services/Accounts";
import { Upload } from "@/src/services/Upload";
import ModelAccount from "@/src/models/ModelAccount";

const ProfilsVisiteur: React.FC = () => {
  const [user, setUser] = useState<ModelAccount | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [profileImage, setProfileImage] = useState<string | null>(null);

  useEffect(() => {
    const fetchUser = async () => {
      const userId = localStorage.getItem("userId");
      if (!userId) {
        setError("Utilisateur non connecté.");
        setIsLoading(false);
        return;
      }

      try {
        const response = await Accounts.ReadOne(userId);
        setUser(response);
        setProfileImage(response.image);
      } catch (err) {
        setError(
          "Erreur lors de la récupération des informations de l'utilisateur."
        );
      } finally {
        setIsLoading(false);
      }
    };

    fetchUser();
  }, []);

  const handleUploadSuccess = (imageUrl: string) => {
    setProfileImage(imageUrl);
  };

  if (isLoading) {
    return (
      <View>
        <ActivityIndicator size="large" color="#0000ff" />
        <Text>Chargement des données...</Text>
      </View>
    );
  }

  if (error) {
    return (
      <View>
        <Text>{error}</Text>
      </View>
    );
  }

  return (
    <View>
      <View>
        <Image
          source={{
            uri: profileImage
              ? `http://localhost:8080${profileImage}`
              : "/default.svg",
          }}
          style={{ width: 100, height: 100, borderRadius: 50 }}
        />
        <Upload
          uploadUrl="http://localhost:8080/api/upload"
          onUploadSuccess={handleUploadSuccess}
        />
      </View>
      <Text>{`${user?.firstname || ""} ${user?.lastname || ""}`}</Text>
      <Text>{user?.role || "Rôle non défini"}</Text>
      <View>
        <Text>Email: {user?.login || "exemple@gmail.com"}</Text>
        <Text>Mot de passe: **************</Text>
        <Text>Numéro de téléphone: {user?.phone || "+33 701 44 23 65"}</Text>
      </View>
    </View>
  );
};

export default ProfilsVisiteur;
