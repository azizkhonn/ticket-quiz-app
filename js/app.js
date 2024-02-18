const isUSD = 500;
const isHotel = 250;
const isEuro = 120;

const courseDollar = 11000.34;
const courseEuro = 12354.03;

const isMoneyPrompt = prompt("Alisher, o'zingizda qancha mablag' bor ekanligini kiriting (so'm):");

const isMoney = parseFloat(isMoneyPrompt);

const isTicketSum = isUSD * courseDollar;
const isHotelSum = isHotel * courseDollar;
const isMuseumSum = isEuro * courseEuro;

const isTotalCost = isTicketSum + isHotelSum + isMuseumSum;

if (isMoney >= isTotalCost) {
    console.log("Oq yo'l, Alisher aka");
} else {
    console.log("Alisher aka, ozgina sabr qilish kerak bo'lar ekan ((:");
}
