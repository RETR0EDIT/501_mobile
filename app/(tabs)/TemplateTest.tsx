import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, ActivityIndicator, Alert, Image, StyleSheet, ScrollView } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";

import Questions from "@/src/services/Questions";
import Answers from "@/src/services/Answers";
import Rates from "@/src/services/Rates";

const TemplateTest = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const { idTest, testName } = route.params;
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [answered, setAnswered] = useState(false);
  const [isTestFinished, setIsTestFinished] = useState(false);
  const [userAnswers, setUserAnswers] = useState([]);

  useEffect(() => {
    const fetchQuestionsAndAnswers = async () => {
      try {
        const response = await Questions.Read(idTest);
        if (Array.isArray(response)) {
          const filteredQuestions = response.map(({ pr, ...rest }) => rest);
          setQuestions(filteredQuestions);
        } else {
          setError("La réponse de l'API n'est pas un tableau.");
        }
      } catch (err) {
        setError("Erreur lors de la récupération des questions.");
      } finally {
        setLoading(false);
      }
    };
    fetchQuestionsAndAnswers();
  }, [idTest]);

  const handleAnswerClick = async (selectedAnswer) => {
    setAnswered(true);
    const currentQuestion = questions[currentQuestionIndex];
    try {
      await Answers.Create({ content: selectedAnswer, isvalid: false, question: { id: currentQuestion.id } });
      setUserAnswers([...userAnswers, { content: selectedAnswer, isvalid: false }]);
    } catch (err) {
      Alert.alert("Erreur", "Erreur lors de l'enregistrement de la réponse");
    }
  };

  const handleNextQuestion = () => {
    setAnswered(false);
    if (currentQuestionIndex + 1 < questions.length) {
      setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
    } else {
      setIsTestFinished(true);
    }
  };

  if (loading) return <ActivityIndicator size="large" color="#0000ff" />;
  if (error) return <Text style={styles.error}>{error}</Text>;

  if (isTestFinished) {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Test terminé !</Text>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.button}>
          <Text style={styles.buttonText}>Retour</Text>
        </TouchableOpacity>
      </View>
    );
  }

  const currentQuestion = questions[currentQuestionIndex];
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>{testName}</Text>
      <Text style={styles.question}>{currentQuestion.title}</Text>
      {['p1', 'p2', 'p3', 'p4'].map((key, index) => (
        <TouchableOpacity
          key={index}
          style={styles.answerButton}
          onPress={() => handleAnswerClick(currentQuestion[key])}
          disabled={answered}
        >
          <Image source={{ uri: `/${key}.svg` }} style={styles.icon} />
          <Text style={styles.answerText}>{currentQuestion[key]}</Text>
        </TouchableOpacity>
      ))}
      {answered && (
        <TouchableOpacity style={styles.nextButton} onPress={handleNextQuestion}>
          <Text style={styles.buttonText}>Question suivante</Text>
        </TouchableOpacity>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: "center", justifyContent: "center", padding: 20 },
  title: { fontSize: 24, fontWeight: "bold", marginBottom: 20 },
  question: { fontSize: 18, marginBottom: 10 },
  answerButton: { flexDirection: "row", alignItems: "center", backgroundColor: "#ddd", padding: 10, margin: 5, borderRadius: 5 },
  answerText: { fontSize: 16 },
  icon: { width: 30, height: 30, marginRight: 10 },
  nextButton: { backgroundColor: "blue", padding: 10, marginTop: 20, borderRadius: 5 },
  buttonText: { color: "white", fontSize: 16 },
  error: { color: "red", fontSize: 16 },
  button: {},
});

export default TemplateTest;
