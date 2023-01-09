const boom = (number) => {
    for(let i=1;i<=number;i++){
        if(i%7===0&&(i.toString().includes('7'))){
            console.log('BOOM-BOOM')
        }
        else if(i%7===0){
            console.log('BOOM')
        }
        else{
            console.log(i)
        }
    }
    return 1
}

boom(18)