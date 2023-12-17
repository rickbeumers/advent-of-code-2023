import { readData } from '../../shared.ts';
import chalk from 'chalk';

export async function day1b(dataPath?: string) {
  const data = await readData(dataPath);

  const perLine = data.map((line) => {
    const first = getFirstNumberInString(line);
    const last = getLastNumberInString(line);

    return `${first}${last}`;
  });

  return perLine.reduce((acc, curr) => acc + parseInt(curr), 0);
}

const getFirstNumberInString = (line: string) => {
  if (!isNaN(parseInt(line.charAt(0)))) {
    return line.charAt(0);
  }

  const regex = /^(one|two|three|four|five|six|seven|eight|nine)/gi;
  const match = line.match(regex)?.[0];

  if (match === null || match === undefined) {
    return getFirstNumberInString(line.slice(1));
  }

  return replaceNumberInString(match);
};

const getLastNumberInString = (line: string) => {
  if (!isNaN(parseInt(line.charAt(line.length - 1)))) {
    return line.charAt(line.length - 1);
  }

  const regex = /(one|two|three|four|five|six|seven|eight|nine)$/gi;
  const match = line.match(regex)?.[0];

  if (match === null || match === undefined) {
    return getLastNumberInString(line.substring(0, line.length - 1));
  }

  return replaceNumberInString(match);
};

const replaceNumberInString = (txt: string) => {
  return txt
    .replace('one', '1')
    .replace('two', '2')
    .replace('three', '3')
    .replace('four', '4')
    .replace('five', '5')
    .replace('six', '6')
    .replace('seven', '7')
    .replace('eight', '8')
    .replace('nine', '9');
};

// const answer = await day1b('./puzzles/day-1/day-1-b.sample-data.txt');
const answer = await day1b('./puzzles/day-1/day-1-b.data.txt');
console.log(chalk.bgGreen('Your Answer:'), chalk.green(answer));
