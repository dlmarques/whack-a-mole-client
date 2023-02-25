import styles from "./app.module.scss";
import Holes from "./components/Holes";
import ScoreDisplay from "./components/ScoreDisplay";

function App() {
  return (
    <div className={styles.app}>
      <ScoreDisplay />
      <Holes />
    </div>
  );
}

export default App;
