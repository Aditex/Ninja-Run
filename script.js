score = 0;

audiogo = new Audio('die.wav');
audiojump = new Audio('jump.wav')


document.onkeydown = function (e) {
    console.log("key code is:", e.keyCode);
    if (e.keyCode == 38) {
        dino = document.querySelector('.dino');
        dino.classList.add('animatedino');

        setTimeout(() => {
            dino.classList.remove('animatedino')
        }, 700);
        audiojump.play();
    }
}

setInterval(() => {
    dino = document.querySelector('.dino');
    gameover = document.querySelector('.gameover');
    obstacle = document.querySelector('.obstacle');

    dx = parseInt(window.getComputedStyle(dino, null).getPropertyValue('left'));
    dy = parseInt(window.getComputedStyle(dino, null).getPropertyValue('top'));

    ox = parseInt(window.getComputedStyle(obstacle, null).getPropertyValue('left'));
    oy = parseInt(window.getComputedStyle(obstacle, null).getPropertyValue('top'));

    offsetx = Math.abs(dx - ox);
    offsety = Math.abs(dy - oy);
    console.log(offsetx, offsety);
    if (offsetx < 93 && offsety == 130) {
        gameover.style.visibility = 'visible';
        obstacle.classList.remove('obstacleAni');
        
        audiogo.play();

        
    }
    else if (gameover.style.visibility == 'visible') {
        null
    }
    else {
         
        score += 1;
        updatescore(score);
        anidur = parseFloat(window.getComputedStyle(obstacle, null).getPropertyValue('animation-duration'));
        newdur = anidur - 0.001;
        console.log("new duration", newdur)
        obstacle.style.animationDuration = newdur + 's';
        
        
    }


}, 100);

setInterval(() => {

}, 5000);

function updatescore(score) {
    scorecont.innerHTML = "Your Score:" + score;
}



