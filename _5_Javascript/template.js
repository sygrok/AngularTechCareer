// Single Comment JS
/*Multiple Comment */
// console.log('console.log');
// console.info('console.info');
// console.warn('console.warn');
// console.error('console.error');

// pop-up
// alert('pop-up');
// document.writeln('document.writeln');

/////////////////////////////////////////////////
// Variable (Global State)
// var $_degiskenAdi44="Js öğreniyorum";
// console.log($_degiskenAdi44);
// var $_degiskenAdi44="Js öğreniyorum";
// console.log($_degiskenAdi44);

// // Hoisting
// deneme="Kalem";
// var deneme;
// console.log(deneme);

// // 2015 (ES6)
// // LET
// let data1="let data";
// console.log(data1);
// data1="let data44";
// console.log(data1);

// // CONST
// const data2="Js öğreniyorum";
// console.log(data2);
// data2="Js öğreniyorum";
// console.log(data2);

/////////////////////////////////////////////////
// Operator Functions
// Aritmetik Operatörler
// + - * / %
// &&=VE ||=VEYA !=değil
// > >= < <=
// kullanıcıdan aldığım 2 tane sayıyı toplama yapan bir uygulama
// let number1,number2,sum=0;
//  number1=Number(prompt("Lütfen 1.sayıyı giriniz"));
//  number2=Number(prompt("Lütfen 2.sayıyı giriniz"));
//  sum=number1+number2;
//  console.log("Toplama: "+sum);
//  console.log(typeof prompt("Lütfen 1.sayıyı giriniz"));
//  console.log(typeof Number(prompt("Lütfen 2.sayıyı giriniz")));
//  console.log(typeof parseInt(prompt("Lütfen 2.sayıyı giriniz")));

/////////////////////////////////////////////////
// NaN
// console.log(4 / 4);
// console.log(4 / "4");
// console.log(4 / "abc");

// // Infinity
// console.log(0 / 5);
// console.log(5 / 0);

// New  : Doğmak
// Null : Vefat
// Zero : 0
// isNaN :
// console.log(isNaN(4 / 4));
// console.log(!isNaN(4 / 4));

// // Undefined
// let data3;
// console.log(data3);
// // undefined : değer hiç verilmemiş
// // null      : değer verilmiş ancak biz bilerek bu değeri,değersiz vermek için

// // Escape Character
// console.log("Data \"söz\"");
// console.log("Data 'söz'");
// console.log("Data \n\r\t\"söz\"");
/////////////////////////////////////////////////

// Math
// console.log(Math.PI);
// console.log(Math.E);
// console.log(Math.sqrt(25));
// console.log(Math.pow(2, 5));
// console.log(2 ** 5);
// console.log(Math.abs(-10));
// console.log(Math.floor(4.9));
// console.log(Math.ceil(4.1));
// console.log(Math.round(9.4));
// console.log(Math.round(9.5));
// console.log(Math.min(100, 500, -9));
// console.log(Math.max(100, 500, -9));
// console.log(Math.sin(1));
// console.log(Math.cos(1));

//// MATH ÖDEVİ
// Math Ödev
// Kullanıcıda tarafından aldığımız 2 tane sayının (prompt)
// let number1 = prompt("Sayı1");
// let number2 = prompt("Sayı2");
// s1-) Bu sayılardan en küçüğü nedir ? (min)
// console.log(Math.min(number1, number2));
// // s2-) Bu sayılardan en büyüğü nedir ? (max)
// console.log(Math.max(number1, number2));
// // s3-) Bu sayılardan en büyüğü karekökü nedir ? (sqrt(max))
// console.log(Math.sqrt(Math.max(number1, number2)));
// // s4-) Bu sayılardan en büyüğü karekökünün üste yuvarlıyalım nedir ? (ceil(sqrt(max)))
// console.log(Math.ceil(Math.sqrt(Math.max(number1, number2))));
// // s5-) Bu sayılardan en küçüğü mutlak değeri nedir ? (abs(min))
// console.log(Math.abs(Math.min(number1, number2)));
// // s6-) Bu sayılardan en küçüğü alt taban en büyüğü üst taban şeklinde üstünü alalım(pow(min,max))
// console.log(Math.pow(Math.min(number1, number2), Math.max(number1, number2)));

