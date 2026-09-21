let difTab=[1,2,3,4,5,6];
 let vTemp=0;
 vTemp=difTab[0];
 difTab[0]=difTab[difTab.length-1];
 difTab[difTab.length-1]=vTemp;
 console.log(difTab);