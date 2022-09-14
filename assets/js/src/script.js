let a = 9;
if (new Date() > 100000) {
    a = 6
}
const myFn = () => {
    console.log('update a in thereee')
    return a + 9
}
myFn();
console.log('script.js in thereeee', a)


