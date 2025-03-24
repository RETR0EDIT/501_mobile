import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ActivityIndicator, Image, TouchableOpacity, TextInput, Alert, ScrollView } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { Ionicons } from '@expo/vector-icons';
import profileDataJson from '../../src/models/Account.json';
import { useNavigation } from '@react-navigation/native';

interface ProfileData {
    id: number;
    login: string;
    password: string;
    firstname: string;
    lastname: string;
    city: string;
    study: string;
    status: string;
    role: string;
    phone: string;
    currentstudy: string;
    image: string;
    createdat: Date;
    editedat: Date;
    valid: boolean;
    date: Date;
    token: string;
    validtoken: boolean;
}

const Profil = () => {
  const [profileData, setProfileData] = useState<ProfileData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<unknown>(null);
  const [isEditing, setIsEditing] = useState(false);
  const [editedData, setEditedData] = useState({
    login: '',
    password: '',
    phone: '',
  });
  const [completedTests, setCompletedTests] = useState<string[]>([]);

  const navigation = useNavigation();

  useEffect(() => {
    try {
      const data = profileDataJson.find((account: ProfileData) => account.id === 1);
      setProfileData(data || null);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    // Simulate fetching completed tests
    const fetchCompletedTests = async () => {
      // Replace with actual API call
      const tests = ["Test 1", "Test 2", "Test 3"];
      setCompletedTests(tests);
    };
    fetchCompletedTests();
  }, []);

  const pickImage = async () => {
    const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (!permissionResult.granted) {
      alert("Permission to access gallery is required!");
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
        setProfileData({ ...profileData, image: result.assets[0].uri });
      }
    }
  };

  const handleEdit = () => {
    setIsEditing(true);
    setEditedData({
      login: profileData?.login || '',
      password: profileData?.password || '',
      phone: profileData?.phone || '',
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
    }
    setIsEditing(false);
    Alert.alert("Success", "Profile updated successfully");
  };

  const handleCancel = () => {
    setIsEditing(false);
  };

  const handleTestClick = (testName: string) => {
    navigation.navigate('TestDetails', { testName });
  };

  if (loading) {
    return <ActivityIndicator size="large" color="#0000ff" />;
  }

  if (error) {
    return (
      <View style={styles.container}>
        <Text style={styles.errorText}>Erreur lors du chargement des données</Text>
      </View>
    );
  }

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
        {profileData ? (
          <>
            <View style={styles.profileContainer}>
              <TouchableOpacity onPress={pickImage}>
                <Image source={{ uri: profileData.image }} style={styles.image} resizeMode="cover" />
              </TouchableOpacity>
              <Text style={styles.name}>{profileData.firstname} {profileData.lastname}</Text>
            </View>
            <View style={styles.accountContainer}>
              <View style={styles.accountHeader}>
                <Text style={styles.accountTitle}>Compte</Text>
                <TouchableOpacity onPress={handleEdit} style={styles.editIcon}>
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
                      onChangeText={(text) => setEditedData({ ...editedData, login: text })}
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
                      onChangeText={(text) => setEditedData({ ...editedData, password: text })}
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
                      onChangeText={(text) => setEditedData({ ...editedData, phone: text })}
                    />
                  ) : (
                    <Text style={styles.detailText}>{profileData.phone}</Text>
                  )}
                </View>
              </View>
              {isEditing && (
                <View style={styles.editButtons}>
                  <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
                    <Text style={styles.buttonText}>Save</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.cancelButton} onPress={handleCancel}>
                    <Text style={styles.buttonText}>Cancel</Text>
                  </TouchableOpacity>
                </View>
              )}
            </View>
            <View style={styles.completedTestsContainer}>
              <Text style={styles.completedTestsTitle}>Tests Complétés</Text>
              {completedTests.length > 0 ? (
                completedTests.map((test, index) => (
                  <TouchableOpacity key={index} onPress={() => handleTestClick(test)}>
                    <Text style={styles.completedTestName}>{test}</Text>
                  </TouchableOpacity>
                ))
              ) : (
                <Text style={styles.noTestsText}>Aucun test complété</Text>
              )}
            </View>
          </>
        ) : (
          <Text style={styles.errorText}>Aucune donnée de profil trouvée</Text>
        )}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    width: '100%', 
    alignItems: 'center',
  },
  profileContainer: {
    backgroundColor: '#432683',
    alignItems: 'center',
    padding: 16,
    marginBottom: 16,
    width: '100%', 
  },
  accountContainer: {
    backgroundColor: '#583E92',
    width: '100%',
    padding: 16,
    alignItems: 'center',
  },
  accountHeader: {
    flexDirection: 'row',
    marginBottom: 38,
    alignItems: 'center',
    width: '100%',
  },
  accountTitle: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#fff',
  },
  editIcon: {
    marginLeft: 10,
  },
  detailsGrid: {
    width: '100%',
  },
  detailItem: {
    borderWidth: 1,
    borderColor: '#fff',
    borderRadius: 8,
    padding: 20,
    marginBottom: 35,
  },
  detailLabel: {
    position: 'absolute',
    top: -12,
    left: 15,
    backgroundColor: '#583E92',
    paddingHorizontal: 8,
    color: '#fff',
    fontSize: 20,
  },
  detailText: {
    color: '#fff',
    fontSize: 16,
  },
  editButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  saveButton: {
    backgroundColor: '#4CAF50',
    padding: 10,
    borderRadius: 5,
    marginRight: 10,
  },
  cancelButton: {
    backgroundColor: '#f44336',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 8,
    borderWidth: 1,
    borderColor: '#fff',
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 4,
  },
  dividerBar: {
    width: 150,
    height: 2,
    backgroundColor: '#fff',
    marginVertical: 10,
  },
  role: {
    fontSize: 18,
    color: '#fff',
  },
  label: {
    fontSize: 18,
    marginBottom: 8,
  },
  errorText: {
    fontSize: 18,
    color: 'red',
  },
  completedTestsContainer: {
    backgroundColor: '#432683',
    width: '100%',
    padding: 16,
    alignItems: 'center',
    marginTop: 16,
    marginBottom: 30,
  },
  completedTestsTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 8,
  },
  completedTestName: {
    fontSize: 18,
    color: '#fff',
    marginBottom: 4,
  },
  noTestsText: {
    fontSize: 18,
    color: '#fff',
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 30, // Add padding to the bottom
  },
});

export default Profil;