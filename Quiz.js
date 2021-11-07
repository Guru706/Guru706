<script>

prompt("Enter your name");

var a=window.prompt('Age');

confirm('Confirm if you want to play the quiz');


var ask=window.prompt("Welcome to the game! Enter yes to continue the game and enter no to quit the game:");

if(ask=="yes"||ask=="Yes"||ask=="YES") {
		var one=window.prompt('Welcome to first level. How many toes does human have:');
        if(one==10) {
        confirm("correct");
		}else{
        confirm("Quiz one answer is Incorrect");
        }
		var two=window.prompt("What is the national language of Korea?");
        if(two=='korean'||two=='KOREAN'||two=='Korean'){
        confirm("Correct");
       	}else{ 
        confirm(" Quiz two answer is Incorrect");
        }
        var three=window.prompt('How many oceans are there in world?');
        if(three==7){
        confirm("correct");
        }else{
        confirm('Incorrect');
        }
        
        confirm('Goodbye');


}else{
confirm(" Goodbye ");
}


</script>
