let tab1=[1,2,3];
let tab2=[3,4,5,6];
let tab=[];
for (let i=0;i<tab1.length;i++)
      tab.push(tab1[i])

for (let j=0;j<tab2.length;j++){
      let y=false 
      for (let x=0;x<tab.length;x++){
            if (tab[x] ==tab2[j]){
               y= true
               break;}
            }
      if (y==false)
      tab.push(tab2[j]) 
}
console.log(tab);
