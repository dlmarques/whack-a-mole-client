import { configureStore } from "@reduxjs/toolkit";
import gameSlice from "./game/game";

const store = configureStore({
  reducer: {
    game: gameSlice.reducer,
  },
});

export default store;
