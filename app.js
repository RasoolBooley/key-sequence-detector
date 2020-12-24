const keySequence = [];
const secret = 'unicorn'

console.log(`the code is ${secret}`)

window.addEventListener('keyup', (e)=>{
    console.log(e.key);
    keySequence.push(e.key);
    keySequence.splice(-secret.length - 1, keySequence.length - secret.length);
    if(keySequence.join('').includes(secret)){
        for(let i = 0; i < 40; i++){
            cornify_add();
        }
        
        
    }
    console.log(keySequence);
});