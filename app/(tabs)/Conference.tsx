import Conferences from "@/src/services/Conferences";
import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Image,
  ScrollView,
  ActivityIndicator,
} from "react-native";


const Conference = () => {
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
        <ActivityIndicator size="large" color="#432683" />
        <Text>Chargement des conférences...</Text>
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.error}>
        <Text style={styles.errorText}>{error}</Text>
      </View>
    );
  }

  return (
    <ScrollView>
    <View style={styles.container}>
        <View style={styles.headerBanner}>
                      <Image
                        source={require("../../assets/images/logo_jpo.png")}
                        style={styles.headerLogo}
                      />
                    </View>
      <Text style={styles.confTitle}>CONFERENCES</Text>
      <FlatList
        data={ConferencesList}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.conf}>
            <Text style={styles.confTitle}>{item.title}</Text>
            <Text style={styles.text}>Salle : {item.room.name}</Text>
            <Text style={styles.text}>
              Horaire : {item.tstart} - {item.tend}
            </Text>
            <Text style={styles.confContent}>{item.content}</Text>
            <Text style={styles.confMaster}>
              {item.account.firstname} {item.account.lastname}
            </Text>
          </View>
        )}
      />
    </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  headerBanner: {
    backgroundColor: "#432683",
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  headerLogo: {
    width: 60,
    height: 60,
    resizeMode: "contain",
  },
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
  errorText: {
    color: "red",
    fontSize: 16,
  },
  conf: {
    backgroundColor: "#f8f8f8",
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: "#000",
    alignItems: "center",
  },
  confTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#432683",
    textAlign: "center",
    marginBottom: 10,
    marginTop: 20,
  },
  text: {
    fontWeight: "bold",
    color: "#432683",
  },
  info: {
    fontSize: 16,
    color: "#333",
    marginBottom: 5,
  },
  confContent: {
    fontSize: 16,
    color: "#333",
    textAlign: "center",
    marginVertical: 10,
  },
  confMaster: {
    fontSize: 18,
    color: "#432683",
    alignSelf: "flex-end",
    fontWeight: "bold",
  },
});

export default Conference;
