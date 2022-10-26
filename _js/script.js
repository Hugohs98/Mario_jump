/* Selecting the elements with the class of mario and pipe. */
const mario = document.querySelector('.mario')
const pipe = document.querySelector('.pipe');

/**
 * When the jump function is called, add the jump class to the mario element, then after 500
 * milliseconds, remove the jump class from the mario element.
 */
const jump = () => {
    mario.classList.add('jump')

    setTimeout(() => {
        mario.classList.remove('jump');
    }, 500);
}

/* Checking the position of the pipe and mario every 10 milliseconds. If the pipe is within 120 pixels
of the mario, the game is over. */
const loop = setInterval(() => {

    console.log('loop')

    const pipePosition =  pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');

    if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 80) {

        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;

        mario.style.animation = 'none';
        mario.style.bottom = `${marioPosition}px`;

        mario.src = './_img/game-over.png';
        mario.style.width = '75px';
        mario.style.marginLeft = '50px';

        clearInterval(loop);
    }

}, 10)

/* Listening for a keydown event, and when it occurs, it calls the jump function. */
document.addEventListener('keydown', jump)