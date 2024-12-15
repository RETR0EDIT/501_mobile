import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, ActivityIndicator } from "react-native";
import Tests from "@/src/services/Tests";
import ModelTest from "@/src/models/ModelTest";
import { useNavigation } from "@react-navigation/native";

export default function Probleme() {
  const [tests, setTests] = useState<ModelTest[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const navigation = useNavigation();

  useEffect(() => {
    const fetchTests = async () => {
      try {
        const response = await Tests.Read();
        setTests(response);
      } catch (err) {
        setError("Erreur lors de la récupération des tests.");
      } finally {
        setLoading(false);
      }
    };

    fetchTests();
  }, []);

  if (loading) {
    return (
      <View>
        <ActivityIndicator size="large" color="#0000ff" />
        <Text>Chargement des tests...</Text>
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
      <Text style={{ fontSize: 24, fontWeight: "bold" }}>Liste des Tests</Text>
      {tests.map((test) => (
        <TouchableOpacity
          key={test.id}
          onPress={() =>
            navigation.navigate("TemplateTests", {
              screen: "TemplateTestsDetail",
              params: { testId: test.id, testName: test.title },
            })
          }
        >
          <View>
            <Text style={{ fontSize: 18 }}>{test.title}</Text>
          </View>
        </TouchableOpacity>
      ))}
    </View>
  );
}
