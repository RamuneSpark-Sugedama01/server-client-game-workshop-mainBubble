let connectedGamepadIndex;
let loopID;

addEventListener("gamepadconnected", (e) => {
    connectedGamepadIndex = e.gamepad.index;
   loopID = requestAnimationFrame(loop); 
});

addEventListener("gamepaddisconnected", (e) => {
    connectedGamepadIndex = null;
    cancelAnimationFrame(loopID);
});

// standardタイプのコントローラのマッピング
const BUTTON_A_INDEX     = 1;
const BUTTON_B_INDEX     = 0;
const BUTTON_X_INDEX     = 3;
const BUTTON_Y_INDEX     = 2;
const BUTTON_SELECT_INDEX  = 8;
const BUTTON_START_INDEX = 9;
const BUTTON_UP_INDEX    = 12;
const BUTTON_DOWN_INDEX  = 13;
const BUTTON_LEFT_INDEX  = 14;
const BUTTON_RIGHT_INDEX = 15;
const BUTTON_HOME_INDEX  = 16;
const BUTTON_L_INDEX    = 4;
const BUTTON_R_INDEX    = 5;
const BUTTON_ZL_INDEX    = 6;
const BUTTON_ZR_INDEX    = 7;



function loop(e) {
    

    
    // ゲームパッドの入力情報を毎フレーム取得
    let gamepads = navigator.getGamepads();
    let gp = gamepads[connectedGamepadIndex];

    // ボタンが押されているかどうかを取得
    let aButton = gp.buttons[BUTTON_A_INDEX];
    let bButton = gp.buttons[BUTTON_B_INDEX];
    let xButton = gp.buttons[BUTTON_X_INDEX];
    let yButton = gp.buttons[BUTTON_Y_INDEX];
    let startButton = gp.buttons[BUTTON_START_INDEX];
    let selectButton = gp.buttons[BUTTON_SELECT_INDEX];
    let upButton = gp.buttons[BUTTON_UP_INDEX];
    let downButton = gp.buttons[BUTTON_DOWN_INDEX];
    let leftButton = gp.buttons[BUTTON_LEFT_INDEX];
    let rightButton = gp.buttons[BUTTON_RIGHT_INDEX];
    let lButton = gp.buttons[BUTTON_L_INDEX];
    let rButton = gp.buttons[BUTTON_R_INDEX];
    let zlButton = gp.buttons[BUTTON_ZL_INDEX];
    let zrButton = gp.buttons[BUTTON_ZR_INDEX];
    
   //Aボタン
    if(aButton.value == 1.0) {
    
    }else{    
        
    }
    
    //Bボタン
    if(bButton.value == 1.0) {
    
    }else{  
        
    }
    
    //Xボタン
    if(xButton.value == 1.0){
    
    }else{    
        
    }
    
     //Yボタン
    if(xButton.value == 1.0){
    
    }else{    
        
    }
    
    //STARTボタン
    if(startButton.value == 1.0){
    
    }else{     
        
    }
    
    //SELECTボタン    
    if(selectButton.value == 1.0){
    
    }else{
        
        
    }
    
    //Lボタン
    if(lButton.value == 1.0){
    
    }else{     
        
    }
    
    //Rボタン
    if(rButton.value == 1.0){
    
    }else{     
        
    }
    
    
    //ZLボタン
    if(zlButton.value == 1.0){
    
    }else{     
        
    }
      
    //ZRボタン
    if(zrButton.value == 1.0){
    
    }else{     
        
    }
    
    
    
    //左右キー
    
        if(leftButton.value == 1.0){
    
        }else if(rightButton.value == 1.0){
    
        }else{
        
        }
    
    //上下キー
    
        if(upButton.value == 1.0){
    
        
        }else if(downButton.value == 1.0){
    
    
    }else{
    
    
    }
    
    
     requestAnimationFrame(loop);

}
