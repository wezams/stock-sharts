import { say } from 'cowsay';

export function HejDanne() {
  console.clear;
  console.log(
    say({
      text: 'Hej danne!',
      e: '^^',
    }),
  );
}
