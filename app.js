const keySequence = [];
const secret = 'unicorn'

console.log(`the code is ${secret}`)

window.addEventListener('keyup', (e)=>{
    console.log(e.key);
    keySequence.push(e.key);
    keySequence.splice(-secret.length - 1, keySequence.length - secret.length);
    if(keySequence.join('').includes(secret)){
        cornify_add();
        alert("You found the code!");
    }
    console.log(keySequence);
});