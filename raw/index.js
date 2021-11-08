var myNum = 32;

function testShadowing() {
    let myNum = 999;
    console.log("Shadowed myNum is " + myNum); // 32
    console.log("Global myNum is " + window.myNum); // Should be 999, parcel outputs "undefined"
}

testShadowing();