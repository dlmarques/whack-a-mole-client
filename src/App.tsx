import { useSelector } from "react-redux";
import styles from "./app.module.scss";
import Holes from "./components/Holes";
import Leaderboard from "./components/Leaderboard";
import ScoreDisplay from "./components/ScoreDisplay";
import StartGame from "./components/StartGame";
import Timer from "./components/Timer";

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
      {isStarted && !gameOver && (
        <div className={styles["in-game"]}>
          <div className={styles.top}>
            <ScoreDisplay />
            <Timer />
          </div>
          <Holes />
        </div>
      )}
      {gameOver && (
        <div className={styles.leaderboard}>
          <Leaderboard />
        </div>
      )}
    </div>
  );
}

export default App;
