// 1. Що буде виведено у консоль ?
// console.log(10 >= "7");
// console.log("2" > "12");
// console.log("2" < "12");
// console.log(1 == true);
// console.log(1 === true);
// console.log("4" == 4);
// console.log("6" === 6);
// console.log("false" === false);
// console.log("0" == false);
// console.log("0" === false);
// console.log("Papaya" < "papaya");
// console.log("Papaya" === "papaya");
// console.log(undefined == null);
// console.log(undefined === null);

// ----------------------------






// ------------------------------------


// function makeTransaction(pricePerDroid, orderedQuantity, customerCredits) {
//     let message;
//     // Change code below this line
//     let totalPrice = pricePerDroid * orderedQuantity;
//     if (totalPrice > customerCredits) {
//       message = `Insufficient funds!`;
//     } else {
//       customerCredits -= totalPrice;
//       message = `You ordered  ${orderedQuantity} droids, you have ${customerCredits} credits left.`;
//     }
  
//     // Change code above this line
//     return message;
    
//   }

//   console.log(makeTransaction(3000, 5, 23000));
//   console.log(makeTransaction(1000, 3, 15000));
//   console.log(makeTransaction(5000, 10, 8000));
//   console.log(makeTransaction(2000, 8, 10000));
//   console.log(makeTransaction(500, 10, 5000));
//   console.log(message);
  

// function calcRectArea(width, height) {
//     return width * height;
//   }
  
//   console.log(calcRectArea(5, 6));
  // Expected output: 30

// function makeOrderMessage(orderedQuantity, pricePerDroid, deliveryFee) {
//     // Change code below this line
//     const totalPrice = orderedQuantity * pricePerDroid + deliveryFee;
//     const message = `You ordered droids worth ${totalPrice} credits.
//   Delivery (${deliveryFee} credits) is included in total price.`;
  
//     // Change code above this line
//     return message;
//   }

//   console.log(makeOrderMessage(10, 70, 200));
  

/*
2. Використовуючи конструкцію if...else та prompt, напиши код, який 
  запитуватиме: 'Який стандарт мови JavaScript?'. Якщо користувач вводить
  ECMAScript, то показуй alert з рядком 'Вірно!', інакше - 'Не знаєте? ECMAScript!'
*/
// const message = prompt("Який стандарт мови JavaScript?");
// console.log(message);
// if (message === "ECMAScript") {
//   alert("Вірно!");
// } else {
//   alert("Не знаєте? ECMAScript!");
// }
/*
  3. Напиши скрипт, який приводить у консоль рядок 'Це додатнє число', якщо
  в prompt користував ввів число більше за нуль. Якщо було введено нуль,
  виводь у консоль рядок 'Це нуль'. Якщо передали від'ємне число, у консолі
  має бути рядок 'Це від`ємне число'
*/
// const number = Number(prompt(`Write your number`));
// if (number > 0) {
//   console.log("Це додатнє число");
// } else if (number === 0) {
//   console.log("Це нуль");
// } else {
//   console.log("Це від`ємне число");
// }


// function isAdult(age) {
    // Change code below this line

  
    // const passed = age >= 18;
    // console.log(passed);

    // Change code above this line
//     return passed;
//   }


//   console.log(isAdult(18));



/*
  4. Напиши скрипт, який перевіряє чи закінчується значення змінної link
  символом '/'. Якщо ні, додай у кінець посилання цей символ  
*/
// let link = "https://instagram.com/andrii_shevchukk";
// if (!link.endsWith("/")) {
//   link += "/";
// }
// console.log(link);
/*
  5. Напиши скрипт для відображення дедлайну - часу здачі проєкту. Використовуй
  конструкцію switch...case
  Якщо до дедлайну 0 днів - виведи рядок 'Cьогодні'
  Якщо до дедлайну 1 день - виведи рядок 'Завтра'
  Якщо до дедлайну 2 дні - виведи рядок 'Післязавтра'
  Якщо до дедлайну 3+ днів - виведи рядок 'Можна відпочити :)'
*/
// const deadline = Number(prompt("Write deadline"));
// switch (deadline) {
//   case 0: {
//     console.log(`Сьогодні`);
//     break;
//   }
//   case 1: {
//     console.log(`Завтра`);
//     break;
//   }
//   case 2: {
//     console.log("Післязавтра");
//     break;
//   }
//   default: {
//     console.log("Можна відпочити :)");
//     break;
//   }
// }
/*
  6. Напиши скрипт котрий порахує суму чисел від 1 до 10 та виведе у консоль результат 
  */
// let sum = 0;
// for (let num = 1; num <= 10; num += 1) {
//   console.log(num);
//   sum += num;
// }
// console.log(sum);
/*
  7. Напиши цикл for який виводить у консоль браузера числа за зростанням від
  min дo max, але якщо число кратне 5
*/
// const min = 21;
// const max = 100;
// for (let iteration = min; iteration <= max; iteration += 1) {
//   if (iteration % 5 === 0) {
//     console.log(iteration);
//   }
// }
/*
  8. Напишіть скрипт який порахує скільки на проміжку від from до to було чисел,
  які є кратними 7
*/
// const from = 1;
// const to = 30;
// let count = 0;
// for (let i = from; i <= to; i += 1) {
//   if (i % 7 === 0) {
//     console.log(i);
//     count += 1;
//   }
// }
// console.log(count);
/* 
  9. Напишіть скрипт для світлофора, де користувач може ввести назву кольору
  у prompt і в залежності від того який був введений колір відображатимуться
  різні повідомлення через alert. Використовуй конструкцію switch case
  
  red - 'STOP!!!!'
  green - 'GO!'
  yellow - 'Wait a little!'
*/
// const color = prompt(`Write your color`).toLowerCase();
// console.log(color);
// switch (color) {
//   case "red":
//     alert("STOP!!!!");
//     break;
//   case "green":
//     alert("GO!");
//     break;
//   case "yellow":
//     alert("Wait a little!");
//     break;
//   default:
//     break;
// }
/*
  10. Напиши скрипт який буде просити нас ввести число більше за 100, доки
  ми таке не введемо
    
  Скористайся циклом while
*/
//   number = Number(prompt("Write your number bigger than 100"));
// while (number < 100) {
//   number = Number(prompt("Write your number bigger than 100"));
// }

// for (
//   let num = Number(prompt("Write your number bigger than 100"));
//   num > 100;
//   num < 100;
//   num = Number(prompt("Write your number bigger than 100"))
// ) {}

// function checkForSpam(message) {
//   const result =
//     message.toLowerCase().includes("spam") ||
//     message.toLowerCase().includes("sale")
//       ? true
//       : false;
//   return result;
// }
// function checkForSpam(message) {
//   if (
//     message.toLowerCase().includes("spam") ||
//     message.toLowerCase().includes("sale")
//   ) {
//     return true;
//   } else {
//     return false;
//   }
// }
