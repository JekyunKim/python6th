var num1 = 20;
var num2 = 10;
var num3 = "10";
var num4 = 20;
var num5 = 15;

console.log('일반 크기비교')
console.log(num1 > num2, num1, '>', num2);
console.log(num1 >= num2, num1, '>=', num2);
console.log(num1 < num2, num1, '<', num2);
console.log(num1 <= num2, num1, '<=', num2);

console.log('같은지 여부 확인')
console.log(num1 == num4, num1, '==', num4);
console.log(num1 != num4, num1, '!=', num4);

console.log('===') // Type까지 비교
console.log(num1 === num3, num1, '===', num3);
console.log(num2 === num3, num2, '===', num3);
console.log(num2 == num3, num2, '==', num3);

console.log('num1 > num2 && num1 < num5: ',num1 > num2 && num1 < num5);
console.log('num1 > num2 || num1 < num5: ',num1 > num2 || num1 < num5);
console.log('num1 > num2 && !(num1 < num5): ',num1 > num2 && !(num1 < num5));



//var cels = parseFloat(prompt("섭씨 입력: "));
//var farn = cels * (9 / 5) + 32;
//
//document.write("화씨 : " + farn);

//var base = parseFloat(prompt("밑변 입력: "));
//var height = parseFloat(prompt("높이 입력: "));
//
//var area = base * height * 0.5 ;
//
//document.write("삼각형의 넓이 : " + area);

//var num1 = parseInt(prompt("Enter first number: "));
//var num2 = parseInt(prompt("Enter second number: "));
//var lineBreak = "<br/>";
//
//var result = num1 + num2;
//document.write("the sum is : " + result + lineBreak);
//
//result = num1 - num2;
//document.write("the sub is : " + result + lineBreak);
//
//result = num1 * num2;
//document.write("the multiplication is : " + result + lineBreak);
//
//result = num1 / num2;
//document.write("The division is : " + result + lineBreak);
//
//result = num1 % num2;
//document.write("The remainder is : " + result + lineBreak);

//var num = "20"
//num = num.toString();
//console.log(typeof num);
//
//var number = 20;
//console.log(typeof number);
//
//number = number.toString();
//console.log(number, typeof number);
//
//var x = 2.56789;
//console.log(x.toFixed(1), typeof x.toFixed(1));
//console.log(x.toFixed(2));
//
//console.log(x.toPrecision(1), typeof x.toPrecision(1));
//console.log(x.toPrecision(2));
//
//console.log(Number(true));
//console.log(Number(false));
//console.log(Number("10"));
//console.log(Number("10 "));
//console.log(Number("10.25"));

//var text = prompt("Enter your name: ");
//document.write("Your name: " + text + "<br/>");
//
//var len = text.length;
//document.write("Number of characters : " + len + "<br/>");
//
//document.write(text.charAt(2) + "<br/>")
//
//document.write(text.toUpperCase() + "<br/>");
//document.write(text.toLowerCase() + "<br/>");
//
//var text1 = "hi ";
//var text2 = "bye";
//var text3 = text1.concat(text2);
//document.write(text3 + "<br/>");

//var text4 = "hello";
//var result = text4.slice(0,2);
//document.write(result + "<br/>");

//var lastName = "홍";
//var firstName = "길동";
//
//var fullName = lastName + firstName;
//
//console.log(fullName);
//console.log("Today is" + " a " + "beautiful day");
//console.log("My name is" + fullName);
//
//var num1 = 20;
//var num2 = 30;
//var sum = num1 + num2;
//console.log(num1 + num2);
//console.log("" + num1 + num2);
//console.log(num1 + " + " + num2 + " = " + sum);

//var name = "김제균";
//var age = 27;
//var cgpa = 3.92;
//var lineBreak = "<br/>";
//
//document.write("이름: " + name + lineBreak);
//document.write("나이: " + age + lineBreak);
//document.write("학점: " + cgpa + lineBreak);

//console.log(123, typeof 123);
//console.log(123.5, typeof 123.5);
//console.log("123", typeof "123");
//console.log(true, typeof true);
//console.log(false, typeof false);
//
//var car;
//console.log(car);
//var car = "";
//console.log(typeof car);
//var person = { firstName: "John", lastName: "Doe", age: 50, eyeColor: "blue"};
//console.log(typeof person, person);
//person = null;
//
//console.log(typeof person, person);
//
//document.write("Hello, World");
//document.write("<h1>Welcome to JS Program</h1>");
//document.write("<h2>Welcome to JS Program</h2>");
//
//console.log('Welcome JS Program');
//console.info('Welcome JS Program');
//console.warn('Welcome JS Program');
//console.error('Welcome JS Program');
//
//alert('Welcome JS Program');
//var a = prompt('Welcome JS Program');
//console.log(a);