// Örnek: Aşağıdaki örnekleri math ile çözelim ?
// -5.9 sayıyının aşağıdaki işlemleri yaptıralım ?
// 1-mutlak değeri alsın 5.9 (Math.abs)
// console.log(Math.abs(-5.9));
// // 2-yukarı yuvarlama yapsın  6.0 (Math.ceil)
// console.log(Math.ceil(5.9));
// // 3-karesini alsın 36.00 (Math.pow(sayı,2))
// console.log(Math.pow(6, 2));
// // 4-çıkan sayının karekökü alsın (Math.sqrt(sayı))
// console.log(Math.sqrt(36));
// // 6-)çıkan sonucu 5 bölsün 6/5=1
// console.log(6 / 5);
// // 7-) iki sayı arasından karşılaştırma yapsın en küçüğünü alsın ve 1 ve 5 ?
// // 8-) küçük sayı eğer tekse 3 eklesin çiftse 5 eklesin?

/////////////////////////////////////////////////
// Sayısal İşlemler
// let number=44;
// number=44.4252;
// console.log(number);
// console.log("Number: "+ Number(number));
// console.log("parseInt: "+parseInt(number));
// console.log("parseFloat: "+parseFloat(number));
// // NaN
// // isNaN
// console.log(typeof number);

// let bilimsel1=1400000;
// console.log(bilimsel1);

// let bilimsel2=14E+5;
// console.log(bilimsel2);

// let bilimsel3=14E-5;
// console.log(bilimsel3);

// // binary(2)
// let binary=0b01010;
// console.log(binary);

// // octal(8)
// let octal=0o7523;
// console.log(octal);

// // hexadecimal(16) 0123456789abcdef
// let hexadecimal=0xff09;
// console.log(hexadecimal);

// const number2=56.123456789;
// console.log(number2);
// console.log(typeof number2);
// console.log(number2.toFixed(3));
// console.log(number2.toPrecision(3));

/////////////////////////////////////////////////
// Metinsel işlemler

// let number1=455
// let number2=455.41;
// let str="455.41";
// let bol=true;

// let vocabulary = "js ÖĞReniyorum js ";
// console.log(vocabulary);
// console.log(vocabulary.length);
// console.log(vocabulary.trim().length);

// console.log(vocabulary.toLowerCase());
// console.log(vocabulary.toUpperCase());

// console.log(vocabulary.substring(5));
// console.log(vocabulary.substring(5, 8)); // 5<=X<=8-1

// console.log(vocabulary.charAt(0));
// console.log(vocabulary.indexOf("js"));
// console.log(vocabulary.lastIndexOf("js"));
// console.log(vocabulary.includes("js"));

// console.log(vocabulary.replace("js", "javascript"));
// console.log(vocabulary.concat("-sona"));
// console.log(vocabulary + "-sona");

// console.log(vocabulary.startsWith("js"));
// console.log(vocabulary.endsWith("js"));

// ÖDEV // kullanıcı tarafından girilen bir kelimenin (prompt)
// let userData = prompt("Lütfen bir kelime giriniz");
// console.log(userData);
// // S-1) Kaç karakterlidir ? (length)
// console.log(userData.length);
// // S-2) boşluklar alınarak Kaç karakterlidir ? (trim)
// console.log(userData.trim().length);
// // S-3) bütün kelimeyi küçük harfle göstermek ? (toLowerCase())
// console.log(userData.toLowerCase());
// // S-4) bütün kelimeyi büyük harfle göstermek ? (toUpperCase())
// console.log(userData.toUpperCase());
// // S-5) Kullanıcıdan alınan ilk kelimeyle , "javascript" kelimeyle değiştirin. (replace, substring, ş)
// // console.log(userData.replace("xxxxxxx"),"javascript");
// console.log(userData.replace(userData.split(" ")[0], "javascript"));

