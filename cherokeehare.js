

function cherokeehare(startingPopulation){

    let birthRate = 0.1;
    let numberOfWeeks = 5
  
    var x = startingPopulation + ((startingPopulation * birthRate) * numberOfWeeks)
  
    return x
}
  
module.exports = cherokeehare;
