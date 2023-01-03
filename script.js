// function age(a,b){
//     return (a+b);
// }

// function detail(name,age){
//     console.log(`${name},${age}`);
// }
// detail("Ashish",age(10,50));
/*
setTimeout(() => {
    let count = 1;
    setTimeout(() => {
        console.log(count++);
        setTimeout(() => {
            console.log(count++);
            setTimeout(() => {
                console.log(count++);
                setTimeout(() => {
                    console.log(count++);
                    setTimeout(() => {
                        console.log(count++);
                        setTimeout(() => {
                            console.log(count++);
                        }, 7000);
                    }, 6000);
                }, 5000);
            }, 4000);
        }, 3000);
    }, 2000);
}, 1000);
*/


// function callback1(cb){
//     for(let i =1;i<=10;i++){
//         cb(i);
//     }
// }

// callback1(function cb(i){
//     setTimeout(()=>{
//         console.log(i);
//     },i*1000);
// });


// function printNum(){
//     for(i=0; i<=7;i++){
//         console.log(i);
//     }
// }
// const newPromise = new Promise((res,rej)=>{
//     setTimeout(() => {
//         let print = printNum();
        
//     }, 1000);
// })

// function checkEvenorNot(num){
//     if (num%2 == 0){
//         return true;
//     }
//     return false;
// }

// const myPromise = new Promise((res, rej)=>{
//     setTimeout(()=>{
//         let result = checkEvenorNot(25);
//         if(result == true){
//             res("It is even");
//         }
//         else{
//             rej("It is odd");
//         }
//     },5000)
// })
// myPromise.then((data)=>{
//     console.log(data);
// }).catch((data)=>{
//     console.log(data);
// })

function checkEvenorNot(num){
    if (num%2 == 0){
        return true;
    }
    return false;
}

const myPromise = new Promise((res, rej)=>{
    setTimeout(()=>{
        let result = checkEvenorNot(54);
        if(result == true){
            res("It is even");
        }
        else{
            rej("It is odd");
        }
    },5000)
})

// async function getData(){
//     let data = await myPromise();
//     console.log(data);
// }
async function getData(){
    try{
        let data = await myPromise();
        console.log(data)
    }
    catch(err){
        console.log("Error", err)
    }
}
    getData();
//Q4

// const myPromise = new Promise((resolve,reject)=>{
//     let batch = "EA18";
//     if(batch == "EA18"){
//         resolve("Welcome to batch");
//     }
//     else{
//         reject("Not your batch");
//     }
// })
// // console.log(myPromise);
// myPromise.then((k)=>{
//     console.log(k);
// }).catch((x)=>{
//     console.log(x);
// })


// function a1(){
//     return new Promise ((res, rej)=>{
//         setTimeout(() => {
//             res("Hello")
//         }, 5000);
//     })
// }
// function a2(){
//     return new Promise ((res, rej)=>{
//         setTimeout(() => {
//             res("World")
//         }, 5000);
//     })
// }

// async function d1(){
//     try {
//         let result = Promise.all([a1(),a2()]);
//         console.log(result[0] + " " + result[1]);
//     }
//     catch(err){
//         console.log("Error");
//     }
// }
// d1();