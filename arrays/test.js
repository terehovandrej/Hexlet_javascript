function getResult(cash, s) {
    let lowest = 0;
    while (s > 0){
        for (var i = 0; i < cash.length; i++) {
            if (cash[i] < cash[lowest]) lowest = i;
        }
        if (s > 3){
            cash[lowest]+= 3
            s-=3
        } else {
            let temp =s
            cash[lowest]+=s
            s-=temp
        }

    }

    let max = Math.max(...cash)
    let result = 0
    for(let i = 0; i < cash.length; i++){
        if (cash[i] < max) result++
    }
    if (result === 0) {return 1}
    return result
    // Write your code here...
}

// console.log(getResult([51, 48, 62], 11))
console.log(getResult([51, 48, 54, 48], 14))
console.log(getResult([54, 54, 54, 54], 3))