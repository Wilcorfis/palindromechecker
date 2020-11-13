/*
El metacarácter \ W se utiliza para encontrar 
un carácter que no sea una palabra. Un carácter 
de palabra es un carácter de az, AZ, 0-9, incluido 
el carácter de subrayado . Esto significa que si usa
https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Regular_Expressions
Expresiones irregulares
 [\ W] y no [\ W_]*/
function palindrome(str) {
    let varString = str.replace(/\W+|_/g, "").toLowerCase();
    let reverseString = varString.split("").reverse().join("");
    return varString === reverseString ? true : false;

}
let result=palindrome("anitalavalatina");
alert(result);