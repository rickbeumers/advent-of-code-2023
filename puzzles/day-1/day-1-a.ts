import { readData } from '../../shared.ts';
import chalk from 'chalk';

export async function day1a(dataPath?: string): Promise<number> {
  const data = await readData(dataPath);

  const perLine = data.map((line) => {
    const characters = line.split('');

    const numbers = characters.filter((letter) => !isNaN(parseInt(letter)));

    const first = numbers[0];
    const last = numbers[numbers.length - 1];

    return `${first}${last}`;
  });

  return perLine.reduce((acc, curr) => acc + parseInt(curr), 0);
}

// const answer = await day1a("./puzzles/day-1/day-1-a.sample-data.txt");
const answer = await day1a("./puzzles/day-1/day-1-a.data.txt");
console.log(chalk.bgGreen('Your Answer:'), chalk.green(answer));
