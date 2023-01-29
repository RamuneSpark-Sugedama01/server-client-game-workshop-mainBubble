//画像
const screen = document.getElementById( "screen" );
screen.style.opacity = 1;

  if(phone == false){
    }else{
        
    screen.innerHTML = "<img src = sys/screen_phone.png>";
    }

//1440 * 960
    
//背景
document.write( "<div id= bg> </div>" );
const div_bg = document.getElementById( "bg" );
screen.appendChild(div_bg);
div_bg.style.position = "absolute";
div_bg.style.left = "50%";
div_bg.style.top = "50%";
div_bg.style.transform = x_center + y_center;
div_bg.style.zIndex = 0;
div_bg.innerHTML = "";

document.write( "<div id= build> </div>" );
const div_build = document.getElementById( "build" );
screen.appendChild(div_build);
div_build.style.position = "absolute";
div_build.style.left = "50%";
div_build.style.top = "50%";
div_build.style.transform = x_center + y_center;
div_build.style.zIndex = 2;
div_build.innerHTML = "";

document.write( "<div id= icon> </div>" );
const div_icon = document.getElementById( "icon" );
screen.appendChild(div_icon);
div_icon.style.position = "absolute";
div_icon.style.left = "50%";
div_icon.style.top = "60%";
div_icon.style.transform = x_center + y_center;
div_icon.style.zIndex = 2;
div_icon.innerHTML = "";

document.write( "<div id= kando> </div>" );
const div_kando = document.getElementById( "kando" );
screen.appendChild(div_kando);
div_kando.style.position = "absolute";
div_kando.style.color = "#083890";
div_kando.style.fontFamily =　"Higashi";
div_kando.style.fontWeight = "bold";
div_kando.style.fontSize =　"70";
div_kando.style.left = "28%";
div_kando.style.top = "25%";
div_kando.style.transform = x_left + y_center;
div_kando.style.zIndex = 2;

document.write( "<div id= tx> </div>" );
const div_tx = document.getElementById( "tx" );
screen.appendChild(div_tx);
div_tx.style.position = "absolute";
div_tx.style.left = "50%";
div_tx.style.fontSize = "60";
div_tx.style.top = "90%";
div_tx.style.transform = x_center + y_center;
div_tx.style.zIndex = 2;
let ttx = false;

let div_sele = [];
for(let i = 0; i < 4; i++){
document.write( "<div id= sele"+i+"> </div>" );
div_sele[i] = document.getElementById( "sele"+i );
screen.appendChild(div_sele[i]);
div_sele[i].style.position = "absolute";
div_sele[i].style.left = (15+70*(i%2))+"%";
div_sele[i].style.top = "60%";
div_sele[i].style.transform = x_center + y_center;
div_sele[i].style.zIndex = 2;
div_sele[i].innerHTML = "";
}
for(let i = 2; i < 4; i++){
    div_sele[i].style.top = "25%";
}


document.write( "<div id= debug> </div>" );
const div_debug = document.getElementById( "debug" );
screen.appendChild(div_debug);
div_debug.style.position = "absolute";
div_debug.style.left = "100%";
div_debug.style.top = 0;
div_debug.style.color = "#083890";
div_debug.style.fontFamily =　"Higashi";
div_debug.style.fontSize =　"50";
div_debug.style.transform =　x_right + y_left;
//div_debug.style.fontWeight = "bold";
div_debug.style.textAlign = "right";
div_debug.style.zIndex = 10000;
div_debug.innerHTML = "";