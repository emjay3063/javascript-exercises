const removeFromArray = function(array,element) {
    const result = array.splice(array.indexOf(element),1);
    

    return result;

};

// Do not edit below this line
module.exports = removeFromArray;
