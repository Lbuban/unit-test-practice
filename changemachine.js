
function changemachine(amount){

    let remainder = 0;
    let change = [];

    change.push(Math.floor(amount/20));
    remainder = amount % 20;
    
    change.push(Math.floor(remainder/10));
    remainder = amount % 10;
    
    change.push(Math.floor(remainder/5));
    remainder = amount % 5;
    
    change.push(Math.floor(remainder/1));
    remainder = amount % 1;

    return change
   
}


module.exports = changemachine;
    

    