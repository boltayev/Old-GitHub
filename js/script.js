
------- 1- lesson--------

// let firsname = "Elbek" //string
// let surname = "Boltayev" //string

// let age = 26 // number

// let job = "talabaman" // string
// let live = "Shaxrisabz" // string
 
// let stady = "Tatu" // string

// console.log("Mening familiyam" + " " + surname + 
// " " + ", ismim" + " " + firsname + " " + ", yoshim" + " " 
// + age + " " + ", yashash joyim" + " " + live + " " 
// + ", kasbim" + " " + job + " " + ", uqish joyim"
//  + " " + stady);



 ------- 2 - lesson-----------


// let n = 26

// let obj = {
//     name: "elbek",
//     surname: "boltayev",
//     job: "student",
//     favoriteanimals:"dog",
//     live:"shaxrisabz",
//     age: n,
//     isMarried: true,
// }
// console.log(obj)
// console.log(obj.live)



// let arr = [5,"elbek","student", "Frontend","Tatu", true, { name: "Nurbek" }, ["red", "blue", 
// "white", "green", "surname"]]
// console.log(arr[4])
// console.log(arr[7][3])
// console.log(arr[6].name)
// console.log(arr[0])

// let prom =prompt("Son kiriting");
// let prom2 =prompt("keyingi sonni kiriting");
// console.log(Number(prom) % Number(prom2));
// console.log("my age :" + prom);



---------3 - lessonn--------


// //1-uy ishi
// // let age = 16    

// if (age > 16){
//     console.log("Talaba")
// }
// else if(age < 16){
//     console.log("Maktab o'quvchisi")
// }
// else{
//     console.log("Talaba pasport lgan")
// }



// //2-uy ishi

// let obj ={
//     yourname:prompt("Ismingizni kiriting"),
//     yoursurname:prompt("Familiyangizni kiriting"),
//     yourage:prompt("Yoshingizni kiriting")
// }
// console.log(obj);



// //qushimcha uyga vazifa

// let light = prompt("Rang kiriting");
// if (light === "red"){
//     console.log("yeloow")
// }else if(light === "green"){
//     console.log("red")
// }else if (light === "yellow"){
//     console.log("green")
// }else{
//     console.log("Unday rang mavjud emas")
// }



-----------4-lessonn-----

//----------KINOTEATR------------
// let age =prompt("yosh kiriting")
// let tikket=prompt("pilet pulini kiriting")
// switch(age ){
//     case "18":
//         break;
//     case "30":
//         alert("kinoga kirishingiz mumkin")
//         break;
//     default:
//         alert("Siz kinoga kirishiz mumkin emas")
// }




//--------JUFT SONLARNI CHIQARSIN-----------
// let number1 = 10;

// for(let i=0; i<number1; i+=2){
//     console.log(i);
// }




//----------TOQ SONLARNI CHIQARSIN------------
// let number2 = 20;

// for(let i=1; i<number2; i+=2){
//     console.log(i);
// }



//--------- HAFTA KUNLARI-----------
// let day = +prompt("hafta kunlari");
// switch(day){
//     case 1:
//         alert("Dushanba")
//         break;

//         case 2:
//         alert("seshanba")
//         break;

//         case 3:
//         alert("chorshanba")
//         break;

//         case 4:
//         alert("payshanba")
//         break;

//         case 5:
//         alert("juma")
//         break;

//         case 6:
//         alert("shanba")
//         break;

//         case 7:
//         alert("yakshanba")
//         break;


//     default:
//     alert("bunday hafta kuni yuq")
//     }



----------5 - lesson ---------

// // alert(false + true)
// let numberOfFilms =+prompt("qancha film kurgansiz?");
// let lastMovie = prompt("oxirgi kurgan filmlaringizni biri?");
// let ballOfMovie =+prompt("uni qancha baxolagan bularddingiz?");

// let personalMovieDB = {
// 	count: numberOfFilms,
//     movies:lastMovie,
//     actors:ballOfMovie,
//     genres:[],
//     private:false,
// }

// console.log(personalMovieDB);


----------6 -lessonn---------

// //homework
// let infos = {}
// for ( let i = 1; i < 4; i++ ){
//     let name = prompt("Ismingizni kiriting");
//     let surname = prompt("Familiyangizni kiriting");
//     let age = +prompt("yoshingizni kiriting");

