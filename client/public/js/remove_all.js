/*
すべての画像表示を全消去する関数です。
div_idを追加した場合、必ずここに「element.innerHTML = "";」を併せて記述します。

※screenとdiv_debugは入れないでください。
*/

function remove_all(){

    div_bg.innerHTML = "";

    for(let i = 0; i < c_num; i++){
        //cm[i] = 0
        div_cloud[i].innerHTML = "";
    }
    
    div_build.innerHTML = "";
    
for(let i = 0; i < b_num; i++){    
    for(let j = 0; j < 2; j++){
    bm[i][j] = 0;
div_bubble[i][j].innerHTML = "";
}
}
    
    for(let i = 0; i < w_num; i++){
        wm[i] = 0;
div_watage[i].innerHTML = "";
}
    
    for(let i = 0; i < st_num; i++){
stm[i] = 0;
        div_stars[i].innerHTML = "";
}
    
    if(phone == false){
    BGMSet();
    }

    
}