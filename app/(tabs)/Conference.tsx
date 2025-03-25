import Conferences from '@/src/services/Conferences';
import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet } from "react-native";

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
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Conférences</Text>
            <View style={styles.tableContainer}>
                <View style={styles.tableHeader}>
                    <Text style={styles.headerText}>Titre</Text>
                    <Text style={styles.headerText}>Heure début</Text>
                    <Text style={styles.headerText}>Heure fin</Text>
                    <Text style={styles.headerText}>Salle</Text>
                    <Text style={styles.headerText}>Maître de conférence</Text>
                </View>
                <FlatList
                    data={ConferencesList}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({ item }) => (
                        <View style={styles.tableRow}>
                            <Text style={styles.cell}>{item.title}</Text>
                            <Text style={styles.cell}>{item.tstart}</Text>
                            <Text style={styles.cell}>{item.tend}</Text>
                            <Text style={styles.cell}>{item.room.name}</Text>
                            <Text style={styles.cell}>
                                {item.account.firstname} {item.account.lastname}
                            </Text>
                        </View>
                    )}
                />
            </View>
        </View>
    );

}
const styles = StyleSheet.create({});
export default Conference;
