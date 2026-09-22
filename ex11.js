let arry=[1,2,4,5];
let i=0;
let temp =0;
arry.unshift(3);
while (i<arry.length-1){
    if(arry[i]>arry[i+1]){
        temp=arry[i]
        arry[i]=arry[i+1]
        arry[i+1]=temp
    }
i++
}
console.log(arry)