// // console.log(userData.replace(userData.substring(0,userData.indexOf(" ")),"javascript"));
// // S-6) yazdığınız kelimede "javascript ile mi başlıyor" ? (startsWith())
// console.log(userData.startsWith("javascript"));
// // S-7) yazdığınız kelimede "javascript ile mi bitiyor" ? (endsWith())
// console.log(userData.endsWith("javascript"));
// // S-8) ilk harf nedir  ? (charAt())
// console.log(userData.charAt(0));
// // S-9) girdiğiniz kelimenin sonuna "-ben js öğreniyorum" (concat())
// console.log(userData.concat("-ben js öğreniyorum"));
// // S-10) girdiğiniz 0 ile 4 arasındaki indexi ekranda gösterin? (subString())
// console.log(userData.substring(0, 4));
///////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////
// Function
// // 1 parametresizReturnsuzas
// function parametresizReturnsuz() {
//   console.log("parametresiz Returnsuz");
// }
// parametresizReturnsuz();

// // 2 parametreliReturnsuz
// function parametreliReturnsuz(number) {
//   console.log("parametreli Returnsuz " + Math.sqrt(number));
// }
// parametreliReturnsuz(25);

// // 3 parametresizReturnlu
// function parametresizReturnlu() {
//   return Math.pow(2, 5);
// }
// let data3 = parametresizReturnlu();
// console.log(data3);

// // 4 parametreliReturnlu
// function parametreliReturnlu(alt, ust) {
//   return Math.pow(alt, ust);
// }
// let data4 = parametreliReturnlu(2, 5);
// console.log(data4);

///////////////////////////////////////////////////////////////
// Immedia Function
// (function () {
//   console.log("Immedia Function Anonymous");
// })();

// (() => {
//   console.log("Immedia Function Arrow");
// })();

// // Function
// function normFuction() {
//   console.log("normFuction");
// }
// normFuction();

// // Anonymous Function
// let anonymousfunction = function () {
//   console.log("anonymous function");
// };
// anonymousfunction();

// // Arrows Function
// let arrowfunction = (data) => {
//   console.log("arrow function " + data);
// };
// arrowfunction("asd");

// ///////////////////////////////////////////////////////////////
// // Conditional
// let conditional = (data) => {
//   let number = 5;
//   if (number > 0) {
//     console.log("pozitiftir");
//   } else console.log("negatif");
// };
// //
// conditional();
// //
// let ternary = (data) => {
//   let number = 5;
//   const result = number > 0 ? "pozitiftir" : "negatif";
//   console.log(result);
// };
// ternary();
//
// Conditional
// let conditional2 = (data) => {
//   let number = Number("5");
//   if (number == 0) {
//     console.log("0");
//   } else if (number == 1) {
//     console.log("1");
//   } else if (number == 2) {
//     console.log("2");
//   } else if (number == 3) {
//     console.log("3");
//   } else if (number === 4) {
//     console.log("4");
//   } else if (number == 5) {
//     console.log("5");
//   } else {
//     console.log("1<=X<=5 dışında");
//   }
// };
// conditional2();
// //
// let conditional3 = (data) => {
//   let number = parseInt(Number("4"));
//   switch (number) {
//     case 0:
//       console.log("0");
//       break;
//     case 1:
//       console.log("1");
//       break;
//     case 3:
//       console.log("3");
//       break;
//     case 2:
//       console.log("2");
//       break;
//     case 4:
//       console.log("4");
//       break;
//     case 5:
//       console.log("5");
//       break;
//     default:
//       console.log("1<=X<=5 dışında");
//       break;
//   }
// };
// conditional3();
//
///////////////////////////////////////////////////////////////
// Loop
// let forLoop = () => {
//   for (let i = 1; i <= 5; i++) {
//     window.document.writeln("i: " + i + "<br/>");
//   }
// };
// forLoop();
// window.document.writeln("*************** <br/>");

// let whileLoop = () => {
//   let i = 1;
//   while (i <= 5) {
//     window.document.writeln("i: " + i + "<br/>");
//     i = i + 1;
//   }
// };
// whileLoop();

// window.document.writeln("*************** <br/>");
// let doWhileLoop = () => {
//   let i = 1;
//   do {
//     window.document.writeln("i: " + i + "<br/>");
//     i = i + 1;
//   } while (i <= 5);
// };
// doWhileLoop();

///////////////////////////////////////////////////////////////
// Exception Handling
const exception = () => {
  try {
    alertx("Alert");
  } catch (err) {
    console.error(err);
    // throw
    // throw new Error("zorunlu istisna yaptım");
  } finally {
    console.log("Ekranda göster Mutlaka");
  }
  console.log("son satır");
};
// exception();

