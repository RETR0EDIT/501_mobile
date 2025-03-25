import Conferences from '@/src/services/Conferences';
import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet, ActivityIndicator } from "react-native";

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
        <View style={styles.container}>
            <Text style={styles.title}>Conférences</Text>
            <FlatList
                data={ConferencesList}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <View style={styles.conf}>
                        <Text style={styles.confTitle}>{item.title}</Text>
                        <View style={styles.infoContainer}>
                            <Text style={styles.text}>Salle :</Text>
                            <Text style={styles.info}>{item.room.name}</Text>
                        </View>
                        <View style={styles.infoContainer}>
                            <Text style={styles.text}>Heure début :</Text>
                            <Text style={styles.info}>{item.tstart}</Text>
                        </View>
                        <View style={styles.infoContainer}>
                            <Text style={styles.text}>Heure fin :</Text>
                            <Text style={styles.info}>{item.tend}</Text>
                        </View>
                        <View style={styles.infoContainer}>
                            <Text style={styles.text}>Maître de conférence :</Text>
                            <Text style={styles.info}>{item.account.firstname} {item.account.lastname}</Text>
                        </View>
                    </View>
                )}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        padding: 15,
    },
    title: {
        fontSize: 26,
        fontWeight: "bold",
        color: "#432683",
        marginBottom: 20,
        textAlign: "center",
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
        borderColor: '#000',

    },
    confTitle: {
        fontSize: 20,
        fontWeight: "bold",
        color: "#432683",
        marginBottom: 10,
    },
    infoContainer: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 5,
    },
    text: {
        fontWeight: "bold",
        color: "#432683",
        marginRight: 5,
    },
    info: {
        fontSize: 16,
        color: "#333",
    },
});

export default Conference;
