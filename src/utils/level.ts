export const level = (score: number) => {
  switch (true) {
    case score >= 0 && score < 10:
      return 2000;
      break;
    case score >= 10 && score < 15:
      return 1750;
      break;
    case score >= 15 && score < 20:
      return 1500;
      break;
    case score >= 20 && score < 25:
      return 1250;
      break;
    case score >= 20:
      return 1000;
      break;
    default:
      break;
  }
};
