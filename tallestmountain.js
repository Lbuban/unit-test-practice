
    // function tallestMountain(mtns) {
    //     mtns.sort(function(a, b) {return a-b});
    //     return mtns [mtns.length - 1];
    // }
    
    // module.exports = tallestMountain;
    
   //////////////////////////////////////

    function tallestMountain(heights) {
        heights.sort(function(a, b)  {return a - b});
        return heights [heights.length -1];
    }
        
    module.exports = tallestMountain;
    
    // console.log(heights);
    // console.log(heights [0]); 