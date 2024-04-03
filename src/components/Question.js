import React, { useState } from "react";
import {
  QuestionContainer,
  QuestionText2,
  Answers,
  AnswerButton,
  NextButton,
} from "./styles";

const Question = ({
  index,
  question,
  answers,
  correctAnswer,
  onNextQuestion,
  updateCount,
}) => {
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  const handleAnswerClick = (answer) => {
    const isCorrect = answer === correctAnswer;
    setSelectedAnswer(answer);
    updateCount(isCorrect, question, answer);
  };

  const handleNextQuestion = () => {
    setSelectedAnswer(null);
    onNextQuestion();
  };

  return (
    <QuestionContainer>
      <QuestionText2>
        문제 {index + 1}: {decodeURIComponent(question)}
      </QuestionText2>
      <Answers>
        {answers.map((answer, idx) => (
          <AnswerButton
            key={idx}
            selected={selectedAnswer === answer}
            isCorrect={
              selectedAnswer === answer && selectedAnswer === correctAnswer
            }
            onClick={() => handleAnswerClick(answer)}
            disabled={selectedAnswer !== null}
          >
            {decodeURIComponent(answer)}
          </AnswerButton>
        ))}
      </Answers>
      {selectedAnswer && (
        <div>
          <p>
            {selectedAnswer === correctAnswer ? "정답입니다!" : "오답입니다!"}
          </p>
          <NextButton onClick={handleNextQuestion}>다음 문제로</NextButton>
        </div>
      )}
    </QuestionContainer>
  );
};

export default Question;
