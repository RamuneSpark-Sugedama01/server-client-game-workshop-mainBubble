//ボタン押下
 document.onkeydown = key_down;
 function key_down( e ){

 e.preventDefault( );
let key = e.keyCode;

     
 if( key == 37 || key == 65 ){
   lrk = "left";
 }
 if( key == 39 || key == 68 ){
   lrk = "right";
 }
 if( key == 38 || key == 87 ){
   udk = "up";
 }
 if( key == 40 || key == 83 ){
   udk = "down";
 }  
     if(key == 13){
   enter_K = "on";
 }  
     
     if( key == 90){
    z_K = "on";       
 }  
 if( key == 32 ){
   space_K = "on";
 }  
     if( key == 27 || key == 8 ){
   esc_K = "on";
 }
        if( key == 88 ){
   x_K = "on";
 }
     
     
 }

//ボタン離上
document.onkeyup = key_up;
function key_up( e ){

 e.preventDefault( );
let key = e.keyCode;

 if( ( key == 37 || key == 65 ) && lrk == "left" ){
   lrk = "off";
 }
 if( ( key == 39 || key == 68 ) && lrk == "right" ){
   lrk = "off";
 }
 if( ( key == 38 || key == 87 ) && udk == "up" ){
   udk = "off";
 }
 if( ( key == 40 || key == 83 ) && udk == "down"){
   udk = "off";
 }
if(key == 13  && enter_K == "on"){
enter_K = "off";
 }

if(key == 90  && z_K == "on"){
z_K = "off";
 }

    if( key == 32 && space_K == "on" ){
   space_K = "off";
 }
  if( (key == 27 || key == 8) && esc_K == "on"){
   esc_K = "off";
 }
     if( key == 88 && x_K == "on"){
   x_K = "off";
 }
    
    
}