let tabM=[4,9,2,9,1];
let max=tabM[0];
let ind=0;
for(let i=0;i<tabM.length;i++){
    if (max<tabM[i]){
        max=tabM[i]
        ind=i;
    }

}
console.log(ind);