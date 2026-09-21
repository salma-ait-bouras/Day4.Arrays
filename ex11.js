let arry=[1,2,4,5];
let i=0;
let Narry=[];
while (i<arry.length){
    Narry.push(arry[i])
if (arry[i] === 2 && arry[i+1] === 4)
        Narry.push(3);
i++;
}
console.log(Narry);