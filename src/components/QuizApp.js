import React, { useState, useEffect } from "react";
import styled from "styled-components";
import useQuizData from "../hooks/useQuizData";
import QuizSetting from "./QuizSetting";
import Question from "./Question";
import Chart from "./Chart";
import WrongNote from "./WrongNote";

const QuizContainer = styled.div`
  /* display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column; */
`;

const QuizApp = () => {
  const [started, setStarted] = useState(false);
  const [quizSetting, setQuizSetting] = useState({
    count: 10,
    category: "0",
    level: "any",
  });

  const {
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
  } = useQuizData(
    quizSetting ? quizSetting.count : 10,
    quizSetting ? quizSetting.category : "0",
    quizSetting ? quizSetting.level : "any",
    started
  );

  useEffect(() => {
    if (started) {
      // 시작하면서 quizSetting이 변경되면 다시 useQuizData를 호출
      handleStartQuiz();
    }
    // eslint-disable-next-line
  }, [quizSetting]);

  const handleStartClick = (count, category, level) => {
    setQuizSetting({ count, category, level });
    setStarted(true);
  };

  const handleShowWrongNote = () => {
    setShowWrongNote(true);
  };

  const handleCloseWrongNote = () => {
    setShowWrongNote(false);
  };

  return (
    <QuizContainer>
      <h1>Quiz App</h1>
      {!started && <QuizSetting onStartQuiz={handleStartClick} />}
      {started &&
        questions.length > 0 &&
        currentQuestionIndex < questions.length && (
          <Question
            question={questions[currentQuestionIndex].question}
            answers={questions[currentQuestionIndex].answers}
            correctAnswer={questions[currentQuestionIndex].correct_answer}
            onAnswerSelect={handleAnswerSelect}
            onNextQuestion={() =>
              setCurrentQuestionIndex(currentQuestionIndex + 1)
            }
            updateCount={updateCount}
            index={currentQuestionIndex}
          />
        )}
      {chartData && (
        <Chart
          chartData={chartData}
          totalTime={totalTime}
          handleShowWrongNote={handleShowWrongNote}
        />
      )}
      {showWrongNote && (
        <WrongNote wrongAnswers={wrongAnswers} onClose={handleCloseWrongNote} />
      )}
    </QuizContainer>
  );
};

export default QuizApp;
