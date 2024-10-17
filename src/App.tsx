import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/quizAppHeadline/quizzAppHeadline";
import QuizzApp from "./components/quizzApp/QuizzApp";
import quiz from "./components/static/data";
import { useState } from "react";

function App() {
  const [question, setQuestion] = useState([]);
  let activeQuestionIndex = question.length;
  const handleQuestionOut = (userAnswer) => {
    setQuestion((prevQeustion) => {
      return [...prevQeustion, userAnswer];
    });
  };

  return (
    <main style={{ backgroundColor: "#f0f0f0", height: "100vh" }}>
      <Header />
      <main>
        <h3>{quiz.questions[activeQuestionIndex].name}</h3>
        <ol>
          {quiz.questions[activeQuestionIndex].variants.map(
            (variant, index) => {
              return (
                <li key={index}>
                  <button onClick={() => handleQuestionOut(variant.name)}>
                    {variant.name}
                  </button>
                </li>
              );
            }
          )}
        </ol>
        <button>continue</button>
      </main>
    </main>
  );
}

export default App;
