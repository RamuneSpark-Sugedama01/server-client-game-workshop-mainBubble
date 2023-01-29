/*
const fps = 50;
const fps2 = (1000/fps);
  */
let socket;

let m = false;
const iki = 3000;
let fukikomi = false;
let touch = 0;

let kando = 3;
let kd = [0.6,0.7,0.8,1.0,1.3,1.6,1.9,2.3,2.6,3.0, //0-9
          3.4,3.8,4.2,4.6,5.0,5.3,5.6,5.9,6.2,6.6,
          7,0,7.4,7.8,8.2,8.4,8.6,9.0,9.3,9.6,10];

let gt = 0;

//送信
let vol = [];

//受信
let vol0; let vol1; let vol2; let vol3; let vol4;

vol[0] = "PUSH Z";
   
const fps = 60; //暗転に必須

//ゲーム進行    
let mic;
function setup() {
mic = new p5.AudioIn();    
socket = io.connect('http://localhost:3001');

    socket.on('level0send', function(val0) {
   vol0 = val0;

})
    
socket.on('level1send', function(val1) {
   vol1 = val1;

})
  
    socket.on('level2send', function(val2) {
   vol2 = val2;

})
    
    socket.on('level3send', function(val3) {
   vol3 = val3;

})
    
    socket.on('level4send', function(val4) {
   vol4 = val4;

})
    
     
      socket.on('ba0send', function(baa0) {
   b_active[0] = baa0;
})
    
      socket.on('ba1send', function(baa1) {
   b_active[1] = baa1;
})
  
       socket.on('ba2send', function(baa2) {
   b_active[2] = baa2;
})
    
      socket.on('ba3send', function(baa3) {
   b_active[3] = baa3;
})
  
       socket.on('ba4send', function(baa4) {
   b_active[4] = baa4;
})
    
}


//const id = setInterval("move( )", fps2 );
function draw( ) {    
    
    phonecheck();
    
    //画面サイズ調整
    monitor_resize();
    
    //長押し判定関数
    hold_down();
    
    if(phone){
        
            act_select();
        div_debug.style.left = "0%";
div_debug.style.top = "0%";
div_debug.style.color = "#000000";
div_debug.style.fontFamily =　"Higashi";
div_debug.style.fontSize =　"50";
div_debug.style.transform =　x_left + y_left;
div_tx.innerHTML = ttx;


        
div_bg.innerHTML = "<img src = image/bg_phone.jpg>";
        
         if(m){
         
             if(kando+1 >= 10){
             div_kando.innerHTML = tx+"マイク感度 "+(kando+1)+te;
             }else{
          div_kando.innerHTML = tx+"マイク感度 0"+(kando+1)+te;
             }
                 
             for(let i = 0; i < 4; i++){
                 if(i%2 == 0){
    div_sele[i].innerHTML = "<img src = image/left.png>";
                 }else{
    div_sele[i].innerHTML = "<img src = image/right.png>";
                 }
             }
             
             if(ma == 0){
    div_icon.innerHTML = "<img src = image/icon"+select+".png>";
             }else{
    div_icon.innerHTML = "";
             }
                 
        //テスト
    if(ttx == true){
  vol[select] = 0.8;
        
    } else{
        
        
  vol[select] = mic.getLevel();
    }
             
               gt++;
        if(gt>2){
            gt = 0;
        }
      
    vol[select] = Math.floor(vol[select]*10000);
      
        vol[select] *= kd[kando];
        
        if(vol[select] > 10000){
            vol[select] = 10000;
        }
        
        if(gt == 0){
        if(select == 0){
    socket.emit('level0', vol[0])
    socket.emit('ba0', true)
        console.log(true)
        }
    
            if(select == 1){
    socket.emit('level1', vol[1])
    socket.emit('ba1', true)
        }
    
            if(select == 2){
    socket.emit('level2', vol[2])
    socket.emit('ba2', true)
        }
    
            if(select == 3){
    socket.emit('level3', vol[3])
socket.emit('ba3', true)    
        }
    
            if(select == 4){
    socket.emit('level4', vol[4])
    socket.emit('ba4', true)
        }
    
        
        
    
    }
    
        
          
            if(iki <= vol[select]){
                fukikomi = true;
            }else{
                fukikomi = false;
            }
    
             
    }else{
    div_icon.innerHTML = "<img src = image/icon_s.png>";
        
    }
        
     //PC   
    }else{
    if(scene == "start"){
    
              div_bg.innerHTML = "<img src = image/bg.jpg>";
       //雲
    move_cloud();
    
        
        //ボタン長押し判定実行
        if(enter_M == 1 || enter_M == confirm){
            
            if(m == false){
                    BGMSet();
                shift = 1;
   
        }
        }
        
        
        if(shift == 0){
        div_icon.innerHTML = "<img src = image/pushrun.png>";
        }if(shift == 1){
                    div_icon.innerHTML = "";
        start();
        }
        
        
    }
    
    if(scene == "normal" || scene == "fantasy"){
      
        if(space_M == 1 && next_scene == undefined){
            
            s_c *= -1;
            
            next_scene = s_scene[s_c];
            
        }
        
        if(scene == "normal"){
        div_bg.innerHTML = "<img src = image/bg.jpg>";
       
        //雲
    move_cloud();
        }else if(scene == "fantasy"){
        div_bg.innerHTML = "<img src = image/f_bg.jpg>";
        div_build.innerHTML = "<img src = image/f_build.png>";
        }
    
    

    //マイクアクション
    move_bubble();
        
        if(scene == "normal"){
    move_watage();
        }else if(scene == "fantasy"){
            move_stars();
        }
            
    playingMusic();
    
        
        
    }
        
    }
    
    //デバッグディスプレイ
    
      //   div_debug.innerHTML = tx +"MIC "+m + "<br>"+"VOL "+Math.floor(vol[select])+"<br>"+"breath "+kd[kando]+"<br>"+"touch "+ b_ratio[0]+"<br>TYPE "+select + te;
    
    
    
    
    if(touch == 1){touch = 2;}
    
        
        
    //ブラックアウト関数
    blackout();
    
    

}

//document.body.onpointerdown = start;

function start(){

    if(shift == 1 && next_scene == undefined){
    touch = 1;

    next_scene = "normal";
    }

}

div_sele[0].onpointerdown = back;
div_sele[1].onpointerdown = next;

function back(){select--; ma = 1;}
function next(){select++; ma = 1;}

div_sele[2].onpointerdown = down;
div_sele[3].onpointerdown = up;

function down(){kando--;}
function up(){kando++;}

//p5では必須
function touchStarted() {
    // ユーザージェスチャでオーディオコンテキストを開始する
if(phone){
                     special();
    userStartAudio();
}
}

function special() {
if (!m) {
    

    
            mic.start();
        m = true;
    }
  }

div_tx.onpointerdown = debug_Mic;
function debug_Mic(){
    if(ttx){
        ttx = false;
    }else{
        ttx = true;
    }
}