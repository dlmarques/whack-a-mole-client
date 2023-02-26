import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Score } from "../models/score";
import { getScores } from "../services/getScores";
import { gameActions } from "../store/game/game";
import styles from "./leaderboard.module.scss";

const Leaderboard = () => {
  const dispatch = useDispatch();
  const username = useSelector((state: any) => state.game.username);
  const score = useSelector((state: any) => state.game.score);
  const [scores, setScores] = useState<Score[]>();

  useEffect(() => {
    getScores({ name: username, score: score }).then((res) => {
      setScores(res);
    });
  }, []);

  const restartGame = () => dispatch(gameActions.restartGame());

  return (
    <div className={styles.leaderboard}>
      <h1>Leaderboard</h1>
      {scores &&
        scores
          .sort((a, b) => {
            return b.score - a.score;
          })
          .map((score) => {
            return (
              <div className={styles.score} role="record">
                <h5>{score.name}</h5>
                <h5>{score.score}</h5>
              </div>
            );
          })}

      <button onClick={() => restartGame()}>Try Again</button>
    </div>
  );
};

export default Leaderboard;
