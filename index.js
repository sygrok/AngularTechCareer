///////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////
// ES5
"use strict";

// "use strict";
// String Access
// multiline
// Date.now();
// trim();
// JSON.stringfy()
// JSON.parse()
// ForEach()
// Map()
// Filter
// Reduce()
// ReduceRight()
// indexOf()
// lastIndexOf()
// every()
// some()
// getter and setter

// VOCABULARY
let str = () => {
  const value = "EcmaScript Öğreniyorum! ";
  return value;
};

// ARRAY
let array = () => {
  const value = [1, 2, 3, 4, 5, 6];
  return value;
};

// OBJECT
let person = () => {
  const value = {
    name: "Berkay",
    surname: "Anduv",
    number: 67,
    isLogin: true,
  };
  return value;
};

// 1- ES5(2009) "use strict";

// 2- ES5(2009) String Access
let stringAccessFunction = () => {
  let data = str();
  console.log(data);
  console.log(data.charAt(0));
  console.log(data[0]);
};
//stringAccessFunction()

//3- ES5(2009) multiline
let multilineFunction = () => {
  let value = "1.satır\n2.satır\n3.satır";
  console.log(value);

  let value2 = `
  1.satır
  2.satır
  3.satır
  `;
  console.log(value2);
};
//multilineFunction()

//4- ES5(2009) Date.now();
let dateNowFunction = () => {
  let currentTimeMillis = Date.now();
  console.log(currentTimeMillis);
};
//dateNowFunction()

//4- ES5(2009) trim();
let trimFunction = () => {
  let data = str();
  console.log(data);
  console.log(data.length);
  console.log(data.trim());
  console.log(data.trim().length);
};
// trimFunction();

// 6-7- ES5(2009) JSON.stringfy() JSON.parse()
let JsonFunction = () => {
  let data = person();
  let stringData = JSON.stringify(data);
  console.log(stringData);
  let stringParse = JSON.parse(stringData);
  console.log(stringParse);
};
//JsonFunction()

// 8-9-10- ES5(2009) ForEach() Map() Filter()
// forEach: Void dönderir
// map    : Dizi Dönderir
let mapFilterForeachFunction = () => {
  let data = array();
  console.log(data);
  data.forEach((response) => {
    console.log(response * 2);
  });
  console.log("*******");

  let mapData = data.map((response) => {
    return response * 2;
  });
  console.log(mapData);
  console.log("*******");

  let filterData = data.filter((response) => {
    return response % 2 === 0;
  });
  console.log(filterData);
  console.log("*******");
};
// mapFilterForeachFunction();

// ForEach()
// Map()
// Filter
// Reduce()
// ReduceRight()
// indexOf()
// lastIndexOf()
// every()
// some()
// getter and setter

///////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////
// ES6

///////////////////////////////////////////////////////////////
// Callback Function (ES6)
// Promise(ES7)
// asyc-await(ES8)

///////////////////////////////////////////////////////////////
// Typescript

///////////////////////////////////////////////////////////////
// Zamanımız oldukca one page projesine başla
// worker ()
// Typescript
// Angular
// nodejs
// docker
// mockapi
// AJAX (jQuery)
