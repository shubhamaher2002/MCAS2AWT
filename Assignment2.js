// Que. Write a ECMAScript program to convert an asynchronous function to return a promise.

function asyncFunction(){
    return new Promise((resolve,reject) => {
        setTimeout(()=> {
            let success = true;
            if(success){
                resolve();
            }
            else {
                reject();
            }
        },2000);
    })
}
asyncFunction()
.then(result => {
    console.log("Name - Shubham");
})
.catch(error => {
    console.log("Not Data Found");
}) 
