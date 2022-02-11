const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});



reader.question("welcome to the password validator tool, what password would you like to validate?", function(input){
	tokens = input.split(' ');
	
	password = tokens[0];
	
    if (password.length < 10){
        console.log('you idiot, you need a longer password')
    }else if (password.length > 150){
        console.log('( * ) ( * )')
    }
    else{
        console.log("looks great bro")
    }

	reader.close()


});



