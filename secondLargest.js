function secondLargest(data) {
    data.sort(function(a,b){return a - b})
        return data [data.length -2];
    }

module.exports = secondLargest;

