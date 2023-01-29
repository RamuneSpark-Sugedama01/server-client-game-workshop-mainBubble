let div_bubble = [];
let bm = [];
let bx = [];
let by = [];
const b_num = 60; //雲の数
let b_ratio = [];

let bsx =[];
let bsy = [];
let bsys = [];
let b_scale =[];
let b_scales =[];

let b_p = [];

let b_yure = [];
let b_enzan = [];

//特殊乱数
let bk = [];

//サイン
let b_sin = [];
let b_furehaba = [];
let b_seppen = [];

//縮小率
const ba = 1/8;


for(let i = 0; i < b_num; i++){
    
    div_bubble[i] = [];
    bm[i] = [];
    bx[i] = [];
    by[i] = [];

    bsx[i] =[];
    bsy[i] = [];
    bsys[i] = [];
    b_scale[i] =[];
    b_scales[i] =[];

    b_p[i] = [];
    
    b_yure[i] = [];
    b_enzan[i] = [];
    
    
//特殊乱数
    bk[i] = [];

//サイン
    b_sin[i] = [];
    b_furehaba[i] = [];
    b_seppen[i] = [];

    
    for(let j = 0; j < 2; j++){
    bm[i][j] = 0;
    
document.write( "<div id= "+j+"bubble"+i+"> </div>" );
div_bubble[i][j] = document.getElementById( j + "bubble"+i );
screen.appendChild(div_bubble[i][j]);
div_bubble[i][j].style.position = "absolute";
div_bubble[i][j].style.left = bx[i][j];
div_bubble[i][j].style.top = by[i][j];
div_bubble[i][j].style.transform = x_center + y_center;
div_bubble[i][j].style.zIndex = 5;
div_bubble[i][j].innerHTML = "";
}
}

//vol0、vol1の中身を渡す
let vola = [];

function move_bubble(){
    
    b_ratio[0] = vol0*(1/500000);
        b_ratio[1] = vol1*(1/500000);
    
    vola[0] = vol0;
    vola[1] = vol1;
    
    
      
    for(let j = 0; j < 2; j++){
    for(let i = 0; i < b_num; i++){
    
    if(bm[i][j] == 0){
        
        if(b_active[j] && Math.random()<b_ratio[j] && vola[j] > iki){
           
            bm[i][j] = 1;
            
           }
    }
    
    
    if(bm[i][j] == 1){
        
        if(scene == "normal"){
        b_scale[i][j] =　Math.random() * 60 + 40;
        }else{
            b_scale[i][j] =　Math.random() * 60 + 80;
        }
            
      by[i][j] = 960+((229/2) * 0.01 *b_scale[i][j]);
        bx[i][j] = 430 + Math.floor(Math.random() * (1440 - 860));
       bm[i][j] = 2;

        
        //bk[i][j] = Math.floor(Math.random() * 3);
        
        if(vol[select] > 7000){
        bsx[i][j] = Math.random() * 20 - 10;
       bsys[i][j] = Math.random() * 5 + 3;       
        }else if(vol[select] > 6000){
     bsx[i][j] = Math.random() * 8 - 4;
       bsys[i][j] = Math.random() * 4 + 1;       
        }else{
        bsx[i][j] = Math.random() * 4 - 2;
        bsys[i][j] = Math.random() * 1 + 0.5;
        }
        
        if(scene == "fantasy"){
            bsys[i][j] *= 0.5;
        }
        
        bsy[i][j] = 0; 
        
        if(Math.floor(Math.random() * 2) == 0){
            b_sin[i][j] = true;
            b_seppen[i][j] = Math.random() * Math.PI * 2;
            b_furehaba[i][j] = Math.random() * 7 + 8;
        }else{
            b_sin[i][j] = false;
        }
        
        if(scene == "fantasy"){
            if(j == 0){
                b_p[i][j] = Math.floor(Math.random() * 3);
            }else if(j == 1){
                b_p[i][j] = Math.floor(Math.random() * 5)+3;
            }
            b_yure[i][j] = 0;
        
        b_enzan[i][j] = Math.floor(Math.random() * 2);
        
        }
        
    }
    
    if(bm[i][j] == 2){
        
                b_scales[i][j] = b_scale[i][j] * (by[i][j]*(1 - ba) + (960 * ba))/960;
        
        bsy[i][j] += 0.1 * 0.01* (b_scales[i][j] + 60) * bsys[i][j];
        
        bx[i][j] += bsx[i][j];
        by[i][j] -= bsy[i][j];
        
        
        
        if(by[i][j] < -300){
            bm[i][j] = 0;
        }
        

        if(b_sin[i][j]){
        div_bubble[i][j].style.left = bx[i][j] + b_furehaba[i][j]*Math.sin(0.01*by[i][j]+b_seppen[i][j]);
        }else{
        div_bubble[i][j].style.left = bx[i][j];
        }
        
        div_bubble[i][j].style.top = by[i][j];
        
        if(scene == "normal"){
            if(j == 0){
            div_bubble[i][j].innerHTML = "<img src = image/bubble.png>";
            }else{
            div_bubble[i][j].innerHTML = "<img src = image/bubble_1.png>";
            }
        }else{
            div_bubble[i][j].innerHTML = "<img src = image/f_bubble_"+b_p[i][j]+".png>";
        }
            
        b_yure[i][j] += 0.5;
        
        if(scene == "normal"){
div_bubble[i][j].style.transform = x_center + y_center+" scale("+b_scales[i][j]+"%)";
                    div_bubble[i][j].style.opacity = b_scale[i][j] * 0.01;
        }else{
            if(b_enzan[i][j] == 0){
            div_bubble[i][j].style.transform = x_center + y_center+" rotate("+(b_yure[i][j])+"deg) scale("+b_scales[i][j]+"%)";
            }else{
            div_bubble[i][j].style.transform = x_center + y_center+" rotate("+(-b_yure[i][j])+"deg) scale("+b_scales[i][j]+"%)";
            }
                    div_bubble[i][j].style.opacity = b_scale[i][j] * 0.01 * 0.8;
        }
        
        

        
    }else{
        div_bubble[i][j].innerHTML = "";
    }


    


}}

    for(let i = 0; i < 2; i++){
b_active[i] = false;
    }
    
}
