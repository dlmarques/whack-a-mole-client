import { useSelector } from "react-redux";
import styles from "./app.module.scss";
import Holes from "./components/Holes";
import ScoreDisplay from "./components/ScoreDisplay";
import StartGame from "./components/StartGame";

function App() {
  const isStarted = useSelector((state: any) => state.game.gameStarted);
  const gameOver = useSelector((state: any) => state.game.gameOver);

  return (
    <div className={styles.app}>
      {!isStarted && (
        <div className={styles["start"]}>
          <StartGame />
        </div>
      )}
      {isStarted && (
        <div className={styles["in-game"]}>
          <ScoreDisplay />
          <Holes />
        </div>
      )}
      {gameOver && <div className={styles.leaderboard}></div>}
    </div>
  );
}

export default App;
