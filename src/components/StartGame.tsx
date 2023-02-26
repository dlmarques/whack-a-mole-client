import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { gameActions } from "../store/game/game";
import styles from "./start-game.module.scss";

const StartGame = () => {
  const dispatch = useDispatch();
  const [username, setUsername] = useState<string>();

  const createSession = () => {
    if (username) dispatch(gameActions.createSession(username));
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
        />
        <button role="start-game" onClick={() => createSession()}>
          Start game
        </button>
      </div>
    </div>
  );
};

export default StartGame;
