/*Write a JavaScript program which compute, the average marks of the following students Then, this average is used to determine the corresponding grade?

Student Name    Marks
David        80
Vinoth        77
Divya        88
Ishitha        95
Thomas        68

Range    Grade
<60    F
<70    D
<80    C
<90    B
<100    A
*/

var students = [['David', 80], ['Vinoth', 77], ['Divya', 88], ['Ishitha', 95], ['Thomas', 68]];

var Averagemarks = 0;

for (var i=0; i < students.length; i++) 
{        //FINDING ARRAY
        Averagemarks += students[i][1];
        var Average = (Averagemarks/students.length);
}

console.log("Average grade: " + (Averagemarks)/students.length);
       //CHECKING FOR THE GRADE
        if (Average < 60){
          console.log("Grade : F");      
          } 
        else if (Average < 70) {
                console.log("Grade : D"); 
                  } 
        else if (Average < 80) 
             {
                console.log("Grade : C"); 
        } else if (Average < 90) {
                console.log("Grade : B"); 
        } else if (Average < 100) {
                console.log("Grade : A"); 
}