
const link = document.querySelector('.link');
const pipe = document.querySelector('.tree');

const jump = () => { 
    link.classList.add('jump');
    

    setTimeout(() => {
        link.classList.remove('jump');
        
    }, 1000);
};


const loop = setInterval(() => {

const pipePosition = tree.offsetLeft;
const linkPosition = +window.getComputedStyle(link).bottom.replace('px');

console.log(linkPosition);



if (pipePosition < 120 && pipePosition > 0 && linkPosition < 80) {

    pipe.style.animation = 'none' ;
    pipe.style.left = `${treePosition}px`;

    link.style.animation = 'none';
    link.style.bottom = `${treePosition}px`;
}

}, 10)

document.addEventListener('click', jump);