//     function setinfo(name, surname, age){
       
//         // student1 = {
//         //     name:name,
//         //     surname:surname,
//         //     age:age
//         // }
//         return{
//             name, surname, age
//         }
//     }
// infos[ "student" + i] = setinfo(name, surname, age)
// }
// console.log(infos);



--------- 7- lessonn--------

// ------------Round---(eng yaqin butun qism)---------
// function round(a){
//     a = (parseInt(a * 10)) / 10;
//     b = (parseInt(a * 10) + 5) / 10;
//     if (a > b){
//         x = parseInt(a);
//     }
//     else {
//         x = parseInt(b);
//     }
//     return x
// }

// number = round(67.3);
// console.log("round = ", number);




// // -----------Floor----(eng kichik butun qism)------------
// function Floor(a){
//     x = parseInt(a);
//     return x
// }

// num = Floor(29.972);
// console.log("Floor = ", num);



// // --------------- Power ---(Daraja)---------------
// let Asos = 6;
// let daraja = 2;

// function Power(Asos, daraja) {
//     let Sum = 1;
//     for (let i = 0; i < daraja; i++) {
//         Sum *= Asos;
//     }
//     return Sum;
// }

// Summa = Power(Asos, daraja);
// console.log(`${Asos}^${daraja} =`, Summa);



// // -------------ceil----(eng katta butun qism)----------
// function d(a){
//     a = (parseInt(a * 10) + 5) / 10;
//     b = (parseInt(a * 10) + 5) / 10;
//     if (a > b){
//         x = parseInt(a);
//     }
//     else {
//         x = parseInt(b);
//     }
//     return x
// }

// number = d(67.3);
// console.log("d = ", number);





// // ---------------Square--------------
// function Square(x, n) {
//     if (n == 1){
//         return x;
//     }
//     else {
//     for (let i = 1; i < x / n; i ++) {
//         Sum = 1;
//         for (let j = 0; j < n; j ++){
//             Sum *= i;
//         }
//         if (Sum == x){
//             return i;
//             console.log(i);
//         }
//     }
// }
// }

// sqrt = Square(8,3);
// console.log("Sqrt = ", sqrt);



--------8 - lessonn-------


//indexof, includes, startsWith, endsWith, slice, substring, substr

//------indexof--------
// function indexof(str, searchstring){
//   let x = NaN;
//   for (let i = 0; i<str.length; i++){
//     if (str[i] == searchstring){
//       x = i;
//       break;
      
//   }
// }
// return x;
// }
// console.log(indexof("salom alaykum", "y"));



// -------====endswith
// function endswith(str, endstr){
//   return (str[str.length -1] == endstr);
// }
// console.log(endswith("kamina", "a"))




//indexof, includes, startsWith, endsWith, slice, substring, substr



// ---------===startswith
// function startswith(str, startstr){
//   return (str[0] == startstr);
// }
// console.log(startswith("kitob", "k"))



// -------=====substring------qirqib oladi
// function substring (str, start, end){
//   result = ""
//   for(let i = start; i < end; i++){
//     result += str[i];
//   }
//   return result;
// }

// console.log("substring : ", substring("assalom alaykum", 2, 4));


//----===
// let arry = [1, 2, 4, 3, 7, 8, 5, 3, 56]

// function arr (arry){
//   for (let i = 0; i < arry.length; i++ )
//     if(arr[i] % 2 === 0){

//     }
// }


// -------=====substr------qirqib oladi
// function substr(str, start, end){
//   result = ""
//   for(let i = str.length + start; i < str.length + start + end; i++){
//     result += str[i];
//   }
//   return result;
// }

// console.log("substr : ", substr("assalom alaykum", -3, 3));



// let arr = [1, 3, 4 , 5 , 6, 8, 9, 10,]
// let newarr  = arr.splice(1, 3)

// console.log("newarr:", newarr);
// console.log(("old arr:", arr));




//--------push-------
// let arry = [1, 2, 4, 3, 7, 8, 5, 3, 56]

// function Push(lis, elem){
//   lis[lis.length] = elem;
//   return lis;
// }

// console.log(Push(lis = arry, elem = 67));



// //------pop----===
// let arr = [1, 2, 4, 3, 7, 8, 5, 3, 56]

// function Pop(lis ){
// arr.splice(arr.length - 1)
//   return lis;
// }

// console.log(Pop(lis = arr));
