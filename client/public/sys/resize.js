let side = window.innerWidth;
let tate = window.innerHeight;

let p_scale = 40;
let p_scale2;


//const rotate_switch = ["","rotate(90deg)"];

function monitor_resize(){

    
    
side = window.innerWidth;
tate = window.innerHeight;
    
    
    if(phone == false){
    //    screen.innerHTML = "<img src = sys/screen.png>";
if(side/tate >= 1440 / 960){//横長な時
    
    p_scale = (tate / 960) * 100;
    
}else{
   
    p_scale = (side / 1440) * 100;
    
}
    }else{
        
        remove_all();
        
 //   screen.innerHTML = "<img src = sys/screen_phone.png>";
        
        if(side/tate >= 1080 / 1920){
    
    p_scale = (tate / 1920) * 100;
    
}else{
   
    p_scale = (side / 1080) * 100;
    
}

        
    }


       
screen.style.transform = "translate(-50%, -50%)  scale("+p_scale+"%)";
      
    //bg_setting();  

}