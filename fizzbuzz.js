var $ = function (id) 
{
    return document.getElementById(id);
}

doStuffComputer = function()
{
	var counter = 0;
	var output = "";
	
//insert code below    
for(counter = 1;counter<=100; counter ++)
{
    if(counter % 15 ===0)
        console.log ("FizzBuzz");
    else if(counter % 5 ===0)
        console.log  ("Buzz");
    else if(counter % 3 ===0)
        console.log("Fizz");
    else
      console.log(counter);
}











};
   



window.onload = function()
{
	$("doIt").onclick = doStuffComputer;
}