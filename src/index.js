import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

// 浅拷贝：对于数组或者对象，只拷贝数组或者对象本身以及它们的引用，《不拷贝它们所引用的对象的属性值》（修改值会发生改变）
// 深拷贝：拷贝数组或对象所包含的每一层值。（修改值，不会发生改变）

// 在js中，如果数组或者对象只有属性没有方法，则可以JSON进行深拷贝
// var arr1 = [{name:"张三",age:18},{name:"李四",age: 20}];
// var arr2 = JSON.parse(JSON.stringify(arr1));
// console.log(arr2);


// var arr1 = [{name:"张三",age:18,getInfo(){console.log("哈哈")}},{name:"李四",age: 20}];
// var arr2 = [];
// for (var i = 0; i < arr1.length; i++) {
//   arr2[i] = Object.assign({},arr1[i]);
// }
// arr2[0].name = "王五"
// console.log(arr1[0].name);

/*
var arr1 = [{name:"张三",age:18,getInfo(){console.log("abc")}},{name:"李四",age: 20},"哈哈"];
var arr2 = [];
for (var i = 0; i < arr1.length; i++) {
  arr2[i] = deepCopy(arr1[i]);
}
// 利用递归的方法，解决深拷贝
function deepCopy(origin) {
  if (typeof(origin) === "object") {
    var temp = {};
    for (var key in origin) {
      temp[key] = deepCopy(origin[key]);
    }
    return temp;
  } else {
    return origin;
  }
}

// console.log(arr2);
// arr2[0].getInfo()
// console.log(arr1);
*/
