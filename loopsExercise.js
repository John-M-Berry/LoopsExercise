//      ONE

for (i = 1; i < 8; i ++){
    console.log(i);
  }

  console.log(`=========^==ONE==^==========`);
  
  //      TWO

for (j = 5; j < 26; j +=4){
    console.log(j);
}

console.log(`=======^==TWO==^============`);

//      THREE a

const wizards = [
    `Harry Potter`,
    `Hermione Granger`,
    `Ron Weasley`
]

//      THREE b
for (char of wizards) {
    console.log(char);
}

console.log(`========^==THREE B==^===========`);

//      FOUR a

let harryPotterMovies=0
console.log(harryPotterMovies);

console.log(`========^==FOUR A==^===========`);

//      FOUR B
while (harryPotterMovies <= 7){
    console.log(harryPotterMovies);
    harryPotterMovies++;
}
console.log('That makes:',harryPotterMovies,`Harry Potter Movies!`);

console.log(`========^==FOUR B==^===========`);

//      BONUS FIVE a

const hogwartHouses = [
    `Gryffindor`,
    `Hufflepuff`,
    `Ravenclaw`,
    `Slytherin`
]

//      BONUS FIVE b

for (house of hogwartHouses){
    console.log(house);
    for (chr of house){
        console.log(chr);
    }
}
console.log(`========^==FIVE B==^===========`);

//      BONUS SIX a

const quote = [
    `Yer`,
    `A`,
    `Wizard`,
    `Harry`
]
var sentence=``;
for (word of quote){
    sentence=sentence.concat(word,` `);
}
console.log(sentence);
console.log(`========^==SIX B==^===========`);