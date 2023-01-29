let black_shift = 0;
let shift = 0; //シーン内の暗転を伴わない遷移


let change = 1;
const change_level = 0.1;
let change_time = 0;

function blackout(){

if(next_scene != undefined　&& black_shift != 100 && black_shift != 101 && black_shift != -100){
    black_shift = 100;
}
    
    if(black_shift == 100){
        change -= change_level;
    
        if(change <= 0){
            change = 0;
            black_shift = 101;
            
            BGMpause();
        }
    
    }
    
    if(black_shift == 101){
        
                  change_time++;
        
        if(change_time >= fps){
            
            scene = next_scene;
            
            change_time = 0;
            black_shift = -100;
            shift = 0;
            remove_all();   
        }
    
    }
    
    if(black_shift == -100){
        
           change += change_level;
    
        if(change >= 1){
            change = 1;
            black_shift = 0;
            next_scene = undefined;
        }
        
    }

    
    
    screen.style.opacity = change;
}