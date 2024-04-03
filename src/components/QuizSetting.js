import React, { useState, useEffect } from "react";
import { fetchCategories } from "../utils/api";
import {
  Wrapper,
  SelectGroup,
  Label,
  SelectBox,
  Select,
  Counter,
  Sign,
  Input,
  StartButton,
} from "./styles";

const levelOptions = [
  { value: "any", label: "Any Difficulty" },
  { value: "easy", label: "Easy" },
  { value: "medium", label: "Medium" },
  { value: "hard", label: "Hard" },
];

const QuizSetting = ({ onStartQuiz }) => {
  const [count, setCount] = useState(10);
  const [categories, setCategories] = useState([]);
  const [category, setCategory] = useState("0");
  const [level, setLevel] = useState("0");

  useEffect(() => {
    const fetchInitialData = async () => {
      try {
        const categories = await fetchCategories();
        setCategories(categories);
      } catch (error) {
        console.error(error);
      }
    };

    fetchInitialData();
  }, []);

  const onChangeCount = (value) => {
    if (value >= 1) {
      setCount(value);
    }
  };

  const onChangeCategory = (value) => {
    setCategory(value);
  };

  const onChangeLevel = (value) => {
    setLevel(value);
  };

  const handleStartQuiz = () => {
    // onStartQuiz 함수 호출할 때 count, category, level 값을 전달
    onStartQuiz(count, category, level);
  };

  return (
    <Wrapper>
      <h2>Quiz Setting</h2>
      <SelectGroup>
        <Label>Number of Quiz</Label>
        <SelectBox>
          <Counter>
            <Sign onClick={() => onChangeCount(count - 1)}>-</Sign>
            <Input
              type="number"
              value={count}
              onChange={(e) => onChangeCount(parseInt(e.target.value))}
            />
            <Sign onClick={() => setCount(count + 1)}>+</Sign>
          </Counter>
        </SelectBox>
      </SelectGroup>
      <SelectGroup>
        <Label>Quiz Category</Label>
        <Select
          value={category}
          onChange={(e) => onChangeCategory(e.target.value)}
        >
          <option value="0">Any Category</option>
          {categories.map((category) => (
            <option key={category.id} value={category.id}>
              {category.name}
            </option>
          ))}
        </Select>
      </SelectGroup>
      <SelectGroup>
        <Label>Quiz Level</Label>
        <Select value={level} onChange={(e) => onChangeLevel(e.target.value)}>
          {levelOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </Select>
      </SelectGroup>
      <StartButton onClick={handleStartQuiz}>Quiz Start</StartButton>
    </Wrapper>
  );
};

export default QuizSetting;
