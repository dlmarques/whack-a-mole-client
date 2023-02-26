import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { gameActions } from "../store/game/game";
import styles from "./start-game.module.scss";

const StartGame = () => {
  const dispatch = useDispatch();
  const [username, setUsername] = useState<string>();
  const [error, setError] = useState<boolean>();

  const createSession = () => {
    if (username) {
      setError(false);
      dispatch(gameActions.createSession(username));
    } else {
      setError(true);
    }
  };

  return (
    <div className={styles["start-screen"]}>
      <div className={styles.register}>
        <input
          type="text"
          placeholder="Username"
          onChange={(e) => setUsername(e.target.value)}
          required
          role="username-input"
          className={error ? styles["input-error"] : styles.input}
        />
        {error && (
          <span className={styles.alert}>Please insert an username</span>
        )}
        <button role="start-game" onClick={() => createSession()}>
          Start game
        </button>
      </div>
    </div>
  );
};

export default StartGame;
