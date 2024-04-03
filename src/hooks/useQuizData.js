import { useState, useEffect } from "react";
import { fetchQuizData } from "../utils/api";

const useQuizData = (count, category, level) => {
  // count, category, level 추가
  const [started, setStarted] = useState(false);
  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState([]);
  const [startTime, setStartTime] = useState(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [chartData, setChartData] = useState(null);
  const [totalTime, setTotalTime] = useState("");
  const [correctCount, setCorrectCount] = useState(0);
  const [incorrectCount, setIncorrectCount] = useState(0);
  const [wrongAnswers, setWrongAnswers] = useState([]);
  const [showWrongNote, setShowWrongNote] = useState(false);

  useEffect(() => {
    if (started && currentQuestionIndex === questions.length) {
      showResult();
    }
    // eslint-disable-next-line
  }, [currentQuestionIndex, questions]);

  const handleStartQuiz = async () => {
    setStarted(true);
    setStartTime(new Date());
    setCurrentQuestionIndex(0);
    setCorrectCount(0);
    setIncorrectCount(0);
    setWrongAnswers([]);
    try {
      // 퀴즈 데이터 가져오기
      const data = await fetchQuizData(count, category, level); // count, category, level 추가
      setQuestions(data);
    } catch (error) {
      console.error(error);
    }
  };

  const updateCount = (isCorrect, question, userAnswer) => {
    if (isCorrect) {
      setCorrectCount(correctCount + 1);
    } else {
      setIncorrectCount(incorrectCount + 1);
      setWrongAnswers([
        ...wrongAnswers,
        {
          question,
          answers: questions[currentQuestionIndex].answers,
          userAnswer: userAnswer,
          correctAnswer: questions[currentQuestionIndex].correct_answer,
        },
      ]);
    }
  };

  const handleAnswerSelect = (isCorrect, question, userAnswer) => {
    setAnswers([...answers, userAnswer]);
    updateCount(isCorrect, question, userAnswer);
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  useEffect(() => {
    localStorage.setItem("quizData", JSON.stringify(wrongAnswers));
  }, [wrongAnswers]);

  const showResult = () => {
    const totalTimeInMilliseconds = new Date() - startTime;
    const minutes = Math.floor(totalTimeInMilliseconds / 60000);
    const seconds = Math.floor((totalTimeInMilliseconds % 60000) / 1000);
    const totalTime =
      minutes > 0 ? `${minutes}분 ${seconds}초` : `${seconds}초`;

    const chartData = {
      labels: ["정답", "오답"],
      datasets: [
        {
          label: "퀴즈 결과",
          data: [correctCount, incorrectCount],
          backgroundColor: ["rgb(54, 162, 235)", "rgb(255, 99, 132)"],
          hoverOffset: 4,
        },
      ],
    };
    setChartData(chartData);
    setTotalTime(totalTime);
  };

  return {
    started,
    questions,
    currentQuestionIndex,
    chartData,
    totalTime,
    wrongAnswers,
    showWrongNote,
    handleStartQuiz,
    updateCount,
    setCurrentQuestionIndex,
    setShowWrongNote,
    handleAnswerSelect,
  };
};

export default useQuizData;
