// 代码题2
// 练习1：
// 使用fp.add(x, y)和fp.map(f, x)创建一个能让functor里的值增加的函数exl

const fp = require('lodash/fp');
const { Maybe, Container } = require('./support');

let maybe = Maybe.of([5, 6, 1]);

let exl = (x) => maybe.map(fp.map(fp.add(x)));
console.log(exl(1));

// 练习2：
// 实现一个函数ex2,能够使用fp.first获取列表的第一个元素

// const fp = require("lodash/fp");
// const { Maybe, Container } = require("./support");

let xs = Container.of(['do', 'ray', 'me', 'fa', 'so', 'la', 'ti', 'do']);

let ex2 = () => xs.map(fp.first);
console.log(ex2()._value);

// 练习3：
// 实现一个函数ex3, 使用safeProp和fp.first找到user的名字的首字母

// const fp = require("lodash/fp");
// const { Maybe, Container } = require("・/support");

let safeProp = fp.curry(function (x, o) {
  return Maybe.of(o[x]);
});
let user = { id: 2, name: 'Albert' };
let ex3 = (property, target) => safeProp(property, target).map(fp.first);
console.log(ex3('name', user)._value);

// 练习4：
// 使用Maybe重写ex4,不要有if语句

// const fp = require("lodash/fp");
// const { Maybe, Container } = require("./support");

let ex4 = function (n) {
  if (n) {
    return parseInt(n);
  }
};

ex4 = (n) => Maybe.of(n).map(parseInt)
console.log(ex4('123'));
