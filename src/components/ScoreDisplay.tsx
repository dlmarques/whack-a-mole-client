import React from "react";
import { useSelector } from "react-redux";
import styles from "./score-display.module.scss";

const ScoreDisplay = () => {
  const score = useSelector((state: any) => state.game.score);
  return (
    <div className={styles["score-display"]}>
      <h1>Score: {score}</h1>
    </div>
  );
};

export default ScoreDisplay;
