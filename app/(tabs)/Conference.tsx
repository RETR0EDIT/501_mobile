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
  ScrollView,
  FlatList,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import { Ionicons } from "@expo/vector-icons";

import ModelConference from "@/src/models/ModelConference";
import Conferences from "@/src/services/Conferences";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Conference() {
    const [ConferencesList, setConferencesList] = useState<ModelConference[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
  
    useEffect(() => {
      const fetchConferences = async () => {
        try {
          const response = await Conferences.Read();
          setConferencesList(response);
        } catch (err) {
          setError("Erreur lors de la récupération des conférences.");
        } finally {
          setLoading(false);
        }
      };
  
      fetchConferences();
    }, []);
  
    if (loading) {
      return (
        <View style={styles.loading}>
          <Text>Chargement des conférences...</Text>
        </View>
      );
      return (
        <View style={styles.error}>
          <Text>{error}</Text>
        </View>
      );
    }
  
    if (error) {
      return (
        <View style={styles.error}>
          <Text>{error}</Text>
        </View>
      );
    }

return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Conférences</Text>

      <FlatList
        data={ConferencesList}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.conferenceCard}>
            <Text style={styles.conferenceTitle}>{item.title}</Text>
            <Text style={styles.conferenceInfo}>
              <Text style={styles.label}>Heure début :</Text> {item.tstart}
            </Text>
            <Text style={styles.conferenceInfo}>
              <Text style={styles.label}>Heure fin :</Text> {item.tend}
            </Text>
            <Text style={styles.conferenceInfo}>
              <Text style={styles.label}>Salle :</Text> {item.room.name}
            </Text>
            <Text style={styles.conferenceInfo}>
              <Text style={styles.label}>Maître de conférence :</Text>{" "}
              {item.account.firstname} {item.account.lastname}
            </Text>
          </View>
        )}
      />
    </ScrollView>
  );

}
const styles = StyleSheet.create({
    loading: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
    },
    error: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
    },
  });