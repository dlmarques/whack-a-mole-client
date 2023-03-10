import { createSlice } from "@reduxjs/toolkit";

const gameSlice = createSlice({
  name: "game",
  initialState: {
    username: "",
    score: 0,
    gameStarted: false,
    gameOver: false,
  },
  reducers: {
    createSession(state, action) {
      state.username = action.payload;
      state.gameStarted = true;
    },
    incrementScore(state) {
      state.score = ++state.score;
    },
    endGame(state) {
      state.gameOver = true;
    },
    restartGame(state) {
      state.gameStarted = true;
      state.gameOver = false;
      state.score = 0;
    },
  },
});

export const gameActions = gameSlice.actions;
export default gameSlice;
