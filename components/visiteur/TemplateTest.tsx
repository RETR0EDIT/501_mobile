import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ActivityIndicator,
} from "react-native";
import { useRoute } from "@react-navigation/native";
import Questions from "@/src/services/Questions";
import Answers from "@/src/services/Answers";
import ModelQuestion from "@/app/models/ModelQuestion";
import ModelAnswers from "@/app/models/ModelAnswers";

const TemplateTest: React.FC = () => {
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
  const [userAnswers, setUserAnswers] = useState<ModelAnswers[]>([]);

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const response = await Questions.Read(idTest);
        if (Array.isArray(response)) {
          setQuestions(response);
        } else {
          setError("La réponse de l'API n'est pas un tableau.");
        }
      } catch (err) {
        setError("Erreur lors de la récupération des questions.");
      } finally {
        setLoading(false);
      }
    };

    fetchQuestions();
  }, [idTest]);

  const handleAnswerClick = async (selectedAnswer: string) => {
    const currentQuestion = questions[currentQuestionIndex];
    setAnswered(true);
    const isCorrect = selectedAnswer === currentQuestion.pr;

    const userId = localStorage.getItem("userId");
    if (!userId) {
      console.error("ID utilisateur non trouvé dans le local storage");
      return;
    }

    const answer: ModelAnswers = {
      id: 0,
      content: selectedAnswer,
      correct: isCorrect,
      account: { id: parseInt(userId) },
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
      setIsTestFinished(true);
    }
  };

  const handleFinishTest = async () => {
    console.log("Test terminé !");
  };

  if (loading) {
    return (
      <View>
        <ActivityIndicator size="large" color="#0000ff" />
        <Text>Chargement des questions...</Text>
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

  if (isTestFinished) {
    return (
      <View>
        <Text>Test terminé !</Text>
        <Text>Récapitulatif des réponses :</Text>
        {userAnswers.map((answer, index) => (
          <Text key={index}>
            Question {answer.question.id}: {answer.content} -{" "}
            {answer.correct ? "Correct" : "Incorrect"}
          </Text>
        ))}
        <TouchableOpacity onPress={handleFinishTest}>
          <Text>Terminer</Text>
        </TouchableOpacity>
      </View>
    );
  }

  const currentQuestion = questions[currentQuestionIndex];

  return (
    <View>
      <Text>{testName}</Text>
      <View>
        <Text>{currentQuestion.title}</Text>
      </View>
      <View>
        <TouchableOpacity
          onPress={() => handleAnswerClick(currentQuestion.p1)}
          disabled={answered}
        >
          <Image source={require("../../assets/images/carre.svg")} />
          <Text>{currentQuestion.p1}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => handleAnswerClick(currentQuestion.p2)}
          disabled={answered}
        >
          <Image source={require("../../assets/images/triangle.svg")} />
          <Text>{currentQuestion.p2}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => handleAnswerClick(currentQuestion.p3)}
          disabled={answered}
        >
          <Image source={require("../../assets/images/rond.svg")} />
          <Text>{currentQuestion.p3}</Text>
        </TouchableOpacity>
      </View>
      {answered && (
        <View>
          <TouchableOpacity onPress={handleNextQuestion}>
            <Text>Question suivante</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

export default TemplateTest;
