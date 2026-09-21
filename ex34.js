let tab1=[1,2,3];
let tab2=[3,4,5];
let tab=[];
for (let i=0;i<tab1.length;i++)
      tab.push(tab1[i])

for (let j=0;j<tab2.length;j++){
      if (tab2[j]!==3)
      tab.push(tab2[j])
}
console.log(tab);