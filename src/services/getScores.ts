import axios from "axios";
import { Score } from "../models/score";

export const getScores = async (userScore: Score) => {
  return await axios
    .post("http://localhost:3001/api/game/getScores", {
      userScore: userScore,
    })
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      console.log(err);
    });
};
