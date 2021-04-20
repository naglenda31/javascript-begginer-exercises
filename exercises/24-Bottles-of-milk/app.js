// Your code here:
let str = "";
let singular = " bottle of milk";
let plural = " bottles of milk";
let onTheWall = " on the wall. ";
let onTheWall2 = " on the wall, "
let verse1 = "Take one down and pass it around, ";
let verse2 = "No more bottles of milk on the wall, no more bottles of milk. Go to the store and buy some more, 99 bottles of milk on the wall. "

function sing(){
    for(let i = 99; i >= 0; i--){
        if(i === 0){
            str = str + verse2;
        }
        else if(i === 1){
            str = str + i + singular + onTheWall2 + i + singular + ". " + verse1 + "no more " + plural + onTheWall + '\n'
        }
        else if(i === 2){
            str = str + i + plural + onTheWall2 + i + plural + ". " + verse1 + (i-1) + singular + onTheWall + '\n'
        }
        else{
            str = str + i + plural + onTheWall2 + i + plural  + ". " + verse1 + (i-1) + plural + onTheWall + '\n'
        } 
        
    }
    return str;  
}
for(let i = 0; i < 99; i++){
    console.log(sing())

}