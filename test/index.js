import * as util from "../dist/util.mjs";
// const util = require("./dist/util.cjs");

// const res = util.sort(["a-10","b-2",true,"b-11","a-9",null,1,false]);
// console.log(res)

// ;(async function() {
//   console.log(1);
//   await util.wait(500);
//   console.log(2);
// })();

// const a = "Lorem ipsum dolor sit amet.".split(/([\s])/g);
// const b = "Lorem ipsum foobar sit aget.".split(/([\s])/g);
// const res = util.compare(a, b);

// console.log(res)

// const str = "${a} ${b.bb.bbb} sit amet.";
// const obj = {
//   a: "Lorem ipsum",
//   b: {
//     bb: {
//       bbb: "dolor"
//     }
//   }
// }
// const res = util.parseTemplate(str, obj);
// // Lorem ipsum dolor sit amet.
// console.log(res)

// ;(async function() {
//   let i = 0;
//   async function a() { return i++; }
//   const funcs = [a,a,a];
//   const res = await util.promiseAll(funcs);
//   console.log(res);
// })();

// const arr = [
//   { name: "john", age: 10 },
//   { name: "john", age: 15 },
//   { name: 1, age: 10 },
//   { name: {}, age: 9 },
//   { name: [], age: 9 },
//   { name: true, age: 9 },
// ]

// const res = util.group(arr, "name");

// console.log(res)
const type = "image/jpeg";

console.log(util.toBase64("Lorem ipsum dolor sit amet.", type));
// console.log(util.fromBase64(util.toBase64("Lorem ipsum dolor sit amet.")))

// const a = { x: 0, y: 0 };
// const b = { x: 0.25, y: 1 };
// const c = { x: 0.5, y: 1 };
// const d = { x: 1, y: 1 };

// console.log(util.bezier([a,b,c,d], 0))
// console.log(util.bezier([a,b,c,d], 0.5))
// console.log(util.bezier([a,b,c,d], 1))
