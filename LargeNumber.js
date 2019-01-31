//Q 2 Write a JavaScript conditional statement to find the largest of five numbers?

// Insert of Numbers
var num1=10;
var num2=20;
var num3=23;
var num4=7;
var num5=2;

//Logic for finding the greater Number
if((num1>num2)&&(num1>num3)&&(num1>num4)&&(num1>num5))
{
    console.log(num1+" is greater");
}
else if((num2>num1)&&(num2>num3)&&(num2>num4)&&(num2>num5))
{
    console.log(num2+" is greater");
}
else if((num3>num1)&&(num3>num2)&&(num3>num4)&&(num3>num5))
{
    console.log(num3+" is greater");
}
else if((num4>num1)&&(num4>num2)&&(num4>num3)&&(num4>num5))
{
    console.log(num4+" is greater");
}
else if((num5>num1)&&(num5>num2)&&(num5>num3)&&(num5>num4))
{
    console.log(num5+" is greater");
}
else if( ((num1===num2)||(num2===num1))&&((num1===num3)||(num3===num1))&&((num1===num4)||(num4===num1))&&((num1===num5)||(num5===num1)) )
{
    console.log("Values are equal...!")
}
else
{
    console.log("wrong input...!")
}
