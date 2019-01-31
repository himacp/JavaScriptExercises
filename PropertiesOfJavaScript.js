/*Write a JavaScript program to list the properties of a JavaScript object?
Sample object :
var student = {
name : "David Rayy",
sclass : "VI",
rollno : 12 };

Sample Output : name, sclass, rollno*/

var student = {
name : "David Rayy",
sclass : "VI",
rollno : 12
};

const studentTransferd = Object.keys(student);
//Returns the names of the enumerable properties and methods of an object. 
//Object that contains the properties and methods. This can be an object that you created or an existing Document.
console.log(studentTransferd);