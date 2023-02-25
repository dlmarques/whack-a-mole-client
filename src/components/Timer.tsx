import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { gameActions } from "../store/game/game";
import styles from "./timer.module.scss";

const Timer = () => {
  const dispatch = useDispatch();
  const [minutes, setMinutes] = useState(1);
  const [seconds, setSeconds] = useState(0);
  useEffect(() => {
    let myInterval = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      }
      if (seconds === 0) {
        if (minutes === 0) {
          dispatch(gameActions.endGame());
          clearInterval(myInterval);
        } else {
          setMinutes(minutes - 1);
          setSeconds(59);
        }
      }
    }, 1000);
    return () => {
      clearInterval(myInterval);
    };
  });

  return (
    <div className={styles.timer}>
      <h1>
        {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
      </h1>
    </div>
  );
};

export default Timer;
