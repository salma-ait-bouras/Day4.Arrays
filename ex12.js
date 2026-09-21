let tab=[1,2,3,4,5];
let fTab=[];
let fin =tab[0];
for(i=0;i<4;i++){
    fTab[i]=tab[i+1]
}
fTab.push(fin);
console.log(fTab);