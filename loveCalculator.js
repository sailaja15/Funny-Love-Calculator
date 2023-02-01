

var readlineSync = require('readline-sync');
var name1 = readlineSync.question("enter first person name :");
var name2 = readlineSync.question("enter second person name :");
var loveScore = Math.random() * 100
loveScore = Math.floor(loveScore) + 1;
if(loveScore >= 70 && loveScore <= 100){
    console.log(`your love score is ${loveScore} just like romeo and juliet`);
}else if(loveScore >= 50 && loveScore <= 69 ){
 console.log(`your love score is ${loveScore} just like laila and majnu`);
}else console.log(`your love score is ${loveScore}`)