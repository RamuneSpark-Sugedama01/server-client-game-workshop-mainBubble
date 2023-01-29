let div_watage = [];
let wm = [];
let wx = [];
let wy = [];
const w_num = 90; //わたげの数
let w_ratio = 0.1;

let wsx =[];
let wsy = [];
let wsys = [];
let w_scale =[];
let w_scales =[];

//揺れ周期
let w_yure = [];

//特殊乱数
let wk = [];

//サイン
let w_sin = [];
let w_furehaba = [];
let w_seppen = [];

//縮小率
const wa = 1/7;

for(let i = 0; i < w_num; i++){
    
    wm[i] = 0;
    
document.write( "<div id= watage"+i+"> </div>" );
div_watage[i] = document.getElementById( "watage"+i );
screen.appendChild(div_watage[i]);
div_watage[i].style.position = "absolute";
div_watage[i].style.left = wx[i];
div_watage[i].style.top = wy[i];
div_watage[i].style.transform = x_center + y_center;
div_watage[i].style.zIndex = 1;
div_watage[i].innerHTML = "";
}

function move_watage(){
    
    w_ratio = vol2*(1/250000);
    
    
    for(let i = 0; i < w_num; i++){
    
    if(wm[i] == 0){
        
        if(b_active[2] && Math.random()<w_ratio && vol2 > iki){
           
            wm[i] = 1;
            
           }
    }
    
    
    if(wm[i] == 1){
         w_scale[i] =　Math.random() * 60 + 40;
   
      wy[i] = 960+((92/2) * 0.01 *w_scale[i]);
        wx[i] = 720;
       wm[i] = 2;

        w_yure[i] = 0;
        
        //wk[i] = Math.floor(Math.random() * 3);
     
        /*
        if(vol > 7000){
        wsx[i] = Math.random() * 20 - 10;
       wsys[i] = Math.random() * 5 + 3;       
        }else if(vol > 6000){
     wsx[i] = Math.random() * 8 - 4;
       wsys[i] = Math.random() * 4 + 1;       
        }else{
        */
        wsx[i] = Math.random() * 15 - 7.5;
        wsys[i] = Math.random() * 1 + 0.5;
        //}
     
        wsy[i] = 0; 
        
        if(Math.floor(Math.random() * 2) == 0){
            w_sin[i] = true;
            w_seppen[i] = Math.random() * Math.PI * 2;
            w_furehaba[i] = Math.random() * 3 + 8;
        }else{
            w_sin[i] = false;
        }
        
    }
    
    if(wm[i] == 2){
        
                w_scales[i] = w_scale[i] * (wy[i]*(1 - wa) + (960 * wa))/960;
        
        wsy[i] += 0.5 * 0.01* (w_scales[i] + 60) * wsys[i];
        
        wx[i] += wsx[i];
        wy[i] -= wsy[i];
        
        
        
        if(wy[i] < -300){
            wm[i] = 0;
        }
        

        if(w_sin[i]){
        div_watage[i].style.left = wx[i] + w_furehaba[i]*Math.sin(0.005*wy[i]+w_seppen[i]);
        }else{
        div_watage[i].style.left = wx[i];
        }
        
        div_watage[i].style.top = wy[i];
        div_watage[i].innerHTML = "<img src = image/watage.png>";
        
        w_yure[i] += 1;
        
div_watage[i].style.transform = 
    x_center + y_center+" rotate("+(Math.sin(0.05*w_yure[i])*15)+"deg) scale("+w_scales[i]+"%)";
        div_watage[i].style.opacity = (w_scale[i] * 0.01)*0.9 +0.3;
    }else{
        div_watage[i].innerHTML = "";
    }




}
b_active[2] = false;
}
