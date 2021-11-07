<script>
document.write("Welcome to the game");

var ask=window.prompt("Enter yes to continue the game and enter no to quit the game:");

if(ask=="yes"||ask=="Yes"||ask=="YES") {
		document.write(' Welcome to first level.');
        var one=window.prompt('How many toes does human have:');
        if(one==10) {
        var one=0;
        one++;
    	  document.write(" You have ", one , " point ");
		    }else{
         document.write("Incorrect");
        }
        
}else{
document.write("Goodbye");
}
</script>
