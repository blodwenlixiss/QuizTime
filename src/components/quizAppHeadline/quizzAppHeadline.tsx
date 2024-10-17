import React from "react";
import styles from "./quizzAppHeadline.module.css";

const Header: React.FC = () => {
  return (
    <header className={styles.headerWrapper}>
      <h1 className={styles.headerTitle}>QuizTime</h1>
      <span style={{ fontSize: "32px", fontWeight: "600" }}>Quiz #2</span>
    </header>
  );
};
export default Header;
