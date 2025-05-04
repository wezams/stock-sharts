import cowsay from "cowsay";
export function HejDanne(){
    console.clear;
    console.log(cowsay.say({
        text: "Hej danne!",
        e: "^^"
    }))
}
HejDanne();