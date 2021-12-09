var myNum = 32;

function testShadowing() {
    let myNum = 999;
    console.log("Shadowed myNum is " + myNum); // 999
    console.log("Global myNum is " + window.myNum); // Should be 32, parcel outputs "undefined"
    // With parcel 2.0.0-nightly.939 or later, this outputs 32, as expected.
}

testShadowing();