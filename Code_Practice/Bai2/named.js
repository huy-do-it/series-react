//Cách 1: Khai báo hàm, biến, class rồi expert
// const myvar = 10;

// function myfun(){
//     console.log("Hello, đây là hàm myfun");
// }

// export {myvar, myfun};

//Cách 2: Khai báo và export luôn
export const myvar = 10;

export function myfun(){
    console.log("Hello, đây là hàm myfun");
}

//file có 1 export default
let df2 = "This is another default export in named.js";
export default df2;