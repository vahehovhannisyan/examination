function numbers (n) {

    let arr = [];
    let sum = 0;

    for(let i = 1; i<=n; i++) {
        sum+= i
    };


    for(let a = 1; a<= n;  a ++ ) {
       
        for(let b=1; b<=n; b++) {

            if(a*b == (sum-a-b) ){
                arr.push([a,b])
            };
        };

    };

    if(arr.length>0){
        return arr
    };
        return `There are no such numbers`
    
};


console.log(numbers(10));
console.log(numbers(5));
console.log(numbers(1041));




function fibonacci (number) {

    let arr = [];

    if(number==0) {
        arr[0]=0
        return arr
    }

    if(number==1) {
        arr[0]=1;
        return arr
    }else{

        arr[0] = 0;
        arr[1] = 1;
    
        for(let i=2; i<=number; i++) {
            arr[i] = arr[i-1] + arr[i-2];
            
        }  

        return arr
    }

        
}

console.log(fibonacci(5));
console.log(fibonacci(10))
console.log(fibonacci(0))
console.log(fibonacci(1))


















