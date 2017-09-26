// (function(){
    
//     let letter = "a"
//     let word = "seattle";
//     let counter = 0;
//     let wordArray = word.split("")
//       //console.log(wordArray);
    
    
//     for (var i = 0; i < word.length; i++) {
//       //console.log(wordArray[i])
//       if (wordArray[i] == letter){
//         counter = counter + 1
//       }
//     }
    
//     if (counter > 0) {console.log("Yeah, the letter A exists " + counter + " in my word")}
    
//     else {
//       console.log("Nope, that letter doesn't exist in my word")
//     }
    
//     //console.log(counter)
    
//     })()

// let word = "seattle";
// let wordArray = word.split("");
// let letter = "a";


function hangman(letter, word) {
   let counter = 0
    for (var i = 0; i < word.length; i++) {
     if (word[i] === letter) counter++ ////s, e, a, t, t, l, e
    }
    return counter
}

module.exports = hangman;