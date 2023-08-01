module.exports = function reverse (n) {

    let strNumber = String(Math.abs(n));
    let newStr='';
    let reverseNumb;
    for(let i=strNumber.length -1;i>=0; i--){
      newStr+=strNumber[i];
      
    }
    
    return Number(newStr);
}




