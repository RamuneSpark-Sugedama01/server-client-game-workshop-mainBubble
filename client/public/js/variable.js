/*
variable_base.js では、配列記号i, lrk/udk/z_Kなどのキー認識変数、
lm/rm/z_Mなどの長押し変数を宣言済みです。

また、fps(フレームレート)についてはinterval.jsで宣言しています。

ここで変数を宣言してください。
*/

let scene = "start";
let next_scene = undefined;

let s_c = -1;
let s_scene = [,"fantasy"];
s_scene[-1] = "normal";

let sx = 0;
let sy = 0;

let select = 0;