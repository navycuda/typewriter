// Variables
const sentence = "hello there from lighthouse labs";
const length = sentence.length;
let time = 0;

for (let c = 0; c < length; c++) {
  let char = sentence[c];
  //console.log(char);
  setTimeout(() => {
    if (c === length - 1) {
      char += `\n`;
    }
    process.stdout.write(char);
  }, time);
  time += 50;
}