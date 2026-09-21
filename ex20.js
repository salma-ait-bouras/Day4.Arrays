let tabM=[3,9,1,7];
let max=tabM[0];
let sum=0;
for(let i=0;i<tabM.length;i++){
    if (max<tabM[i])
        max=tabM[i]
}
for(let i=0;i<tabM.length;i++){
    if (tabM[i]==max)
        continue;
    else
        sum=sum+tabM[i];
}
console.log(sum/(tabM.length-1));