// throw new Error("zorunlu is"); //throw new error sonrası yazılan kod çalışmaz

///////////////////////////////////////////////////////////////
// debug
// debugger
// let debug = () => {
//   for (let i = 1; i <= 5; i++) {
//     //window.document.writeln("i: "+i+"<br/>");
//     console.log("i: " + i + "<br/>");
//   }
// };
// debug();

///////////////////////////////////////////////////////////////

// setTimeout()
let setTimeOutFunction = () => {
  setTimeout(() => {
    console.log("setTimeout");
  }, 1000);
};
// setTimeOutFunction();
// setInterval()
let setintervalFunction = () => {
  setInterval(() => {
    console.log("setInterval");
  }, 1000);
};
//  setintervalFunction()

//
let setTimeoutAndIntervalFunction = () => {
  const clockData = () => {
    console.log("1.saniye");
  };

  let intervalID = setInterval(clockData, 1000);

  const time = parseInt(3);
  setTimeout(() => {
    clearInterval(intervalID);
    console.log(time + "zaman doldu");
  }, 1 * 1000 * time);
};
// setTimeoutAndIntervalFunction();

// call back function
const callBackFunction = () => {
  // 1.Function
  let birinci = (data) => {
    return data + 5;
  };

  // 2.Function
  let ikinci = (xyz) => {
    //let userData=  parseInt(prompt("Lütfen bir sayı giriniz"));
    let userData = 25;
    const result = xyz(userData);
    console.log(result);
  };
  ikinci(birinci);
};
// callBackFunction();

// promise
const promiseFunction = () => {
  const isLogin = true;
  const isCreated = 201;
  let pro = new Promise((resolve, reject) => {
    if (isLogin && isCreated == 201) resolve("olumlu sonuç");
    else reject("olumsuz sonuç");
  })
    .then((result) => {
      // new Promise eğer sonuç geldiyse then çalışsın
      console.log("Then", result);
    })
    .catch(() => {
      // new Promise eğer sonuç olumsuzsa catch çalışsın
      console.error("catch");
    });
  console.log(pro);
};
// promiseFunction();

///////////////////////////////////////////////////////////////

// Diziler
// let fruits = ["apple", "orange", "watermelon", "cucumber"];

// //push function
// fruits.push("tomato");
// fruits.forEach((item) => {
//   console.log(item);
// });

// //slice function
// let slicedFruit = fruits.slice(0, 2);

// slicedFruit.forEach((item, index) => {
//   console.log(index, item);
// });

// //concat function

// let concatFruit = fruits.concat(["banana", "mango"]);

// concatFruit.forEach((item, index) => {
//   console.log(index, item);
// });

let arrayFunction = () => {
  let array = [4, 1, 5, 2, 9, 7, 3, 6];
  console.log(array);
  console.log("Eleman sayısı: " + array.length);
  console.log(array[0]);
  console.log(array[7]);
  console.log(array[7 - 1]);
  array[8] = 44;
  console.log(array);
  console.log(array[array.length - 1]);
};
//arrayFunction();

let arrayFunction2 = () => {
  let array = [4, 1, 5, 2, 9, 7, 3, 6];
  // Ödev: 1-9 arasında  rastgele 8 tane sayı  üreten algoritma
  return array;
};

let arrayFunction3 = () => {
  let array = arrayFunction2();

  // For
  for (let i = 0; i < array.length; i++) {
    document.writeln(array[i]);
  }

  // FOR ...IN
  document.writeln("<br/>*******************************<br/>");
  array.push(23);
  for (let data in array) {
    document.writeln(data + "=> " + array[data] + "<br/>");
  }

  // FOR ... OF
  document.writeln("<br/>*******************************<br/>");
  array.unshift(50);
  for (let data of array) {
    document.writeln(data);
  }

  // FOREACH
  document.writeln("<br/>*******************************<br/>");
  array.pop();
  array.forEach((value, index, array) => {
    document.writeln(`${value} `);
  });

  // FOREACH
  document.writeln("<br/>*******************************<br/>");
  array.shift();
  array.forEach((value, index, array) => {
    document.writeln(`${value} `);
  });

  //// SORT
  document.writeln("<br/>*******************************<br/>");
  array.sort().forEach((value) => {
    document.writeln(`${value} `);
  });

  //// REVERSE
  document.writeln("<br/>*******************************<br/>");
  array.reverse().forEach((value) => {
    document.writeln(`${value} `);
  });
};
// arrayFunction3();

