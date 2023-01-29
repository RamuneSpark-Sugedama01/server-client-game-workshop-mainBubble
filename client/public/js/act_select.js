let ma = 0;

function act_select(){
if(rm == 1 && ma == 0){
    select++;
    ma = 1;
}else if(lm == 1&& ma == 0){
    select--;
    ma = 1;
}
    
    if(select > 4){
        select = 0;
    }
    if(select < 0){
        select = 4;
    }
    
    if(kando > 30){
        kando = 0;
    }
    if(kando < 0){
        kando = 30;
    }
    
    
    if(ma >= 1){
        
    ma++;
    }
    
    if(ma>3){
        ma = 0;
    }
    
   }