let first = document.querySelectorAll(".first");
let second = document.querySelectorAll(".second");

let randomNum1 = Math.random() * 2;
let randomNum2 = Math.random() * 3;

for( let i = 0 ; i < first.length ; i++){
    first[i].style.cssText = `animation-delay: ${randomNum1 * i}s`
};
for( let j = 0 ; j < second.length ; j++){
    second[j].style.cssText = `animation-delay: ${randomNum2 * j}s`
}