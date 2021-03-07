
    //Pick random number 
    var randomnumber = function(start,end) {
        var rand  =  Math.floor((Math.random() * end ) +  start ); 
        rand = parseInt(rand);
        return rand;
    }
    var luckyball =  randomnumber( 1 , 18 );

    //creates array of 5 random numbers
    var luckynumbers  = [ randomnumber( 01 , 48 ),  randomnumber( 01 , 48),
                          randomnumber( 01 , 48 ),  randomnumber( 01 , 48),  
                          randomnumber( 01 , 48 ) ];

    //outputs on screen
    document.write("<br>" + "Lucky Numbers: ")
    for (var i  =  0 ;  i  <  luckynumbers.length ; i++) {
        document.write (luckynumbers[i]+ " ");
    };

    document.write("<br>");
    document.write("Lucky Ball: " + luckyball);

    function calculateWin(){

        var personEntered = document.getElementById('entered').value;
        var entered = document.getElementById('enter').value;

        personEntered = personEntered.split(" ");
        var count = 0;
        for (i = 0; i < luckynumbers.length; i++) {
            for (j = 0; j < personEntered.length; j++) {
                if (luckynumbers[i] == personalentered[j]){
                    count +=1;
                    break;
                }
            }
        }

        if ((count == 5) && (luckyball == entered)){
            alert("You win: 7,000 a WEEK for LIFE!");
        }else if(count == 5){
            alert("You win $25,000 a year for LIFE!");
        }else if ((count == 4) && (luckyball == entered)){
            alert("You win $5,000");
        }else if (count == 4){
            alert("You win $200");
        }else if ((count == 3) && (luckyball == entered)){
            alert("You win $150");
        }else if (count == 3){
            alert("You win $20");
        }else if ((count == 2) && (luckyball == entered)){
            alert("You win $25");
        }else if (count == 2){
            alert("You win $3");
        }else if ((count == 1) && (luckyball == entered)){
            alert("You win $6");
        }else if ((count == 0) && (luckyball == entered)){
            alert("You win $4");
        }else{
            alert("Sorry those are not the winning numbers! Try again!");
        }
    }
