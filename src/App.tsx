import Header from "./components/quizAppHeadline/quizzAppHeadline";
import QuizzApp from "./components/quizzApp/QuizzApp";
import { quiz } from "./components/static/data";
import "./App.css";

const App = () => {
  return (
    <>
      <Header />
      <QuizzApp quiz={quiz} />
    </>
  );
};
export default App;
