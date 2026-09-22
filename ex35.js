let tab=[1, 2, 3, 4, 5, 6];
let evens=[];
let odds=[];

for (let i=0;i<tab.length;i++){
    if (tab[i]%2===0)
        evens.push(tab[i])
    else
        odds.push(tab[i])
}
console.log("evens : ",evens)
console.log("odds : ",odds)