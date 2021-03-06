import game from '..';
import getRandomInt from '../utils';

const description = 'Is this number prime?';
const minRange = 1;
const maxRange = 100;
const isPrime = (num) => {
  if (num <= 1) return false;
  const numSqrt = Math.sqrt(num);
  for (let i = 2; i <= numSqrt; i += 1) {
    if (num % i === 0) return false;
  }
  return true;
};

const gameData = () => {
  const question = getRandomInt(minRange, maxRange);
  const answer = isPrime(question) ? 'yes' : 'no';
  return {
    question,
    answer,
  };
};

export default () => game(description, gameData);
