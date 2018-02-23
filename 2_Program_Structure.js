/*
Write a loop that makes seven calls to console.log to output the following triangle:
#
##
### 
#### 
##### 
###### 
#######
It may be useful to know that you can  nd the length of a string by writing .length after it.
var abc = "abc"; 
console.log(abc.length); 
// → 3
*/

var content = "";
for (var i = 1; i < 8; i++){
	content = content + "*";
	console.log(content);
}

/*
Write a program that uses console.log to print all the numbers from 1 to 100, 
with two exceptions. 
For numbers divisible by 3, print "Fizz" instead of the number, and for numbers 
divisible by 5 (and not 3), print "Buzz" instead.
When you have that working, modify your program to print "FizzBuzz", for numbers 
that are divisible by both 3 and 5 (and still print "Fizz" or "Buzz" for numbers 
divisible by only one of those).
*/

var num = 1;

while(num <= 100){
	if (num % 3 == 0 && num % 5 == 0)
		console.log("FizzBuzz");
	else if (num % 3 == 0)
		console.log("Fizz");
	else if (num % 5 == 0)
		console.log("Buzz");
	else
		console.log(num);
	num++;
}

/*
Write a program that creates a string that represents an 8×8 grid, using newline 
characters to separate lines. 
At each position of the grid there is either a space or a “#” character. 
The characters should form a chess board.
Passing this string to console.log should show something like this:
 # # # #
# # # #
 # # # #
# # # #
 # # # #
# # # #
 # # # #
# # # #
When you have a program that generates this pattern, define a variable size = 8 
and change the program so that it works for any size, outputting a grid of the 
given width and height.
*/

var size = Number(prompt("Enter the size of the board: "));
var block = "#";
var space = " ";

for (var i = 1; i <= size; i++){
	var line = "";
	for (var j = 1; j <= size; j++){
		if (i % 2){
			if(j % 2)
				line = line + space;
			else
				line = line + block;
		}
		else{
			if (j % 2)
				line = line + block;
			else
				line = line + space;
		}
	}
	console.log(line);
}
	
	 