import { say } from 'cowsay';

export function cowsays(Text) {
  console.clear();
  console.log(
    say({
      text: Text,
      e: '^^',
    }),
  );
}
