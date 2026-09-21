function stats(tab) {
let tab=[3,8,2,7];
let max=tab[0];
let min=tab[0];
let sum=0;
let average;
for(let i=0;i<tab.length;i++){
    sum=sum+tab[i];
    average=sum/tab.length;
    if (max<tab[i])
        max=tab[i]
    else if (min>tab[i])
        min=tab[i]
}
console.log("sum:",sum); 
console.log("average:",average); 
console.log("min:",min); 
console.log("max:",max); 
}
