import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ActivityIndicator,
  StyleSheet,
  FlatList,
} from "react-native";
import { useRoute } from "@react-navigation/native";
import Questions from "@/src/services/Questions";
import Answers from "@/src/services/Answers";
import ModelQuestion from "@/app/models/ModelQuestion";
import ModelAnswers from "@/app/models/ModelAnswers";
import { navigate } from "expo-router/build/global-state/routing";
import { useNavigation } from "@react-navigation/native";

import { useRouter } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { get } from "react-native/Libraries/TurboModule/TurboModuleRegistry";
import ModelRate from "@/src/models/ModelRate";
import Rates from "@/src/services/Rates";
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


  useEffect(() => {


    const getUserAnswers = async (userID: string, QuestionResponse: ModelAnswers) => {
      let userId = await AsyncStorage.getItem("userId")
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
          const allQuestionsAnswered = QuestionResponse.every((question: ModelQuestion) =>
            answeredQuestionsIds.includes(question.id)
          );

          if (allQuestionsAnswered) {
            setIsTestAlreadyDone(true);
          } else {
            // Passer à la première question non répondue
            const firstUnansweredQuestionIndex = QuestionResponse.findIndex(
              (question: ModelQuestion) => !answeredQuestionsIds.includes(question.id)
            );
            setCurrentQuestionIndex(firstUnansweredQuestionIndex);
          }
        } else {
          setError(
            "La réponse de l'API pour les réponses de l'utilisateur n'est pas un tableau."
          );
        };
      } catch (err) {

        setError("Erreur lors de la récupération des réponses de l'utilisateur." + userId);
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

        let userId = await AsyncStorage.getItem("userId")
        if (userId) getUserAnswers(userId, response);



      } catch (err) {
        setError("Erreur lors de la récupération des questions.");
      } finally {
        setLoading(false);
      }
    };

    getQuestions();
  }, [idTest]);

  const handleAnswerClick = async (selectedAnswer: string) => {
    const currentQuestion = questions[currentQuestionIndex];
    setAnswered(true);
    const isCorrect = selectedAnswer === currentQuestion.pr;
    let userId = await AsyncStorage.getItem("userId")

    const answer: ModelAnswers = {
      id: 0,
      content: selectedAnswer,
      correct: isCorrect,
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
    let userId = await AsyncStorage.getItem("userId")
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
                  item.isvalid ? styles.correctAnswer : styles.incorrectAnswer,
                ]}
              >
                <Text style={styles.questionText}>
                  Question {index + 1}: {item.question.title}
                </Text>
                <View style={styles.answerContainer}>
                  <Text
                    style={[
                      styles.answerText,
                      item.isvalid ? styles.correctText : styles.incorrectText,
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
          />
        </View>
      </View>
    );
  };

  if (isTestFinished) {
    return (
      <View style={styles.testFinishedContainer}>
        <Text style={styles.testFinishedTitle}>Test terminé !</Text>
        <Text style={styles.testFinishedSubtitle}>
          Récapitulatif des réponses :
        </Text>
        {userAnswers.map((answer, index) => (
          <Text key={index} style={styles.answerResult}>
            Question {answer.question.id}: {answer.content} -{" "}
            {answer.correct ? "Correct" : "Incorrect"}
          </Text>
        ))}
        <TouchableOpacity style={styles.finishButton} onPress={() => {
          endtest();

        }}>
          <Text style={styles.finishButtonText}>Terminer</Text>
        </TouchableOpacity>
      </View>
    );
  }

  const currentQuestion = questions[currentQuestionIndex];

  return (
    <View style={styles.container}>
      <Text style={styles.testName}>{testName}</Text>
      <View style={styles.questionContainer}>
        <Text style={styles.questionTitle}>{currentQuestion.title}</Text>
      </View>
      <View style={styles.answersContainer}>
        <TouchableOpacity
          onPress={() => handleAnswerClick(currentQuestion.p1)}
          disabled={answered}
          style={styles.answer}
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
          style={styles.answer}
        >
          <Image
            source={require("../assets/images/triangle.png")}
            style={styles.answerImage}
          />
          <Text style={styles.answerText}>{currentQuestion.p2}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => handleAnswerClick(currentQuestion.p3)}
          disabled={answered}
          style={styles.answer}
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
          style={styles.answer}
        >
          <Image
            source={require("../assets/images/losange.png")}
            style={styles.answerImage}
          />
          <Text style={styles.answerText}>{currentQuestion.p4}</Text>
        </TouchableOpacity>
      </View>
      {answered && (
        <TouchableOpacity style={styles.nextQuestionButton} onPress={handleNextQuestion}>
          <Text style={styles.nextQuestionText}>Question suivante</Text>
        </TouchableOpacity>
      )}
    </View>
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
    marginBottom: 20,
  },
  questionContainer: {
    width: "100%",
    alignItems: "center",
    marginBottom: 20,
  },
  questionTitle: {
    fontSize: 20,
    textAlign: "center",
  },
  answersContainer: {
    width: "100%",
    alignItems: "center",
  },
  answer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#432683",
    padding: 15,
    borderRadius: 5,
    marginVertical: 10,
    width: "80%",
    justifyContent: "center",
  },
  answerText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
  answerImage: {
    width: 50,
    height: 50,
    marginRight: 10,
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
  testFinishedContainer: {
    flex: 1,
    alignItems: "center",
  },
  testFinishedTitle: {
    fontSize: 24,
    fontWeight: "bold",
  },
  testFinishedSubtitle: {
    fontSize: 20,
    marginBottom: 10,
  },
  answerResult: {
    fontSize: 16,
    marginBottom: 5,
  },
  finishButton: {
    marginTop: 20,
    padding: 15,
    backgroundColor: "#432683",
    borderRadius: 5,
  },
  finishButtonText: {
    color: "white",
    fontSize: 18,
  },
});

export default TemplateTest;
