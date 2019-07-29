const date = new Date();
const day = date.getDate();
const month = date.getMonth();
const year = date.getFullYear();
const hour = date.getHours();
const minute = date.getMinutes();

const fullDate = `${day}/${month}/${year}`;
const fullTime = `${hour}:${minute}`;

document.getElementById('Page2').innerHTML = `${fullTime} ${fullDate}`;
document.getElementById('Page1').innerHTML = `${fullDate} ${fullTime}`;
