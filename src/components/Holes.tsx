import React from "react";
import styles from "./holes.module.scss";

//images
import hole from "../assets/WAM_Hole.png";
import mole from "../assets/WAM_Mole.png";

const Holes = () => {
  return (
    <div className={styles.holes}>
      <div className={styles.row}>
        <div className={styles.hole}>
          <img src={hole} alt="hole" />
        </div>
      </div>
      <div className={styles.row}></div>
      <div className={styles.row}></div>
    </div>
  );
};

export default Holes;
