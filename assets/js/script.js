// const num = 99;



// if(num===10) {
//     document.body.style.setProperty('background-color','red')

// } else {
//     console.log('age is something else');

// }

// if(num <= 10) {
//     document.body.style.setProperty('background-color','red')

// } else {
//     console.log('age is something else');

// }

// if(num>10) {
//     document.body.style.setProperty('background-color','green')

// } else {
//     console.log('age is something else');

// }


function windowResized() {
    // console.log("Window Resized");
    const myBrowserWidth = window.innerWidth;

    if(myBrowserWidth>1200){
        document.body.style.setProperty('background-color','blue')
    } else {
        document.body.style.setProperty('background-color','green')
    }  
}

function moveBall(event) {
    // console.log(event.x)
    // console.log(event.y)
    const x = event.x;
    const y = event.y;
    const ball = document.querySelector('[data-ball]')
    // ball.style.top = top + 'px';
    // ball.style.left = left + 'px';
    //transform: transform(200px, 100px);
    ball.style.transform = `translate(${x-50}px, ${y-50}px)`; //Backticks ``
}

document.addEventListener("click", moveBall)


//Arrays

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
numbers.forEach(function(number){
    // console.log(number);
    const img = document.createElement('img');
    img.src =`https://picsum.photos/id/${number}/200`
    document.body.appendChild(img);
})