function fibonacci(n) {
    var fibArray = [];
    
    fibArray.push(0);
    fibArray.push(1);
    
    for (var i = 2; i < n; i++) {
        fibArray.push(fibArray[i - 1] + fibArray[i - 2]);
    }
    
    return fibArray;
}
