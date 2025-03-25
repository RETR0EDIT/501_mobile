import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  Image,
  StyleSheet,
  ActivityIndicator,
  Alert,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import Tests from "@/src/services/Tests";

export default function Problemes() {
  const [tests, setTests] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [selectedStudy, setSelectedStudy] = useState("");
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

  const handleFilterChange = async (study: any) => {
    setSelectedStudy(study);
    setLoading(true);
    try {
      if (study === "") {
        const response = await Tests.Read();
        setTests(response);
      } else {
        const response = await Tests.GetByStudy(study);
        setTests(response);
      }
    } catch (err) {
      setError("Erreur lors de la récupération des tests.");
    } finally {
      setLoading(false);
    }
  };

  const renderTestItem = ({ item }: any) => (
    <View style={styles.testItem}>
      <Text style={styles.testTitle}>{item.title}</Text>
      <Text style={styles.testCustomText}>{item.content}</Text>
      <TouchableOpacity
        onPress={() =>
          navigation.navigate("TemplateTest", {
            idTest: item.id,
            testName: item.title,
            content: item.content,
          })
        }
      >
        <Image
          source={require("../../assets/images/FLECHEDROITE.png")}
          style={styles.arrowright} // Remplace par le chemin correct de ton image
        />
      </TouchableOpacity>
    </View>
  );
  

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#007bff" />
        <Text style={styles.loadingText}>Chargement des tests...</Text>
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.errorContainer}>
        <Text style={styles.errorText}>{error}</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
      <Text style={styles.title}>CHOISIS TON QUIZZ</Text>
      </View>
      <View style={styles.filterContainer}>
        <TouchableOpacity
          style={[
            styles.filterButton,
            selectedStudy === "" && styles.activeFilterButton,
          ]}
          onPress={() => handleFilterChange("")}
        >
          <Text style={styles.filterButtonText}>Tous</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.filterButton,
            selectedStudy === "MMI" && styles.activeFilterButton,
          ]}
          onPress={() => handleFilterChange("MMI")}
        >
          <Text style={styles.filterButtonText}>MMI</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.filterButton,
            selectedStudy === "GEA" && styles.activeFilterButton,
          ]}
          onPress={() => handleFilterChange("GEA")}
        >
          <Text style={styles.filterButtonText}>GEA</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.filterButton,
            selectedStudy === "TC" && styles.activeFilterButton,
          ]}
          onPress={() => handleFilterChange("TC")}
        >
          <Text style={styles.filterButtonText}>TC</Text>
        </TouchableOpacity>
      </View>
      {tests.length === 0 ? (
        <View style={styles.noResultsContainer}>
          <Text style={styles.noResultsText}>
            Aucun test trouvé pour la filière sélectionnée.
          </Text>
        </View>
      ) : (
        <FlatList
          data={tests}
          keyExtractor={(item) => item.id.toString()}
          renderItem={renderTestItem}
          contentContainerStyle={styles.testList}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    width: "100%",
    borderWidth: 1,
    borderColor: "#ccc",
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 5,
  },
  
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },

  filterButtonText: {
    color: "#fff",
    fontSize: 16,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  loadingText: {
    marginTop: 10,
    fontSize: 16,
    color: "#333",
  },
  errorContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  errorText: {
    fontSize: 16,
    color: "red",
  },
  noResultsContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  noResultsText: {
    fontSize: 16,
    color: "#333",
  },
  testCustomText: {
    fontSize: 14,
    color: "",
    maxWidth: 380, 
    textAlign: "center",
  },
  
  problemeContainer: {
    flex: 1,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 24,
    marginBottom: 40,
    textAlign: "center",
    color: "#432683",
    fontWeight: "bold",
    marginTop: 40,
  },
  loading: {
    fontSize: 18,
    color: "#007bff",
    textAlign: "center",
    marginTop: 20,
  },
  error: {
    fontSize: 18,
    color: "#dc3545",
    textAlign: "center",
    marginTop: 20,
  },
  testList: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: 20,
    padding: 10,
  },
  arrowright:{

    marginTop: 30,
  },
  testItem: {
    marginBottom: 20,
    padding: 20,
    borderWidth: 1,
    borderColor: "#542B97",
    borderRadius: 4,
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
    alignItems: "center",
  },
  testItemHover: {
    backgroundColor: "#f1f1f1",
  },
  testTitle: {
    fontSize: 35,
    color: "#432683",
    textAlign: "center",
    marginBottom: 10,
  },
  filterContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginVertical: 20,
    paddingHorizontal: 10,
  },
  filterButton: {
    backgroundColor: "#583e92",
    color: "#fff",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    textAlign: "center",
  },
  filterButtonHover: {
    backgroundColor: "#432683", // Simulez un hover avec un état dans React Native
  },
  activeFilterButton: {
    backgroundColor: "#361d6b",
  },
  cntTitle: {
    backgroundColor: "#F9F9F9",
    height: 100,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 3, // Ombre pour Android
  },
});
