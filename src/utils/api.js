import axios from "axios";

export const fetchQuizData = async (count, category, level) => {
  try {
    const response = await axios.get(
      `https://opentdb.com/api.php?amount=${count}&category=${category}&difficulty=${level}&encode=url3986`
    );
    const quizData = response.data.results.map((result) => ({
      question: result.question,
      answers: [...result.incorrect_answers, result.correct_answer].sort(
        () => Math.random() - 0.5
      ),
      correct_answer: result.correct_answer,
    }));
    return quizData;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const fetchCategories = async () => {
  try {
    const response = await fetch("https://opentdb.com/api_category.php");
    const data = await response.json();
    return data.trivia_categories;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
