function contains(arr, value) {
    for(let i=0;i<arr.length;i++) {
        if(arr[i]===value){
          return true;
        }
    }
    return false;
}
console.log(contains([1, 2, 3, 4], 3));