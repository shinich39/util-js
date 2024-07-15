# util-js

Javascript utilities.

## Usage

ESM

```js
import * as util from "./dist/util.min.mjs";
```

CJS

```js
const util = require("./dist/util.min.cjs");
```

Browser

```html
<script src="./dist/util.min.js"></script>
<script>
  const { sum, test } = window.util; // esbuild.js > MODULE_NAME
</script>
```

- Object type validations

```js
const res = util.isBoolean(true); // true
const res = util.isNumber(1); // true
const res = util.isNumeric("1"); // true
const res = util.isString("str"); // true
const res = util.isEmptyString(""); // true
const res = util.isObject({ a: 1 }); // true
const res = util.isEmptyObject({}); // true
const res = util.isNull(null); // true
const res = util.isArray([0, 1, 2]); // true
const res = util.isBooleanArray([true, false]); // true
const res = util.isNumberArray([1, 2, 3]); // true
const res = util.isStringArray(["a", "b", "c"]); // true
const res = util.isObjectArray([{ a: 1 }, { a: 2 }, { a: 3 }]); // true
const res = util.isEmptyArray([]); // true
const res = util.isFunction(isNaN); // true
const res = util.isEmpty(undefined); // true
const res = util.isEmpty(null); // true
const res = util.isSameType(1, 2); // true
const res = util.isSameType(null, null); // true
```

- util.random(min, max)

```js
const res = util.random(0, 1);
// 0 <= n < 1
```

- util.bezier(points, time)

```js
const p0 = { x: 0, y: 0 };
const p1 = { x: 0.25, y: 1 };
const p2 = { x: 0.5, y: 1 };
const p3 = { x: 1, y: 1 };
const time = 0.5;
const res = util.bezier([p0, p1, p2, p3], time);
// { x: 0.40625, y: 0.875 }
```

- util.id()

```js
const res = util.id();
// 66334bcae2c321000000
```

- util.xor(str, salt)

```js
const str = "Lorem ipsum dolor sit amet.";
const salt = "3939";
const encrypted = util.xor(str, salt);
// VA\^ZI@L^WV_VA@PGRTVM

const decrypted = util.xor(encrypted, salt);
// Lorem ipsum dolor sit amet.
```

- util.toBase64(str, type)

```js
const str = "Lorem ipsum dolor sit amet.";
const type = "image/jpeg"; // optional
const res = util.toBase64(str, type);
// data:image/jpeg;base64,TG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQu
```

- util.fromBase64(str)

```js
const str = "TG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQu";
const res = util.fromBase64(str);
// Lorem ipsum dolor sit amet.
```

- util.splitInt(str)

```js
const str = "Oregano Leaves, 0.5 tsp";
const res = util.splitInt(str);
// [ 'Oregano Leaves, ', '0', '.', '5', ' tsp' ]
```

- util.splitFloat(str)

```js
const str = "Oregano Leaves, 0.5 tsp";
const res = util.splitFloat(str);
// [ 'Oregano Leaves, ', '0.5', ' tsp' ]
```

- util.toFullWidth(str)

```js
const str = "Lorem ipsum dolor sit amet.";
const res = util.toFullWidth(str);
// Ｌｏｒｅｍ　ｉｐｓｕｍ　ｄｏｌｏｒ　ｓｉｔ　ａｍｅｔ．
```

- util.toHalfWidth(str)

```js
const str = "Ｌｏｒｅｍ　ｉｐｓｕｍ　ｄｏｌｏｒ　ｓｉｔ　ａｍｅｔ．";
const res = util.toHalfWidth(str);
// Lorem ipsum dolor sit amet.
```

- util.compare(strA, strB)

```js
// Compare characters.
const a = "Lorem ipsum dolor sit amet.";
const b = "Lorem ipsum foobar sit aget.";
const res = util.compare(a, b);
// {
//   acc: 0.8727272727272727,
//   result: [
//     { type: 0, value: 'Lorem ipsum ' },
//     { type: -1, value: 'd' },
//     { type: 1, value: 'f' },
//     { type: 0, value: 'o' },
//     { type: -1, value: 'l' },
//     { type: 0, value: 'o' },
//     { type: 1, value: 'ba' },
//     { type: 0, value: 'r sit a' },
//     { type: -1, value: 'm' },
//     { type: 1, value: 'g' },
//     { type: 0, value: 'et.' }
//   ]
// }
```

```js
// Compare words.
const a = "Lorem ipsum dolor sit amet.".split(/([\s])/g);
const b = "Lorem ipsum foobar sit aget.".split(/([\s])/g);
const res = util.compare(a, b);
// {
//   acc: 0.7777777777777778,
//   result: [
//     { type: 0, value: 'Lorem ipsum ' },
//     { type: -1, value: 'dolor' },
//     { type: 1, value: 'foobar' },
//     { type: 0, value: ' sit ' },
//     { type: -1, value: 'amet.' },
//     { type: 1, value: 'aget.' }
//   ]
// }
```

- util.parseCommand(str)

```js
const str = "git commit -m 'update \\'many\\' features' -f true";
const res = util.parseCommand(str);
// [ 'git', 'commit', '-m', "update \\'many\\' features", '-f', 'true' ]
```

- util.parseQueryString(str)

