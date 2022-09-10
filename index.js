//A
const arr = [1,2,3,4,5]
let [a,b,c,d,e] = arr
console.log(a,b,c,d,e);
//B
 let = [e,d,c,b,a] = [a,b,c,d,e]
 console.log(a,b,c,d,e);

 // SOAL 2
 const array = [1,2,3,4,5,6,7,8,9,10]
 function removeArray(...arr){
    let [a,b,c,...value] = array
    return(value)
 }

// soal 3
let janji = false
let JSON = {ram : 96,rom : 186,batrai :15000,buatan:'indonesia'}
let pesanerror = {NOT: 'bukan object promise'}
let promise1 = new Promise( (resolve, reject) => {
    if(janji){
        resolve(JSON)
    }else{
        reject(pesanerror)
    }
})
promise1
.then(respon => console.log(respon))
.catch(slow => console.log(slow))




