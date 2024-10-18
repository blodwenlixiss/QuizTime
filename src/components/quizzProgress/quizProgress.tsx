import styles from "./quizprogress.module.css";

export const QuizProgress: React.FC<{
  disabled: number | null;
  onContinue(): void;
  progressValue: number;
  currentQuestion: number;
}> = ({ disabled, onContinue, progressValue, currentQuestion }) => {
  return (
    <footer>
      <div className={styles.progress}>
        <span style={{ display: "flex", gap: "10px", alignItems: "center" }}>
          <progress
            value={progressValue}
            max="100"
            className={styles["progress-bar"]}
          />
          <span>{currentQuestion + 1}/{qu}</span>
        </span>
        <button
          disabled={disabled === null}
          className={styles["continue-button"]}
          onClick={onContinue}
        >
          Continue
        </button>
      </div>
    </footer>
  );
};