```js
const str = "https://www.google.com/search?q=bing&page=10&page=39";
const res = util.parseQueryString(str);
// { q: [ 'bing' ], page: [ '10', '39' ] }

const str = "q=bing&page=10&page=39";
const res = util.parseQueryString(str);
// { q: [ 'bing' ], page: [ '10', '39' ] }
```

- util.parseTemplate(str, obj)

```js
const str = "${a} ${b.bb.bbb} sit amet.";
const obj = {
  a: "Lorem ipsum",
  b: {
    bb: {
      bbb: "dolor",
    },
  },
};
const res = util.parseTemplate(str, obj);
// Lorem ipsum dolor sit amet.
```

- util.min(arr)

```js
const arr = [1, 2, 3, 4, 5, 6];
const res = util.min(arr);
// 1
```

- util.max(arr)

```js
const arr = [1, 2, 3, 4, 5, 6];
const res = util.max(arr);
// 6
```

- util.avg(arr)

```js
const arr = [1, 2, 3, 4, 5, 6];
const res = util.avg(arr);
// 3.5
```

- util.mode(arr)

```js
const arr = [1, 2, 3, 3, 4, 5, 6];
const res = util.mode(arr);
// 3
```

- util.choose(arr)

```js
const arr = [1, 2, 3, 4, 5, 6];
const res = util.choose(arr);
// 1 ~ 6
```

- util.array(len, value)

```js
const res = util.array(5, 1);
// [ 1, 1, 1, 1, 1 ]

const res = util.array(5, (e) => e);
// [ 0, 1, 2, 3, 4 ]

const res = util.array(5, []);
res[0].push(1);
// [ [1], [], [], [], [] ]
```

- util.sort(arr)

```js
const arr = ["a-10", "b-2", true, "b-11", "a-9", null, 1, false];
const res = util.sort(arr);
// [null, false, true, 1, 'a-9', 'a-10', 'b-2', 'b-11']
```

- util.shuffle(arr)

```js
const arr = [1, 2, 3, 4, 5, 6];
const res = util.shuffle(arr);
// [ 5, 1, 2, 4, 6, 3 ]
```

- util.cases(arr)

```js
const arr = [
  [1, 2, 3],
  [4, 5, 6, 7],
  [8, 9, 10],
];

const res = util.cases(arr);
// [
//   [ 1, 4, 8 ], [ 1, 4, 9 ], [ 1, 4, 10 ],
//   [ 1, 5, 8 ], [ 1, 5, 9 ], [ 1, 5, 10 ],
//   [ 1, 6, 8 ], [ 1, 6, 9 ], [ 1, 6, 10 ],
//   [ 1, 7, 8 ], [ 1, 7, 9 ], [ 1, 7, 10 ],
//   [ 2, 4, 8 ], [ 2, 4, 9 ], [ 2, 4, 10 ],
//   [ 2, 5, 8 ], [ 2, 5, 9 ], [ 2, 5, 10 ],
//   [ 2, 6, 8 ], [ 2, 6, 9 ], [ 2, 6, 10 ],
//   [ 2, 7, 8 ], [ 2, 7, 9 ], [ 2, 7, 10 ],
//   [ 3, 4, 8 ], [ 3, 4, 9 ], [ 3, 4, 10 ],
//   [ 3, 5, 8 ], [ 3, 5, 9 ], [ 3, 5, 10 ],
//   [ 3, 6, 8 ], [ 3, 6, 9 ], [ 3, 6, 10 ],
//   [ 3, 7, 8 ], [ 3, 7, 9 ], [ 3, 7, 10 ]
// ]
```

- util.copy(obj)

```js
const obj = {
  a: {
    b: "A",
  },
};
const clone = util.copy(obj);
clone.a.b = "B";
// obj: { a: { b: "A" } }
// clone: { a: { b: "B" } }
```

- util.group(obj, key)

```js
const arr = [
  { name: "john", age: 10 },
  { name: "john", age: 15 },
  { name: 1, age: 10 },
  { name: {}, age: 9 },
  { name: [], age: 9 },
  { name: true, age: 9 },
];
const key = "name";
const res = util.group(arr, key);
// {
//   '1': [ { name: 1, age: 10 } ],
//   john: [ { name: 'john', age: 10 }, { name: 'john', age: 15 } ],
//   '[object Object]': [ { name: {}, age: 9 } ],
//   '': [ { name: [], age: 9 } ],
//   true: [ { name: true, age: 9 } ]
// }
```

- util.query(obj, qry)

```js
const obj = {
  name: "John",
};

const qry = {
  name: {
    $eq: "John",
  },
};

const res = util.query(obj, qry);
// true
```

- util.contain(src, dst)

```js
const src = { width: 5, height: 10 };
const dst = { width: 20, height: 20 };
const res = util.contain(src, dst);
// { width: 10, height: 20 }
```

- util.cover(src, dst)

```js
const src = { width: 5, height: 10 };
const dst = { width: 20, height: 20 };
const res = util.cover(src, dst);
// { width: 20, height: 40 }
```

- util.wait(delay)

```js
await util.wait(1000); // ms
```

- util.promiseAll(funcs)

```js
let i = 0;
async function a() {
  return i++;
}
const funcs = [a, a, a];
const res = await util.promiseAll(funcs);
// [0,1,2]
```

## References

- [base64](https://github.com/mathiasbynens/base64)
