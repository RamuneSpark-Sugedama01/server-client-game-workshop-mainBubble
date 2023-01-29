//2回目決定までの時間
const confirm = 40;

//3回目以降の決定反応時間
const back_holdtime = 5;

const limit_holdtime = confirm + back_holdtime;


function hold_down(){

//長押し計算 (コマンド操作などの上下左右選択では、lm == 1とlm == confirmで反応させよう)
   if(lrk == "left" && key_reset == 0){
       lm++;
   }else{
       lm = 0;
   }
    if(lm >= limit_holdtime){
       lm = confirm;
   }
    
    if(lrk == "right" && key_reset == 0){
       rm++;
   }else{
       rm = 0;
   }
    if(rm >= limit_holdtime){
       rm = confirm;
   }
    
    if(udk == "up" && key_reset == 0){
       um++;
   }else{
       um = 0;
   }
    if(um >= limit_holdtime){
       um = confirm;
   }
    
    if(udk == "down" && key_reset == 0){
       dm++;
   }else{
       dm = 0;
   }
    if(dm >= limit_holdtime){
       dm = confirm;
   }
    
    if(enter_K == "on" && key_reset == 0){
       enter_M++;
   }else{
       enter_M = 0;
   }
    if(enter_M >= limit_holdtime){
       enter_M = confirm;
   }
    
    if(z_K == "on" && key_reset == 0){
       z_M++;
   }else{
       z_M = 0;
   }
    if(z_M >= limit_holdtime){
       z_M = confirm;
   }
    
    if(space_K == "on" && key_reset == 0){
       space_M++;
   }else{
       space_M = 0;
   }
    if(space_M >= limit_holdtime){
       space_M = confirm;
   }
    
    if(esc_K == "on" && key_reset == 0){
       esc_M++;
   }else{
       esc_M = 0;
   }
    if(esc_M >= limit_holdtime){
       esc_M = confirm;
   }
    
    if(x_K == "on" && key_reset == 0){
       x_M++;
   }else{
       x_M = 0;
   }
    if(x_M >= limit_holdtime){
       x_M = confirm;
   }
    
    if(touch == 2){
    touch = 0;
    }
    
    if(key_reset == 1){
        key_reset = 0;
    }
    
}
    