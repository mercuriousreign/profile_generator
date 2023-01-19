const { Console } = require('console');
const readline = require('readline');
let listAns = [];

let questions = ["What do you preffer the most? For of loop or Map function? ",
  "Why do you think that is? ",
  "Was there a time where you used opposite of your preffered method? ",
  "Did you managed it just fine? "]



let rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});



rl.question(questions[0], (answer) => {
  rl.question(questions[1], (answer) => {
    listAns.push(answer);
    rl.question(questions[2], (answer) => {
      listAns.push(answer);
      rl.question(questions[3], (answer) => {
        listAns.push(answer);
        rl.close();
      });
    });
  });
});

rl.on('close', () => console.log(`So you prefer to use ${listAns[0]} because ${listAns[1]}, but once upon a time you ${listAns[2]} and you manage it ${listAns[3]}, thats pretty interesting`));
