var number=6;
var colors = generateRandomColor(number);        
var indexs = document.querySelectorAll(".index");
var h1=document.querySelector("h1");
var button=document.querySelector("#reset");
var easy=document.querySelector("#easy");
var hard=document.querySelector("#hard");

easy.addEventListener("click",function(){
	hard.classList.remove("button");
	easy.classList.add("button");
	number=3;
	colors =generateRandomColor(number);
        pickedColor=randomColor();
     colorDisplay.textContent=pickedColor;
     for (var i=0; i< indexs.length; i++){
     if(colors[i])
     {
     	indexs[i].style.backgroundColor = colors[i];
     }
     else
     {
       indexs[i].style.display = "none";
     }

    }
});

hard.addEventListener("click",function(){
	easy.classList.remove("button");
	hard.classList.add("button");
	number=6;
	colors =generateRandomColor(number);
        pickedColor=randomColor();
     colorDisplay.textContent=pickedColor;
     for (var i=0; i< indexs.length; i++){
     	indexs[i].style.backgroundColor = colors[i];
       indexs[i].style.display = "block";
    }
});

   button.addEventListener("click",function(){

      colors =generateRandomColor(number);
        pickedColor=randomColor();
     colorDisplay.textContent=pickedColor;

     for(var i = 0; i < indexs.length; i++){
     	
     	indexs[i].style.backgroundColor = colors[i];}
     	h1.style.backgroundColor="Steelblue";

     })
     
     var pickedColor=randomColor()
     var colorDisplay = document.getElementById("colorDisplay");
     colorDisplay.textContent=pickedColor;
     var messageDisplay= document.querySelector("#message");


     for(var i = 0; i < indexs.length; i++){
     	
     	indexs[i].style.backgroundColor = colors[i];


      indexs[i].addEventListener("click",function(){

      	var clickedColor = this.style.backgroundColor;
      	console.log(clickedColor, pickedColor);
      	if(clickedColor === pickedColor)
      	{
      		messageDisplay.textContent="You Won";
      		button.textContent="play Again";
      		changeColors(clickedColor);
      		h1.style.backgroundColor=clickedColor;
      	}

      	else{ 
      		 
      		this.style.backgroundColor="#232323";
             messageDisplay.textContent="Try again"
      }

      })}
     function changeColors(color)
      	{  for(var i = 0; i < indexs.length; i++){
      		indexs[i].style.backgroundColor=color;}
      	}
      function randomColor()
      {
      	var random=Math.floor(Math.random()*colors.length);
      	return colors[random];
      }
      function generateRandomColor(num)
      {  
         var arr=[];
         for (var i=0;i<num;i++)
         {
         	arr.push(color());
         }
         return arr;
      }  

      function color()
      {
      	var r=Math.floor(Math.random()*256);
      	var g=Math.floor(Math.random()*256);
      	var b=Math.floor(Math.random()*256);

         return "rgb(" + r + ", " +     g + ", " +    b + ")";
      }	
