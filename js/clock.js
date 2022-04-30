let user = prompt("Adınız");
document.querySelector("#myName").textContent=user;

 
function showTime() {
  const date = new Date(); 
  let saat = date.toLocaleTimeString();
  let gun = date.toLocaleString('tr-TR', {  weekday: 'long' });
  document.getElementById("myClock").innerHTML =` ${saat} ${gun}`;
  
} setInterval(showTime, 1000);
