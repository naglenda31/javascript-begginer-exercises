
function sing(){
    let verse1 = "let it be, ";
    let verse2 = "words of wisdom, ";
    let verse3 = "there will be an answer, ";
    let verse4 = "let it be"
    let str = "";
    for(let i = 0; i < 4 ; i++){
        str = str + verse1; 
    };
        str = str + verse2;
    for (let j = 0; j < 5; j++){
        str = str + verse1;
    };
        str = str + verse3 + verse4;
    return str;
}




//Your code above ^^^

console.log(sing());