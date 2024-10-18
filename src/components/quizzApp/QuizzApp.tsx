import styles from "./quizApp.module.css";
import { Quiz } from "../static/data";
import { useState } from "react";
import { QuizProgress } from "../quizzProgress/quizProgress";

const QuizzApp: React.FC<{ quiz: Quiz }> = ({ quiz }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);

  const currentIndex = quiz.questions[currentQuestion];
  const progressValue = (currentQuestion / quiz.questions.length) * 100;
  const answerLetters: { [key: number]: string } = {
    1: "A",
    2: "B",
    3: "C",
    4: "D",
  };

  const handleAnswerSelect = (value: number) => {
    setSelectedAnswer(value);
  };

  const handleNextQuestion = () => {
    if (selectedAnswer !== null) {
      const correct = currentIndex.variants.find(
        (variant) => variant.id === selectedAnswer
      )?.isCorrect;

      if (correct) {
        setScore(score + currentIndex.score);
      }
      setSelectedAnswer(null);
      if (currentQuestion + 1 < quiz.questions.length) {
        setCurrentQuestion(currentQuestion + 1);
      } else {
        setShowResult(true);
      }
    }
  };

  return (
    <>
      {showResult ? (
        <div className={styles.results}>
          <h2>Quiz Finished</h2>
          <p>Your Score: {score}</p>
        </div>
      ) : (
        <>
          <main className={styles["quiz-container"]}>
            <h2>{currentIndex.name}</h2>
            <div className={styles.answers}>
              <ul>
                {currentIndex.variants.map((answer) => (
                  <li
                    className={`${styles["answer-option"]} ${
                      selectedAnswer === answer.id ? styles["selected"] : ""
                    }`}
                    key={answer.id}
                    onClick={() => handleAnswerSelect(answer.id)}
                  >
                    <span
                      style={{
                        backgroundColor: "#EDE8E3",
                        padding: "5px 9px",
                        borderRadius: "50%",
                      }}
                    >
                      {answerLetters[answer.id]}
                    </span>
                    {answer.name}
                  </li>
                ))}
              </ul>
            </div>
          </main>
          <QuizProgress
            disabled={selectedAnswer}
            onContinue={handleNextQuestion}
            progressValue={progressValue}
            currentQuestion={currentQuestion}
          />
        </>
      )}
    </>
  );
};
export default QuizzApp;
