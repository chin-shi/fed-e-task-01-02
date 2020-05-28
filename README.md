# 模块二

## 简答题

### 第一题：描述引用计数的工作原理和优缺点

### 第二题：描述标记整理算法的工作流程

### 第三题：描述 V8 中新生代存储区垃圾回收的流程

### 第四题：描述增量标记算法在何时使用及其工作原理

## 代码题一

### 练习1：

使用函数组合fp.flowRight()重新实现下面这个函数

```js
let isLastTnStock = function (cars) {
  //获取最后一条数据
  let last_car = fp.last(cars)
  //获取最后一条数据的in_stock属性值
  return fp.prop(" in_stock", last_car)
}
```

**答案代码**

```js
// 重新实现
const isLastTnStock = fp.flowRight(fp.prop('in_stock'), fp.last)
```

### 练习2:

使用 fp.flowRight()、fp.prop()和 fp.first()获取第一个 car 的 name

**答案代码**

```js
const getFirstName = fp.flowRight(fp.prop('name'), fp.first)
```

### 练习3：

使用帮助函数_average重构averageDollarValue,使用函数组合的方式实现

```js
let _average = function (xs) {
  return fp.reduce(fp.add, 0, xs) / xs.length;
} // <-无须改动

let averageDollarValue = function (cars) {
  let dollar_values = fp.map(function (car) {
    return car.dollar_value
  }, cars)
  return _average(dollar_values)
}
```

**答案代码**

```js
const averageDollarValue = fp.flowRight(_average, fp.map(car => car.dollar_value))
```

### 练习4：

使用 flowRight 写一个 sanitizeNames()函数，返回一个下划线连接的小写字符串，把数组中的name转换为这种形式：例如：sanitizeNames(["Hello World"]) => [ "hello_world"]

```js
let _underscore = fp.replace(/\W+/g); // <--无须改动，并在 sanitizeNames中使用它
```

**答案代码**

```js
const sanitizeNames = fp.map(fp.flowRight(_underscore('_'), fp.toLower, car => car.name))
```

## 代码题二

### 练习1：

使用fp.add(x, y)和fp.map(f, x)创建一个能让functor里的值增加的函数exl

```js
const fp = require("lodash/fp")
const { Maybe, Container } = require("・/support")

let maybe = Maybe.of([5, 6, 1])
let exl = () => {} // ...你需要实现的位置
```

**答案代码**

```js
let exl = x => maybe.map(fp.map(fp.add(x)))
```

### 练习2：

实现一个函数ex2,能够使用fp.first获取列表的第一个元素

```js
let xs = Container.of(["do", "ray", "me", "fa", "so", "la", "ti", "do"]);
```

**答案代码**

```js
let ex2 = () => xs.map(fp.first);
console.log(ex2()._value);
```

### 练习3：

实现一个函数ex3, 使用safeProp和fp.first找到user的名字的首字母

```js
let safeProp = fp.curry(function (x, o) {
  return Maybe.of(o[x]);
});
let user = { id: 2, name: "Albert" };
let ex3 = () => {}; // ...你需要实现的位置
```

**答案代码**

```js
let ex3 = (property, target) => safeProp(property, target).map(fp.first);
console.log(ex3("name", user)._value);
```

### 练习4：

使用Maybe重写ex4,不要有if语句

```js
let ex4 = function (n) {
  if (n) {
    return parseInt(n)
  }
}
```

**答案代码**

```js

```





