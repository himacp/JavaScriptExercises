
/*Convert the following JSON string to an object and access the value of the jason property.*/
var jsonString = '{"mike":"Book","jason":"sweater","chels":"iPad"}';
var obj = JSON.parse(jsonString);console.log(obj);
console.log(Object.values(obj));//RETURNING JSON VALUES
console.log("These are the JSON values");
console.log(Object.keys(obj));//RETURNING KEY VALUES
console.log("These are the JSON keys");
