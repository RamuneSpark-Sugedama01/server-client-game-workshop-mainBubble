

let BGM = []; 
let bgmv = [];

let b_active = [false,false,false,false,false];

let bi = 1;

for(let i = 1; i < 5; i++){
   
    if(i >= 3){
    BGM[i] = new Audio();
    BGM[i].src = "mp3/hoshi"+i+".mp3";
   BGM[i].volume = 0;
    bgmv[i] = 0;
    }
    }

function BGMpause(){
    
 for(let i = 3; i < 5; i++){
    BGM[i].loop = false;
      bgmv[i] = 0;
            
    BGM[i].volume = 0;
   BGM[i].pause();
        
 
    
}
}

function BGMSet(){
   
    
    for(let i = 3; i < 5; i++){
        
    if(next_scene == "fantasy"){
    BGM[i].src = "mp3/hoshi"+i+".mp3";
    }else{
    BGM[i].src = "mp3/fue"+i+".mp3";    
    }
    
     
    
    
    }
    
    if(phone == false){
    for(let i = 3; i < 5; i++){
    BGM[i].play();
    }}
}

function playingMusic(){
    if(next_scene == undefined){
        
        vola[3] = vol3;
        vola[4] = vol4;
        
    for(let i = 3; i < 5; i++){
  if(b_active[i] && vola[i]>iki){
           
           bgmv[i] = 0.2+((vola[i])*3 /10000);
            
           }else if(vola[i]>iki/2){
            bgmv[i] -= 0.01;   
           }else{
                bgmv[i] -= 0.02;   
           
           }
        
        if(bgmv[i]<0.000001){
            bgmv[i] = 0.000001;
        }else if(bgmv[i]>1){
         bgmv[i] = 1;   
        }
        
        
       BGM[i].volume = bgmv[i];
    
    
        
    b_active[i] = false;
    }
    }
    

   
    
    if(BGM[3].paused||BGM[4].paused){
        BGM[3].play();
        BGM[4].play();
    }
 
}