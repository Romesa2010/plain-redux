// ?fpdoodle=1&doodle=144865315&hl=en&gl=pk&ntp=1&nord=1:1 The key "target-densitydpi" is not supported.
var x = {}
undefined
x.a = 4
4
x.b = 'hello'
"hello"
// x
// {a: 4, b: "hello"}
var c = 'counter'
undefined
// x = ...c
// VM325:1 Uncaught SyntaxError: Unexpected token '...'
x[c] = function(){}
// ƒ (){}
console.log(x)
// VM474:1 {a: 4, b: "hello", counter: ƒ}
undefined
// console.log(x.3
// VM589:1 Uncaught SyntaxError: missing ) after argument list
// console.log(x.3)
// VM598:1 Uncaught SyntaxError: missing ) after argument list
console.log(x.counter)
// VM622:1 ƒ (){}
undefined
console.log(x.c)
// VM680:1 undefined
undefined
console.log(c)
// VM713:1 counter
undefined
console.log(x[c])
// VM818:1 ƒ (){}
undefined
// var d = "p1'
// VM852:1 Uncaught SyntaxError: Invalid or unexpected token
var d = "p1"
undefined
x[c] = {}
// {}
// x
// {a: 4, b: "hello", counter: {…}}
x.counter[d] = x.a
// 4
// x
// {a: 4, b: "hello", counter: {…}}a: 4b: "hello"counter: p1: 4__proto__: Object__proto__: Object
// var 1x = 3
// VM1134:1 Uncaught SyntaxError: Invalid or unexpected token
x['1x'] = 3
    
// 3
// x
// {a: 4, b: "hello", counter: {…}, 1x: 3}
var arr = [1,2,3,4]
undefined
for(let n = 0;n < arr.length;n++){
    x[`${c}_${arr[n]}`] = n ;
}
// 3
// x
// {a: 4, b: "hello", counter: {…}, 1x: 3, counter_1: 0, …}a: 4b: "hello"counter: {p1: 4}1x: 3counter_1: 0counter_2: 1counter_3: 2counter_4: 3__proto__: Object
for(let n = 0;n < arr.length;n++){
console.log(    x[`${c}_${arr[n]}`])
debugger
}
// VM1648:2 0
// VM1648:2 1
// VM1648:2 2
// VM1648:2 3
undefined
for(let n = 0;n < arr.length;n++){
    x[c][`${c}_${arr[n]}`] = n ;
}
// 3
// x
// {a: 4, b: "hello", counter: {…}, 1x: 3, counter_1: 0, …}a: 4b: "hello"counter: p1: 4counter_1: 0counter_2: 1counter_3: 2counter_4: 3__proto__: Object1x: 3counter_1: 0counter_2: 1counter_3: 2counter_4: 3__proto__: Object
var v = "dd"
undefined
for(let n = 0;n < arr.length;n++){
    x[v][`${c}_${arr[n]}`] = n ;
}
//  VM1758:2 Uncaught TypeError: Cannot set property 'counter_1' of undefined
//     at <anonymous>:2:28
// (anonymous) @ VM1758:2
for(let n = 0;n < arr.length;n++){
    x[v] = v[v] || {}
    x[v][`${c}_${arr[n]}`] = n ;
}
// 3
// x
// {a: 4, b: "hello", counter: {…}, 1x: 3, counter_1: 0, …}a: 4b: "hello"counter: {p1: 4, counter_1: 0, counter_2: 1, counter_3: 2, counter_4: 3}1x: 3counter_1: 0counter_2: 1counter_3: 2counter_4: 3dd: {counter_4: 3}__proto__: Object
var a = "aa"
undefined
for(let n = 0;n < arr.length;n++){
    x[a] = v[a] || []
    // x[a].push({`${c}_${arr[n]}`: n});
}
// VM1949:3 Uncaught SyntaxError: Unexpected template string
for(let n = 0;n < arr.length;n++){
    x[a] = v[a] || [];
   
    let obj = {}
     obj[`${c}_${arr[n]}`] = n;
    x[a].push(obj);
}
// 1
// x
// {a: 4, b: "hello", counter: {…}, 1x: 3, counter_1: 0, …}a: 4b: "hello"counter: {p1: 4, counter_1: 0, counter_2: 1, counter_3: 2, counter_4: 3}1x: 3counter_1: 0counter_2: 1counter_3: 2counter_4: 3dd: {counter_4: 3}aa: [{…}]0: {counter_4: 3}counter_4: 3__proto__: Objectlength: 1__proto__: Array(0)__proto__: Object
for(let n = 0;n < arr.length;n++){
    x[a] = x[a] || [];
   
    let obj = {}
     obj[`${c}_${arr[n]}`] = n;
    x[a].push(obj);
}
// 5
// x
// {a: 4, b: "hello", counter: {…}, 1x: 3, counter_1: 0, …}a: 4b: "hello"counter: {p1: 4, counter_1: 0, counter_2: 1, counter_3: 2, counter_4: 3}1x: 3counter_1: 0counter_2: 1counter_3: 2counter_4: 3dd: {counter_4: 3}aa: Array(5)0: {counter_4: 3}1: {counter_1: 0}2: {counter_2: 1}3: {counter_3: 2}4: {counter_4: 3}length: 5__proto__: Array(0)__proto__: Object