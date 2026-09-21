let tabM=[3,9,1,7];
let max=tabM[0];
let min=tabM[0];
function range(tabM) {
for(let i=0;i<tabM.length;i++){
    if (max<tabM[i])
        max=tabM[i]

    else if (min>tabM[i])
        min=tabM[i]
}
return(max-min);
}
console.log(range(tabM)); 