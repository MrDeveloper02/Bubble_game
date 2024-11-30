function make_Bubble(){
    var clutter = '';
for (var i = 0; i < 102; i++) {
    var rn = Math.floor(Math.random()*10);
    clutter += ` <div class= bubble> ${rn}</div>`;

}
document.querySelector('#pbottom').innerHTML = clutter;
}
make_Bubble();
var timer = 60;
function run_timer(){
    var timer_int =  setInterval(function(){
        if(timer>0){
            timer--;
            document.querySelector('#timer_val').textContent = timer;
        }
        else{
            clearInterval(timer_int);
            document.querySelector("#pbottom").innerHTML =`<h2>GAME OVER</h2>`;
        }

    }, 1000);

}
run_timer();
var hit = 0;
function getNewHit(){
     hit = Math.floor(Math.random()*10);
    document.querySelector('#hit_val').textContent = hit;
}
getNewHit();

var score = 0;
function increase_score(){
    score += 10;
    document.querySelector('#score_val').textContent = score;
}

document.querySelector('#pbottom')
.addEventListener("click",function(dets){
    var click_num = Number(dets.target.textContent);
    if(click_num === hit){
        increase_score();
        getNewHit();
        make_Bubble();
    }

});