// (function(){
    
//     var word = "racecar"
//     var reverseword = word.split('').reverse().join('');
    
//     //console.log(reverseword);
    
//     if (word === reverseword) {
//       console.log(true)
    
//     } else {
//       console.log(false);
//     }
    
    
//     })()

    function palindrome(word) {
        return word === word.split('').reverse().join('');
    }

    module.exports = palindrome;