function reverseString(string){
    if( string.length < 2) {
     throw new Error ("The length of the string should be greater than 2");
    }
    return string.split("").reverse().join("");
 }
module.exports = reverseString