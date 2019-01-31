//Display all objects with occupation as 'Programmer'

var myObj =
[{'name':'Saurabh', 'age': 30, 'occupation': "Team Leader"},
{'name':'Anupriya', 'age': 32, 'occupation': "Team Leader"},
{'name':'Kalyani', 'age': 25, 'occupation': "Programmer"},
{'name':'Damodaran', 'age': 27, 'occupation': "Programmer"},
{'name':'Krishnakath', 'age': 22, 'occupation': "Programmer"},
{'name':'Venketraman', 'age': 28, 'occupation': "Programmer"}];
var Programmer=myObj.filter(value =>{
    return value.occupation === "Programmer" //FILTERS THE ONLY REQUIRED VALUES
  })
  console.log(Programmer);

//SORT BY AGE
   console.log("Sorting by age....................");
  var byAge = myObj.slice(0,5); //SLICE FUNCTION WORKS AS THE RANGE OF VALUES TO BE DISPLAYED
  byAge.sort(function(a,b) {
     return a.age - b.age;
  });
  console.log(byAge)

 


  