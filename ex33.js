let tabM=[4,9,2,9,7];
let max=tabM[0];
let Max=tabM[0];
for(let i=0;i<tabM.length;i++){
    if (max<tabM[i]){
        max=tabM[i]
    }
}
for(let i=0;i<tabM.length;i++){
if (tabM[i]!==max&&Max<tabM[i]){
        Max=tabM[i]
    }
}
console.log(Max);
