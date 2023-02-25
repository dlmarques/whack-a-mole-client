import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { gameActions } from "../store/game/game";
import { randomGenerator } from "../utils/numberGenerator";

//styles
import styles from "./holes.module.scss";

//images
import hole from "../assets/WAM_Hole.png";
import mole from "../assets/WAM_Mole.png";
import { positions } from "../utils/positions";
import { level } from "../utils/level";

const Holes = () => {
  const dispatch = useDispatch();
  const score = useSelector((state: any) => state.game.score);
  const [currentMole, setCurrentMole] = useState<number>();

  const attackMole = () => {
    setCurrentMole(0);
    dispatch(gameActions.incrementScore());
  };

  useEffect(() => {
    const auxInterval = level(score);
    const interval = setInterval(() => {
      const auxNumber = randomGenerator();
      setCurrentMole(auxNumber);
    }, auxInterval);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.holes}>
      {positions.map((p: number) => {
        return (
          <div key={p} className={styles.hole}>
            <img
              src={currentMole === p ? mole : hole}
              alt="hole"
              onClick={() => (currentMole === p ? attackMole() : null)}
            />
          </div>
        );
      })}
    </div>
  );
};

export default Holes;
