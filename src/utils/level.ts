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
    case score >= 20 && score < 30:
      return 1000;
      break;
    case score >= 30 && score < 40:
      return 750;
      break;
    case score >= 40 && score < 50:
      return 500;
      break;
    default:
      break;
  }
};
