// computerChoice
function computerChoice()
{
  // random a number for 1 to 3
  let rng = Math.floor(Math.random()*100);
  if (rng < 30)
  {
    return 0; // rock
  }
  else if (rng < 60)
  {
    return 1; //paper
  }
  else
  {
    return 2; //scissors
  }
}
// winOrLose
function winOrLose()
{
  // User input 
  let invalidInput = true;
  let validAns = ["rock", "paper", "scissors"];
  let strToNum = validAns;
  let ans = prompt("Choice?").toLowerCase();
  do 
  {
    // check if ans is a valid answer
    if (validAns.indexOf(ans) === -1)
    {
      ans = prompt("Invalid. Another choice?").toLowerCase();
    }
    else
    {
      // Change input into number
      ans = strToNum.indexOf(ans);
      invalidInput = false;
    }
  }
  while (invalidInput);
  // computer choice
  let comChoice = computerChoice();
  // result
  let numToStr = ["Rock", "Paper", "Scissors"];
  let win = "You win. "+ numToStr[ans] + " beat " + numToStr[comChoice];
  let lose = "You lost. "+ numToStr[comChoice] + " beat " + numToStr[ans];
  let draw = "Draw. Both are " + numToStr[ans];
  // if com is the last and u are first
  if (Math.abs(comChoice-ans) == 2)
  {
    if (ans == 2)
    {
      return lose;
    }
  }

  // if both have the same ans
  else if (comChoice == ans)
  {
    return draw;
  }
  // if computer have better choice
  else if (comChoice > ans)
  {
    return lose;
  }
  return win;
}
// play 
function play()
{
  let result = Array(5);
  for (let time = 0; time < 5; time++)
  {
    result[time] = winOrLose();
  }
  //track winner
  let win = 0, draw = 0;
  for (let i = 0; i < 5; i++)
  {
    console.log(result[i]);
    if (result[i].search("win") != -1)
    {
      win++;
    }
    if (result[i].search("Draw") != -1)
    {
      draw++;
    }
  }
  if (win >= 3)
  {
    console.log("Winner: Player")
  }
  else if (draw == 5)
  {
    console.log("No one win...")
  }
  else
  {
    console.log("Computer win!!!")
  }
}
console.log(play());
