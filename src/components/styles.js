import styled from "styled-components";

export const Button = styled.button`
  padding: 10px 20px;
  font-size: 18px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 20px;

  &:hover {
    background-color: #0056b3;
  }

  @media screen and (max-width: 768px) {
    font-size: 16px;
  }
`;

export const StartButton = styled(Button)``;

export const WrongNoteButton = styled(Button)``;

export const AnswerButton = styled.button`
  margin: 5px;
  padding: 10px 20px;
  font-size: 14px;
  background-color: ${({ selected, isCorrect }) =>
    selected ? (isCorrect ? "#4CAF50" : "#F44336") : "#FFFFFF"};
  color: ${({ selected }) => (selected ? "#FFFFFF" : "#000000")};
  border: 2px solid
    ${({ selected, isCorrect }) =>
      selected ? (isCorrect ? "#4CAF50" : "#F44336") : "#000000"};
  border-radius: 5px;
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
  transition: background-color 0.3s, color 0.3s;

  &:hover {
    background-color: ${({ selected }) =>
      selected ? null : "rgba(0, 0, 0, 0.1)"};
  }
`;

export const ArrowButton = styled(Button)`
  padding: 5px 10px;
  font-size: 16px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  opacity: ${({ disabled }) => (disabled ? "0.5" : "1")};
  pointer-events: ${({ disabled }) => (disabled ? "none" : "auto")};
  transition: background-color 0.3s;

  &:hover {
    background-color: #0056b3;
  }
`;

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1000;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalContent = styled.div`
  background-color: #fff;
  padding: 20px;
  border-radius: 5px;
  position: relative;
  max-width: 600px;
  width: 100%;
`;

export const ModalCloseButton = styled(Button)`
  position: absolute;
  top: 10px;
  right: 10px;
`;

export const QuestionWrapper = styled.div`
  margin-bottom: 20px;
`;

export const QuestionText = styled.p`
  font-weight: bold;
  margin-bottom: 15px;
  word-break: break-all;
`;

export const Answers = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
`;

export const NavigationButtons = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
`;

export const QuizContainer = styled.div`
  text-align: center;
  padding: 20px;
  max-width: 800px;
  margin: 0 auto;
`;

export const ChartContainer = styled.div`
  margin-top: 20px;
`;

export const NextButton = styled.button`
  margin-top: 20px;
  padding: 10px 20px;
  font-size: 14px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #0056b3;
  }
`;

export const QuestionContainer = styled.div`
  text-align: center;
`;

export const QuestionText2 = styled.h2`
  margin-top: 40px;
  word-break: break-all;
`;

export const ResultContainer = styled.div`
  text-align: center;
`;

export const ResultText = styled.h2`
  margin-top: 40px;
  word-break: break-all;
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border: 2px solid #ccc;
  padding: 20px;
  border-radius: 2%;
  max-width: 800px;
  margin: 0 auto;
`;

export const SelectGroup = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
`;

export const Label = styled.label`
  font-size: 18px;
  margin-right: 10px;
`;

export const SelectBox = styled.div`
  display: flex;
  align-items: center;
`;

export const Select = styled.select`
  font-size: 16px;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #ccc;
  margin-right: 10px;
`;

export const Counter = styled.div`
  display: flex;
  align-items: center;
`;

export const Sign = styled.button`
  font-size: 20px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  padding: 5px 10px;
  cursor: pointer;
  margin: 0 10px;
  min-width: 3;
`;

export const Input = styled.input`
  font-size: 16px;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #ccc;
  width: 50px;
  text-align: center;
`;
