import React from "react";
import {
  ModalOverlay,
  ModalContent,
  ModalCloseButton,
  QuestionWrapper,
  QuestionText,
  Answers,
  AnswerButton,
  NavigationButtons,
  ArrowButton,
} from "./styles";

const WrongNote = ({ wrongAnswers, onClose }) => {
  const [currentIndex, setCurrentIndex] = React.useState(0);

  const handleNext = () => {
    if (currentIndex < wrongAnswers.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const currentAnswer = wrongAnswers[currentIndex];

  return (
    <ModalOverlay>
      <ModalContent>
        <ModalCloseButton onClick={onClose}>Close</ModalCloseButton>
        <h2>오답노트</h2>
        {currentAnswer && (
          <QuestionWrapper>
            <QuestionText>
              문제 {currentIndex + 1}:{" "}
              {decodeURIComponent(currentAnswer.question)}
            </QuestionText>
            <Answers>
              {currentAnswer.answers.map((answer, idx) => (
                <AnswerButton
                  key={idx}
                  selected={
                    answer === currentAnswer.userAnswer ||
                    answer === currentAnswer.correctAnswer
                  }
                  isCorrect={answer === currentAnswer.correctAnswer}
                  disabled
                >
                  {decodeURIComponent(answer)}
                </AnswerButton>
              ))}
            </Answers>
          </QuestionWrapper>
        )}
        <NavigationButtons>
          <ArrowButton onClick={handlePrevious} disabled={currentIndex === 0}>
            ◀
          </ArrowButton>
          <ArrowButton
            onClick={handleNext}
            disabled={currentIndex === wrongAnswers.length - 1}
          >
            ▶
          </ArrowButton>
        </NavigationButtons>
      </ModalContent>
    </ModalOverlay>
  );
};

export default WrongNote;
