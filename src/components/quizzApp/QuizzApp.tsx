import { Question } from "../static/data";
type QuizProps = { question: Question };

const QuizzApp: React.FC<QuizProps> = (props) => {
  console.log(props);
  return (
    <main>
      <h3>{props.question.name}</h3>
      <ol>
        {props.question.variants.map((variant, index) => {
          return (
            <li key={index}>
              <button>{variant.name}</button>
            </li>
          );
        })}
      </ol>
      <button>continue</button>
    </main>
  );
};
export default QuizzApp;
