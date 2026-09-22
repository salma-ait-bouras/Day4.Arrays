let tab=[1,2,3,4,5]
let fin =tab[0]
for(let i=0;i<tab.length-1;i++)
    tab[i]=tab[i+1]

tab[tab.length -1]=fin
console.log(tab);
