import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/quizAppHeadline/quizzAppHeadline";
import QuizzApp from "./components/quizzApp/QuizzApp";
import quiz from "./components/static/data";
import { useState } from "react";

function App() {
  const [question, setQuestion] = useState(quiz.questions[0]);

  return (
    <main style={{ backgroundColor: "#f0f0f0", height: "100vh" }}>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<QuizzApp question={question} />} />
        </Routes>
      </BrowserRouter>
    </main>
  );
}

export default App;
