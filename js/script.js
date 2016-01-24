$(document).ready(function(){
   
   $("#title").animate({
        marginLeft:"790px",
        fontSize:"25px"
   },2000);

   $("#title").animate({
      marginLeft:"0px",
      fontSize:"1.2em"  
   },2000);

  
   $("#article1, #article2").animate({
   	   borderRadius:"0px",
   },5000);

   $("#article1,#article2").animate({
     borderRadius:"20px",
   },3000);

   $("#down1").click(function(e){
       e.preventDefault();
       $("#list1").slideToggle(1000);
   })

   $("#down2").click(function(e){
      e.preventDefault();
      $("#list2").slideToggle(1000);
   })

});