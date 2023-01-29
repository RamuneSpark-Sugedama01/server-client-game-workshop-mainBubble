let div_cloud = [];
let cm = [];
let cx = [];
let cy = [];
let ct = [];
let cs = [];
const c_num = 7; //雲の数

const c_r = Math.floor(Math.random() * 2);

for(let i = 0; i < c_num; i++){
    
    if(i < c_num - 2){
    cm[i] = 2;
     cx[i] = Math.floor(Math.random() * 1440/(c_num-2)) + i * (1440/(c_num - 2));
    
        if(i%2 == c_r){
        cy[i] = Math.floor(Math.random() * 500);
        }else{
        cy[i] = Math.floor(Math.random() * 500) + 460;
        }
    
    
    ct[i] = Math.floor(Math.random() * 6);
    cs[i] = Math.random() * 0.5 + 0.4;

    }else{
        cm[i] = 1;
    }
        
    
document.write( "<div id= cloud"+i+"> </div>" );
div_cloud[i] = document.getElementById( "cloud"+i );
screen.appendChild(div_cloud[i]);
div_cloud[i].style.position = "absolute";
div_cloud[i].style.left = cx[i];
div_cloud[i].style.top = cy[i];
div_cloud[i].style.transform = x_center + y_center;
div_cloud[i].style.zIndex = 1;
div_cloud[i].innerHTML = "";
}

function move_cloud(){for(let i = 0; i < c_num; i++){
    
    if(cm[i] == 0){
        if(Math.random()<0.5){
           
            cm[i] = 1;
            
           }
    }
    
    
    if(cm[i] == 1){
        
        cm[i] = 2;
    cx[i] = 1400 + 400;
        if(i%2 == c_r){
        cy[i] = Math.floor(Math.random() * 500);
        }else{
        cy[i] = Math.floor(Math.random() * 500) + 460;
        }
    
    ct[i] = Math.floor(Math.random() * 6);
    cs[i] = Math.random() * 0.5 + 0.4;
    
        
    }
    
    if(cm[i] == 2){
        
        cx[i] -= cs[i];
        
        if(cx[i] < -400){
            cm[i] = 0;
        }
        
        div_cloud[i].style.left = cx[i];
        div_cloud[i].style.top = cy[i];
        div_cloud[i].innerHTML = "<img src = image/cloud"+ct[i]+".png>";
    }else{
        div_cloud[i].innerHTML = "";
    }




}}
