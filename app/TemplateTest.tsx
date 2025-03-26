import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ActivityIndicator,
  StyleSheet,
  FlatList,
  ScrollView,
  SafeAreaView,
} from "react-native";
import { useRoute } from "@react-navigation/native";
import Questions from "@/src/services/Questions";
import Answers from "@/src/services/Answers";
import ModelQuestion from "@/src/models/ModelQuestion";
import ModelAnswers from "@/src/models/ModelAnswers";
import { navigate } from "expo-router/build/global-state/routing";
import { useNavigation } from "@react-navigation/native";

import { useRouter } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { get } from "react-native/Libraries/TurboModule/TurboModuleRegistry";
import ModelRate from "@/src/models/ModelRate";
import Rates from "@/src/services/Rates";
import { SafeAreaProvider } from "react-native-safe-area-context";
const TemplateTest: React.FC = () => {
  const navigation = useNavigation();
  const router = useRouter();
  const route = useRoute();
  const { idTest, testName } = route.params as {
    idTest: string;
    testName: string;
  };
  const [questions, setQuestions] = useState<ModelQuestion[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [answered, setAnswered] = useState<boolean>(false);
  const [isTestFinished, setIsTestFinished] = useState<boolean>(false);
  const [isTestAlreadyDone, setIsTestAlreadyDone] = useState<boolean>(false);
  const [userAnswers, setUserAnswers] = useState<ModelAnswers[]>([]);
  const [verifiedAnswers, setVerifiedAnswers] = useState<ModelAnswers[]>([]);
  useEffect(() => {
    const getUserAnswers = async (
      userID: string,
      QuestionResponse: ModelAnswers
    ) => {
      let userId = await AsyncStorage.getItem("userId");
      try {
        const userAnswersResponse = await Answers.ReadByUserId(userID);

        if (Array.isArray(userAnswersResponse)) {
          const testAnswers = userAnswersResponse.filter(
            (answer) => answer.question.test.id === parseInt(idTest!)
          );
          setUserAnswers(testAnswers);

          const answeredQuestionsIds = testAnswers.map(
            (answer) => answer.question.id
          );
          const allQuestionsAnswered = QuestionResponse.every(
            (question: ModelQuestion) =>
              answeredQuestionsIds.includes(question.id)
          );

          if (allQuestionsAnswered) {
            setIsTestAlreadyDone(true);
          } else {
            // Passer à la première question non répondue
            const firstUnansweredQuestionIndex = QuestionResponse.findIndex(
              (question: ModelQuestion) =>
                !answeredQuestionsIds.includes(question.id)
            );
            setCurrentQuestionIndex(firstUnansweredQuestionIndex);
          }
        } else {
          setError(
            "La réponse de l'API pour les réponses de l'utilisateur n'est pas un tableau."
          );
        }
      } catch (err) {
        setError(
          "Erreur lors de la récupération des réponses de l'utilisateur." +
          userId
        );
      }
    };

    const getQuestions = async () => {
      try {
        const response = await Questions.Read(idTest);
        if (Array.isArray(response)) {
          setQuestions(response);
        } else {
          setError("La réponse de l'API n'est pas un tableau.");
        }

        let userId = await AsyncStorage.getItem("userId");
        if (userId) getUserAnswers(userId, response);
      } catch (err) {
        setError("Erreur lors de la récupération des questions.");
      } finally {
        setLoading(false);
      }
    };

    getQuestions();
  }, [idTest]);
  useEffect(() => {
    const fetchVerifiedAnswers = async () => {
      let userId = await AsyncStorage.getItem("userId");
      if (!userId) {
        console.error("ID utilisateur non trouvé dans le local storage");
        return;
      }

      try {
        const verifiedAnswersResponse = await Answers.ReadByUserId(userId);
        const testAnswers = verifiedAnswersResponse.filter(
          (answer) => answer.question.test.id === parseInt(idTest!)
        );
        setVerifiedAnswers(testAnswers);
      } catch (err) {
        console.error(
          "Erreur lors de la récupération des réponses vérifiées:",
          err
        );
      }
    };

    if (isTestFinished) {
      fetchVerifiedAnswers();
    }
  }, [isTestFinished, idTest]);
  const handleAnswerClick = async (selectedAnswer: string) => {
    const currentQuestion = questions[currentQuestionIndex];
    setAnswered(true);
    const isCorrect = selectedAnswer === currentQuestion.pr;
    let userId = await AsyncStorage.getItem("userId");

    const answer: ModelAnswers = {
      id: 0,
      content: selectedAnswer,
      isvalid: isCorrect,
      account: { id: parseInt(userId!) },
      question: { id: currentQuestion.id },
    };

    try {
      await Answers.Create(answer);
      setUserAnswers((prevAnswers) => [...prevAnswers, answer]);
    } catch (err) {
      console.error("Erreur lors de l'enregistrement de la réponse:", err);
    }
  };

  const handleNextQuestion = () => {
    setAnswered(false);
    if (currentQuestionIndex + 1 < questions.length) {
      setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
    } else {
      handleFinishTest();
    }
  };
  const handleFinishTest = async () => {
    console.log("Test terminé !");
    setIsTestFinished(true);
    let userId = await AsyncStorage.getItem("userId");
    const rate: ModelRate = {
      id: 0,
      account: { id: parseInt(userId!) },
      test: { id: parseInt(idTest!) },
      note: "0",
    };

    try {
      console.log("Enregistrement de la note:", rate);
      await Rates.Create(rate);
    } catch (err) {
      console.error(
        "Erreur lors de l'enregistrement de la note:",
        err,
        JSON.stringify(rate)
      );
    }
  };
  const endtest = async () => {
    router.push("Problemes");
  };

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#432683" />
        <Text style={styles.loadingText}>Chargement des questions...</Text>
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
  if (isTestAlreadyDone) {
    return (
      <SafeAreaView style={styles.containers}>
        <ScrollView contentContainerStyle={styles.testFinishedContainer}>
          <View style={styles.test_already_done_container}>
            <View style={styles.test_finished}>
              <Text style={styles.test_finished_title}>Test déjà fait !</Text>
              <Text style={styles.test_finished_subtitle}>Vos réponses :</Text>
              <FlatList
                data={userAnswers}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item, index }) => (
                  <View
                    style={[
                      styles.answerItem,
                      item.isvalid
                        ? styles.correctAnswer
                        : styles.incorrectAnswer,
                    ]}
                  >
                    <Text style={styles.questionText}>
                      Question {index + 1}: {item.question.title}
                    </Text>
                    <View style={styles.answerContainer}>
                      <Text
                        style={[
                          styles.answerText,
                          item.isvalid
                            ? styles.correctText
                            : styles.incorrectText,
                        ]}
                      >
                        {item.content}
                      </Text>
                      <Text style={styles.answerResult}>
                        Réponse: {item.isvalid ? "Correct" : "Incorrect"}
                      </Text>
                    </View>
                  </View>
                )}
                contentContainerStyle={styles.flatListContainer}
              />
            </View>
            <TouchableOpacity
              style={styles.backButton}
              onPress={() => router.push("Problemes")}
            >
              <Text style={styles.backButtonText}>Retour</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }

  if (isTestFinished) {
    return (
      <SafeAreaView style={styles.containers}>
        <ScrollView contentContainerStyle={styles.testFinishedContainer}>
          <Text style={styles.testFinishedTitle}>Test terminé !</Text>
          <Text style={styles.testFinishedSubtitle}>
            Récapitulatif des réponses :
          </Text>

          <ScrollView style={styles.answersScroll}>

            {verifiedAnswers.map((answer, index) => (
              <View
                style={[
                  styles.answerItem,
                  answer.isvalid
                    ? styles.correctAnswer
                    : styles.incorrectAnswer,
                ]}
              >
                <Text key={index} style={styles.answerResult}>
                  Question {answer.question.id}: {answer.content} -{" "}
                  {answer.isvalid ? "Correct" : "Incorrect"}
                </Text>
              </View>
            ))}

          </ScrollView>
          <TouchableOpacity
            style={styles.finishButton}
            onPress={() => {
              endtest();
            }}
          >
            <Text style={styles.finishButtonText}>Terminer</Text>
          </TouchableOpacity>
        </ScrollView>
      </SafeAreaView>
    );
  }

  const currentQuestion = questions[currentQuestionIndex];

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.testName}>{testName}</Text>
        <View style={styles.questionContainer}>
          <Text style={styles.questionTitle}>{currentQuestion.title}</Text>
        </View>
      </View>
      <View style={styles.answersContainer}>
        <View style={styles.row}>
          <TouchableOpacity
            onPress={() => handleAnswerClick(currentQuestion.p1)}
            disabled={answered}
            style={styles.answer1}
          >
            <Image
              source={require("../assets/images/carre.png")}
              style={styles.answerImage}
            />
            <Text style={styles.answerText}>{currentQuestion.p1}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => handleAnswerClick(currentQuestion.p2)}
            disabled={answered}
            style={styles.answer2}
          >
            <Image
              source={require("../assets/images/triangle.png")}
              style={styles.answerImage}
            />
            <Text style={styles.answerText}>{currentQuestion.p2}</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.row}>
          <TouchableOpacity
            onPress={() => handleAnswerClick(currentQuestion.p3)}
            disabled={answered}
            style={styles.answer3}
          >
            <Image
              source={require("../assets/images/rond.png")}
              style={styles.answerImage}
            />
            <Text style={styles.answerText}>{currentQuestion.p3}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => handleAnswerClick(currentQuestion.p4)}
            disabled={answered}
            style={styles.answer4}
          >
            <Image
              source={require("../assets/images/losange.png")}
              style={styles.answerImage}
            />
            <Text style={styles.answerText}>{currentQuestion.p4}</Text>
          </TouchableOpacity>
        </View>
      </View>
      {answered && (
        <TouchableOpacity
          style={styles.nextQuestionButton}
          onPress={handleNextQuestion}
        >
          <Text style={styles.nextQuestionText}>Question suivante</Text>
        </TouchableOpacity>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 20,
    backgroundColor: "#f9f9f9",
  },
  testName: {
    fontSize: 24,
    fontWeight: "bold",
    alignItems: "center",
    marginTop: 20,
    marginBottom: 20,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  questionContainer: {
    width: "100%",
    alignItems: "center",
    marginBottom: 20,
  },
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
  questionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    color: "#432683",
  },
  answersContainer: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },

  answerText: {
    color: "white",
    fontSize: 18,
    marginTop: 15,
    textAlign: "center",
    margin: "auto",
    fontWeight: "bold",
  },
  answerImage: {
    marginTop: 10,
    width: 50,
    height: 50,
    aspectRatio: 1,
  },
  nextQuestionButton: {
    marginTop: 20,
    padding: 15,
    backgroundColor: "#7357b2",
    borderRadius: 5,
  },
  nextQuestionText: {
    color: "white",
    fontSize: 18,
  },
  loadingContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  loadingText: {
    marginTop: 10,
    fontSize: 16,
  },
  errorContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  errorText: {
    fontSize: 16,
    color: "red",
  },
  testFinishedTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#432683",
    textAlign: "center",
    marginBottom: 10,
  },
  testFinishedSubtitle: {
    fontSize: 18,
    color: "#666",
    textAlign: "center",
    marginBottom: 20,
  },
  answerResult: {
    fontSize: 16,
    color: "#333",
    marginBottom: 10,
    padding: 10,
    backgroundColor: "#ffffff",
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#ddd",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
    width: "90%",
    textAlign: "center",
  },
  finishButton: {
    marginTop: 30,
    padding: 15,
    backgroundColor: "#432683",
    borderRadius: 8,
    alignItems: "center",
    width: "80%",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  },
  finishButtonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
  test_already_done_container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
    padding: 20,
  },
  test_finished: {
    backgroundColor: "#ffffff",
    borderRadius: 10,
    padding: 20,
    width: "100%",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  },
  answerItem: {
    padding: 15,
    borderRadius: 8,
    marginBottom: 10,
    backgroundColor: "#f9f9f9",
    borderWidth: 1,
    borderColor: "#ddd",
  },
  correctAnswer: {
    borderColor: "#4caf50",
    backgroundColor: "#e8f5e9",
  },
  incorrectAnswer: {
    borderColor: "#f44336",
    backgroundColor: "#ffebee",
  },
  questionText: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
    color: "#333",
  },
  answerContainer: {
    marginTop: 5,
  },
  correctText: {
    color: "#4caf50",
    fontWeight: "bold",
  },
  incorrectText: {
    color: "#f44336",
    fontWeight: "bold",
  },
  backButton: {
    marginTop: 20,
    padding: 15,
    backgroundColor: "#432683",
    borderRadius: 8,
    alignItems: "center",
    width: "80%",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  },
  backButtonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
  testFinishedContainer: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  answersScroll: {
    marginBottom: 20,
  },
  containers: {
    marginTop: 30,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
    padding: 20,
  },
  flatListContainer: {
    paddingBottom: 20,
  },
  test_finished_title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#432683",
    textAlign: "center",
    marginBottom: 10,
  },
  test_finished_subtitle: {
    fontSize: 18,
    color: "#666",
    textAlign: "center",
    marginBottom: 20,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "90%",
    marginVertical: 10,
  },
  answer1: {
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "#432683",
    padding: 15,
    borderRadius: 5,
    marginVertical: 10,
    width: "45%",
    aspectRatio: 1,
    justifyContent: "center",
  },
  answer2: {
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "#7357B2",
    padding: 15,
    borderRadius: 5,
    marginVertical: 10,
    width: "45%",
    aspectRatio: 1,
    justifyContent: "center",
  },
  answer3: {
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "#8B4DB1",
    padding: 15,
    borderRadius: 5,
    marginVertical: 10,
    width: "45%",
    aspectRatio: 1,
    justifyContent: "center",
  },
  answer4: {
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "#D187E4",
    padding: 15,
    borderRadius: 5,
    marginVertical: 10,
    width: "45%",
    aspectRatio: 1,
    justifyContent: "center",
  },
});

export default TemplateTest;
