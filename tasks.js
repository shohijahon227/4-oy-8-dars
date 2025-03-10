// // Telefon raqamini aniqlash uchun regex
// const phoneRegex = /\(\d{3}\)\-\d{3}\-\d{4}/g;            
// // bunda telefon raqam boshida 3 ta ortada 3 ta va ohirida tortta raqam kelishi tekshirilyapdi

// // Misol uchun matn :
// const testNumber = "(998)-123-4567";

// // Mos keluvchi raqamlarni topish
// const matches = testNumber.match(phoneRegex);

// // Natijani konsolga chiqarish
// console.log(matches);


// // Email adresini aniqlash uchun regex
// // Faqat @gmail.com formatidagi email uchun

// const emailRegex = /@gmail.com/g;

// // tekshirish uchun misol
// const testText = "ulugbek@gmail.com";

// // mos keluvchi emailni topish
// const emailMatches = testEmail.match(emailRegex);

// // natijani konsolga chiqarish
// console.log(emailMatches);

// //Matn ichidagi sozni aniqlash uchun regex
// const text = "Mening ismim user_123";

// // regex - sozni tekshirish sharti
// const textMatches = /\b[a-zA-Z0-9_]+\b/;

// // sozni tekshirish
// const match = text.match(textMatches);

// // natijani konsolga chiqarish
// console.log(textMatches);

// // Matn
// const textUrl = "Mening saytlarim https://example.com va http://test.com";

// // URL ni topish uchun regex
// const pattern = /https?:\/\/[^\s]+/g;

// // Qidirish
// const urlMatches = text.match(pattern);

// if (matches) {
//     console.log("Topildi:", urlMatches); 
// } else {
//     console.log("Hech narsa topilmadi");
// }

// ========================================================================================

// Telefon raqamini topish

// Telefon raqamini elon qilib olamiz :
let Number = +998 (91)-123-4567;

// Telefon raqamini tekshiramiz va konsolga chiqaramiz :
console.log(Number.match(/\+\d{3}\s\d{2}\)\-\d{3}\-\d{4}/g));

// 2 - Masala Email adresini topish.

// Emailni elon qilamiz :
let email = "ulugbek@gmail.com";

// Emaili tekshiramiz va konsolga chiqaramiz :
console.log(email.match(/+\@gmail\.com/g));

// 3 - Masala Foydalanuvchi ismiga moslash

// Foydalanuvchi ismini elon qilamiz :
let userName = "user_123";

// Foydalanuvchi ismini tekshiramiz va konsolga chiqaramiz :
console.log(userName.match(/\b[a-zA-Z0-9_]+\b/g));

// 4 - Masala URL ni topish

// URL manzilini elon qilamiz :
let url = "https://example.com va http://test.com";

// URL manzilini tekshiramiz va konsolga chiqaramiz :
console.log(url.match(/https?:\/\/[^\s]+/g));

// 5 - Masala Ismlar orasidagi bo'sh joylarni olib tashlash

// Ismni elon qilamiz :
let name = "John    Smith";

// Ismni tekshiramiz va konsolga chiqaramiz :
console.log(name.replace(/\s/g, ""));   

// 6 - Masala Faqat katta harflarni topish

// Matnni elon qilamiz :
let text = "Salom, MENING ismim Ulug'bek";

// Matnni tekshiramiz va konsolga chiqaramiz :
console.log(text.match(/[A-Z]/g));

// 7 - Masala Validatsiya qilingan kredit karta raqamlarini topish

// Kredit karta raqamini elon qilamiz :
let cardNumber = XXXXXXXXXXXXXXXX;

// Kredit karta raqamini tekshiramiz va konsolga chiqaramiz :
console.log(cardNumber.match(/\d{4}\s\d{4}\s\d{4}\s\d{4}/g));