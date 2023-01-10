function duplicatesRemover (arrOfInts){
    let newArr = []
    for (let i= 0; i<arrOfInts.length;i++){
        if(newArr.indexOf(arrOfInts[i])===-1){
            newArr.push(arrOfInts[i])
        }
    }
    return newArr
}

console.log(duplicatesRemover([3,4,4,3,6,3]))