import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { gameActions } from "../store/game/game";
import { randomGenerator } from "../utils/numberGenerator";

//styles
import styles from "./holes.module.scss";

//images
import hole from "../assets/WAM_Hole.png";
import mole from "../assets/WAM_Mole.png";
import { positions } from "../utils/positions";

const Holes = () => {
  const dispatch = useDispatch();
  const [currentMole, setCurrentMole] = useState<number>();

  const attackMole = () => dispatch(gameActions.incrementScore());

  useEffect(() => {
    const interval = setInterval(() => {
      const auxNumber = randomGenerator();
      setCurrentMole(auxNumber);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.holes}>
      {positions.map((p: number) => {
        return (
          <div className={styles.hole}>
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
