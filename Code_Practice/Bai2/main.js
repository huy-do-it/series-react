//1. lấy 1 phần tử cần thiết
// import { myvar } from "./named.js";
// console.log("this is my var:", myvar);

//2. Lấy nhiều phần tử cùng lúc
// import { myfun, myvar } from "./named.js";
// console.log(myvar);
// myfun();

//3. Lấy tất cả các phần tử trong file
import * as mymodule from "./named.js";
console.log(mymodule.myvar);
mymodule.myfun();
// console.log(mymodule.df2);

import df2 , {myvar, myfun} from "./named.js";
console.log("Default export from named.js:", df2);

//4. Lấy default export
// import df from from "./default.js";
// console.log("Default export:", df);

// import total from "./default.js";
// console.log("Default export Total:", total(5, 10));

//5. đổi tên khi import
//5.1 đổi tên default export
import yourvar from "./default.js";
console.log("Renamed default export:", yourvar(20, 30));
//5.2 đổi tên named: đặt tên với từ khóa as
import { myvar as tenVar, myfun as tenFun } from "./named.js";
console.log("Renamed myvar:", tenVar);
tenFun();