import cowsay from "cowsay";

let  x   =1

export function HejDanne(){
    console.clear;
    console.log(cowsay.say({
        text: "Hej danne!",
        e: "^^"
    }))
}
HejDanne();