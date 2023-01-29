let div_stars = [];
let stm = [];
let stx = [];
let sty = [];

let str = [];
let stv = [];

let stt = [];
let stt2 = [];

const st_num = 15;
let st_ratio;

for(let i = 0; i < st_num; i++){
    
    stm[i] = 0;
    stt[i] = 0;
    stt2[i] = 0;
    
document.write( "<div id= stars"+i+"> </div>" );
div_stars[i] = document.getElementById( "stars"+i );
screen.appendChild(div_stars[i]);
div_stars[i].style.position = "absolute";
div_stars[i].style.left = stx[i];
div_stars[i].style.top = sty[i];
div_stars[i].style.transform = x_center + y_center;
div_stars[i].style.zIndex = 1;
div_stars[i].innerHTML = "";
}

let div_stars_loading = [];
for(let i = 0; i < 3; i++){
document.write( "<div id= stars_loading"+i+"> </div>" );
div_stars_loading[i] = document.getElementById( "stars_loading"+i );
screen.appendChild(div_stars_loading[i]);
div_stars_loading[i].style.position = "absolute";
div_stars_loading[i].style.left = "50%";
div_stars_loading[i].style.top = "50%";
div_stars_loading[i].style.transform = x_center + y_center;
div_stars_loading[i].style.opacity = 0;
div_stars_loading[i].style.zIndex = 1;
div_stars_loading[i].innerHTML = "";
}


function move_stars(){
    
     st_ratio = vol2*(1/250000);
    
    
    for(let i = 0; i < st_num; i++){
    
     
        
        
    if(stm[i] == 0){
        
        div_stars[i].innerHTML = "";
        
        if(b_active[2] && Math.random()<st_ratio && vol2 > iki){
           
            stm[i] = 1;
            
           }
    }
        
    if(stm[i] == 1){
        
        if(Math.floor(Math.random() * 2) == 0){
            
            stx[i] = 1440+(449/2);
            sty[i] = Math.floor(Math.random() * 400) - 200;
            
        }else{
             sty[i] = -(449/2);
            stx[i] = Math.floor(Math.random() * 600) + 1640 - 400;
           
        }
     
        str[i] = Math.random();
        
      stm[i] = 2;  
    } 
    
    if(stm[i] == 2){
        
        //アニメ
           stt[i]+= 1　*　(str[i]*0.7)+0.3;
    
        
    if(stt[i] > 2){
        stt2[i]++;
    }
        
        while(stt[i] > 2){
            stt[i] -= 2;
        }
    
    if(stt2[i] > 2){
        stt2[i] = 0;
    }
        
        
        stx[i] -= 14 * (str[i] + 1);
        sty[i] += 11 * (str[i] + 1);
        
        div_stars[i].style.left = stx[i];
div_stars[i].style.top = sty[i];
div_stars[i].style.transform = x_center + y_center+" scale("+(0.7*(100-(100*str[i]/2)))+"%)";
div_stars[i].innerHTML = "<img src = image/f_star_"+stt2[i]+".png>";

        if(sty[i] >= 960 + (449/2)){
            
            stm[i] = 0;
            
        }
        
    }
        
    }
    
    for(let i = 0; i < 3; i++){
        div_stars_loading[i].innerHTML = "<img src = image/f_star_"+i+".png>";
    }
    
    b_active[2] = false;

    
}