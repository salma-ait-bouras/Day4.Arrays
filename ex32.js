let tab =[1,2,2,3,1,4];
let tabI =[];
for (let i=0;i<tab.length;i++){
    let existe = false;
    for (let j=0;j<tabI.length;j++) {
        if (tab[i]===tabI[j]) {
            existe=true;
            break;
        }
    }
    if (existe===false) {
        tabI.push(tab[i]);
    }
}
console.log(tabI);