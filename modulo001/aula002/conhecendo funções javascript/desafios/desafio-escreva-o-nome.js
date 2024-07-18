function writeMyName (name){
    name = 'Gabriel';
    return `Meu nome é: ${name}`;
}

(function (){
    console.log(writeMyName('Gabriel'));
})()