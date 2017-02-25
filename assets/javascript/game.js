$( document ).ready(function(){
  
 
  var number = Math.floor((Math.random() * 120) + 19);


	$(".randomnumber").html(number)
  
  var mercedes= Math.floor(Math.random()*12+1)
  var porsche= Math.floor(Math.random()*12+1)
  var bmw= Math.floor(Math.random()*12+1)
  var tesla= Math.floor(Math.random()*12+1)
  
  var userTotal= 0; 
  var wins= 0;
  var losses = 0;
$('#wins').text(wins);
$('#losses').text(losses);

function reset(){
      number=Math.floor((Math.random()*120) +19);
      
      $('.randomnumber').text(number);
      mercedes = Math.floor(Math.random()*12+1);
      porsche = Math.floor(Math.random()*12+1);
      bmw = Math.floor(Math.random()*12+1);
      test = Math.floor(Math.random()*12+1);
      userTotal= 0;
      $('.guessnumber').text(userTotal);
      } 

function winning(){
alert("WINNER!!!");
  wins++; 
  $('#wins').text(wins);
  reset();
}

function lost(){
alert ("LOSER!!");
  losses++;
  $('#losses').text(losses);
  reset()
}

  $('#mercedes').on ('click', function(){
    userTotal = userTotal + mercedes;
    
    $('.guessnumber').text(userTotal); 
        
        if (userTotal == number){
          winning();
        }
        else if ( userTotal > number){
          lost();
        }   
  })  
  $('#porsche').on ('click', function(){
    userTotal = userTotal + porsche;
    
    $('.guessnumber').text(userTotal); 
        if (userTotal == number){
          winning();
        }
        else if ( userTotal > number){
          lost();
        } 
  })  
  $('#bmw').on ('click', function(){
    userTotal = userTotal + bmw;
    
    $('.guessnumber').text(userTotal);

          if (userTotal == number){
          winning();
        }
        else if ( userTotal > number){
          lost();
        } 
  })  
  $('#tesla').on ('click', function(){
    userTotal = userTotal + tesla;
   
    $('.guessnumber').text(userTotal); 
      
          if (userTotal == number){
          winning();
        }
        else if ( userTotal > number){
          lost();
        }
  });   
}); 


 



 

