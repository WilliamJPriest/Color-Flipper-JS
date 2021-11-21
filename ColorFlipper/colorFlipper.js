/*One of my earilest Javascript Projects */
const colorCodes = ["A","B","C","D","E","F",0,1,2,3,4,5,6,7,8,9];
const colorBTN= document.getElementById('colorBTN');
const hexValue = document.querySelector('.hex-value');


colorBTN.addEventListener("click",()=>{
    let colorShown="#";
    for(let i =0; i<6; i++){
        /* generates a random color code */
        colorShown +=colorCodes[Math.floor(Math.random()*colorCodes.length)];
    }   
     hexValue.textContent=colorShown;   
     document.body.style.backgroundColor=colorShown;
      /*changes the background color and hex value displayed */
     
});
;

