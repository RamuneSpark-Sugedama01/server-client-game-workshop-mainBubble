//配列記号
let i;

//操作キー
let lrk = "off";
let udk = "off";
let enter_K = "off";
let z_K = "off";
let space_K = "off";
let esc_K = "off";
let x_K = "off";
    
let key_reset = 0;
const off = "off";
    
//押したタイミングのみ判定    
let lm = 0;
let rm = 0;
let um = 0;
let dm = 0;
let enter_M = 0;
let z_M = 0;
let space_M = 0;
let esc_M = 0;
let x_M = 0;

//transform.position
const x_left = "translate(0%, ";
const x_center = "translate(-50%, ";
const x_right = "translate(-100%, ";

const y_left = "0%)";
const y_center = "-50%)";
const y_right = "-100%)";

//勝手な改行防止
const tx = "<nobr>";
const te = "</nobr>";


let phone;

function phonecheck(){

  if (navigator.userAgent.match(/iPhone|Android.+Mobile/)) {
    phone = true;
  } else {
      phone = false;
  }
}
phonecheck();