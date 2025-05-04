import { say } from 'cowsay';
const i = {
    e: n.eyes || "^^",
    T: n.tongue || "  ",
    n: n.wrap,
    W: n.wrapLength || 40,
    text: n.text || "",
    _: n.text || [],
    f: n.cow
};

export function HejDanne() {
  console.clear;
  console.log(
    say({
      text: 'Hej danne!',
      e: '^^',
    }),
  );
}
HejDanne();
