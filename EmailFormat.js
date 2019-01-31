/*8 Write a pattern that matches e-mail addresses?
 *a.Uppercase (A-Z) and lowercase (a-z) English letters.
 *b.Digits (0-9).
 *c.Characters ! # $ % & ' * + - / = ? ^ _ ` { | } ~
 *d.Character . ( period, dot or fullstop)*/

function email(string)
{
var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;  //valid Format
if(mailformat.test(string))
{  
console.log("Valid email address!");  
}  
else  
{  
console.log("You have entered an invalid email address!");  
}
}

email('3663663');