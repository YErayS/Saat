var hesap = 6;
var sa = document.querySelector("#sa");
var dk = document.querySelector("#dk");
var sn = document.querySelector("#sn");

setInterval(() => {
    var day = new Date();
    var saat = day.getHours() * 30;
    var dakika = day.getMinutes() * hesap;
    var saniye = day.getSeconds() * hesap;

    sa.style.transform = `rotateZ(${(saat) + (dakika/12)}deg)`;
    dk.style.transform = `rotateZ(${dakika}deg)`;
    sn.style.transform = `rotateZ(${saniye}deg)`;
})