var myNum = 32;

function randomizer(limit) {
    let myNum = Math.floor(Math.random() * limit);

    console.log("myNum is " + myNum);
    console.log("Global myNum is " + window.myNum);
    if (window.myNum == undefined) {
        console.log("Can't access global object when using parcel bundler");
    }

    return myNum;
}