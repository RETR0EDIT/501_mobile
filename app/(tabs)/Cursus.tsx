import React, { useEffect, useState } from "react";
import { Text, View, StyleSheet } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Cursus() {
  const [userId, setUserId] = useState<string | null>(null);

  useEffect(() => {
    const fetchUserId = async () => {
      try {
        const storedUserId = await AsyncStorage.getItem("userId");
        setUserId(storedUserId);
      } catch (error) {
        console.error("Erreur lors de la récupération de l'userId :", error);
      }
    };

    fetchUserId();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cursus</Text>
      {userId ? (
        <Text style={styles.userIdText}>User ID: {userId}</Text>
      ) : (
        <Text style={styles.userIdText}>Aucun User ID trouvé</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
  },
  userIdText: {
    fontSize: 18,
    color: "#333",
  },
});