let arrayFunction4 = () => {
  let array = arrayFunction2();
  delete array[0];
  console.log(array);
};
// arrayFunction4();

let arrayFunction5 = () => {
  let array = arrayFunction2();

  //to string
  let arrayString = array.toString();
  console.log(arrayString);

  //join
  let arrayDaa = array.join("-");
  console.log(arrayDaa);

  //
};
// arrayFunction5();

let arrayFunction6 = () => {
  let array = arrayFunction2();

  //Slice
  let sliceArray = array.slice(2);
  console.log(sliceArray);

  let sliceArray2 = array.slice(0, 2);
  console.log(sliceArray2);
};
// arrayFunction6();

let arrayFunction7 = () => {
  let array = arrayFunction2();
  console.log(array);

  // slice (Original Array'i bozmaz)
  // splice (Original Array'i bozar)
  // Diziyi String'e çevirir

  // Splice
  // array.splice(0,2);
  // console.log(array);

  // array.splice(2,3);
  // console.log(array);

  // 0: başlama indexi
  // 2: çıkarma
  // array.splice(0,3);
  // console.log(array);

  // 2: Başlama indexi
  // 0: Ekleme
  // 2,3: eklenecek sayılar
  array.splice(2, 0, 2, 3);
  console.log(array);
};
// arrayFunction7();

//Filter & MAP
let arrayFunction8 = () => {
  let array = arrayFunction2();
  array.sort();
  console.log(array);

  // array
  //   .filter((response) => {
  //     return response >= 5;
  //   })
  //   .forEach((value) => {
  //     console.log(`${value} `);
  //   });

  //  filter<S extends T>(predicate: (value: T, index: number, array: T[]) => value is S, thisArg?: any): S[];
  //    let mapResult= array.map((response) => {
  //         return response = response * 2;
  //     });
  //     console.log(mapResult);

  //     mapResult.forEach(value => {
  //         console.log(`${value} `);
  //     });

  // Her bir değişkendeki sadece çift olan sayıları alın (filter)
  // sonrasında bu sayılara 5 ekleyin (map)
  // sonrasında bu sayıları ekranda gösterin (forEach)
  array
    .filter((response) => {
      return response % 2 == 0;
    })
    .map((response) => {
      return (response += 5);
    })
    .forEach((value) => {
      console.log(`${value}`);
    });
};
// arrayFunction8();

///////////////////////////////////////////////////////////////
// LocalStorage
// localStorage.setItem("name", "Berkay");
// const item1 = localStorage.getItem("test1");
// console.log(item1);

// localStorage.removeItem("name");

// localStorage.clear();

///////////////////////////////////////////////////////////////
// Object
const student = {
  name: "Ahmet",
  age: 25,
  job: "Frontend Developer",
  language: {
    name: "Turkish",
    proficiency: "Native",
  },
  testF: function () {
    console.log("deneme");
  },
};

console.log(
  `Merhaba ben ${student.name}, ${student.age} yaşındayım ve ${student.job} olarak çalışıyorum.`
);

console.log(student);
console.log(student.name);
console.log(student.language.proficiency);
student.testF();
///////////////////////////////////////////////////////////////
// Callback Function (ES6)
// Promise(ES7)
// asyc-await(ES8)

///////////////////////////////////////////////////////////////
// DOM
// select element
// const myMain = document.getElementById("main");

//create element
// const pharagraph1 = document.createElement("p");
// pharagraph1.textContent = "This pharaprah is created with dom";

//adding elemt

// myMain.appendChild(pharagraph1);

///////////////////////////////////////////////////////////////
// ES5
// ES6

///////////////////////////////////////////////////////////////
// Zamanımız oldukca one page projesine başla
// worker ()
// Typescript
// Angular
// nodejs
// docker
// mockapi
// AJAX (jQuery)
