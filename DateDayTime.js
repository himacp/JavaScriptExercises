//Q 1 Write a JavaScript program to display the current day and time in the following format mm/dd/yyyy?


  var today = new Date();
  var day = today.getDate(); //predifined date
  var year=today.getFullYear();//predifined Year
  var month=today.getMonth()+1;//predifined Month
  console.log("Today is : "+month + "/"+ day +"/"+year+".");
  var hour = today.getHours();//predifined Hours
  var minute = today.getMinutes();//predifined Minutes
  var second = today.getSeconds();//predifined Seconds
  console.log("Current Time : "+hour + " : " + minute + " : " + second);