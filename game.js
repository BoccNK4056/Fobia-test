document.addEventListener("DOMContentLoaded", function () {

var scorer = 0;
var someone = false;
var klikatMojno = true;
var kolvoFailov = 1;
var eventSelected;
var hide = false;
var hideTimer = null;
var coins = 0;
var badGui = null;
var coffee = true;
var lightScore = 0;
var light = true;


const scorerFail = document.getElementById("scorerFail");
const monetki = document.getElementById("monetki");
const welcome = document.getElementById("welcome");
const gg = document.getElementById("gg");
const scoreTitle = document.getElementById("scorerTitle");
const computer = document.getElementById("computer");
const message = document.getElementById("message");
const btn = document.getElementById("btn");
const closet = document.getElementById("closet");
const mbtn = document.getElementById("mbtn");
const rightBtn1 = document.getElementById("rightBtn1");
const leftBtn1 = document.getElementById("leftBtn1");
const room1 = document.getElementById("room1");
const rightBtn2 = document.getElementById("rightBtn2");
const leftBtn2 = document.getElementById("leftBtn2");
const room2 = document.getElementById("room2");
const rightBtn3 = document.getElementById("rightBtn3");
const leftBtn3 = document.getElementById("leftBtn3");
const room3 = document.getElementById("room3");
const badGuiWorld = document.getElementById("badGuiWorld");
const lobby = document.getElementById("lobby");
const capTxt = document.getElementById("capTxt");
const cap = document.getElementById("cap");
const fixedPanel = document.getElementById("fixedPanel");
const inventory = document.getElementById("inventory");
const lightSc = document.getElementById("lightSc");
const commandInput = document.getElementById("commandInput");
// УДАЛЕНА сломанная строка: const flicker = 

// ДОБАВЛЕНО (обязательно, иначе mHide не определён):
const mHide = document.getElementById("mHide");


function start() {
  lobby.style.display = "none";
  room1.style.display = "block";
  badGuiIncome();
}

function openInventory() {
    fixedPanel.style.display = "none";
    inventory.style.display = "block";
}


/*
1 ничего
2 сломанная загрузка (004)
3 баг файлов
4 баг "добро пожаловать"
5 баг "хорошей игры"
6 баг кнопки
7 монстр 001
*/
function selectEvent() {
   if(scorer == 100) {
      window.location.href = "room100.html";
   }else if(scorer > 50) {
      var events = [1, 1, 1, 1, 1, 2, 3, 4, 5, 6, 7]
      var eventSelecting = Math.floor(Math.random() * events.length);
      eventSelected = events[eventSelecting];
   }else if(scorer == 50) {
      window.location.href = "room50.html";
   }else if(scorer > 13) {
      var events = [1, 1, 1, 1, 1, 2, 7]
      var eventSelecting = Math.floor(Math.random() * events.length);
      eventSelected = events[eventSelecting];
   }else if(scorer == 13){
      eventSelected = 7;
   }else {
      eventSelected = 1;
   }
}

function badGuiIncome() {
    badGui = setTimeout(function() {
        btn.textContent = "=)";
        badGui = setTimeout(function() {
          room1.style.display = "none";
          room2.style.display = "none";
          room3.style.display = "none";
          win1.style.display = "none";
          win2.style.display = "none";
          badGuiWorld.style.display = "block";
        }, 3000)
    }, 60000)
}

function lightOn() {
    if(lightScore == 20) {
        undimScreen();
        lightScore = 0;
        lightSc.textContent = lightScore;
    }else {
        lightScore += 1;
        lightSc.textContent = lightScore;
    }
}


function checkNuseEvent() {
    if(eventSelected == 1) {        
        message.textContent = "Файл загружен"
        setTimeout(noMessage, 3000);
    }
    if(eventSelected == 2) {
        dimScreen();
        message.textContent = "Ф4йл 34гружен"
        setTimeout(noMessage, 1000);
    }
    if(eventSelected == 3) {
        alert("3");
    }
    if(eventSelected == 4) {
        alert("4");
    }
    if(eventSelected == 5) {
        alert("5");
    }
    if(eventSelected == 6) {
        alert("6");
    }
    if (eventSelected == 7) {
    const flicker = document.getElementById("flicker-overlay");
    
    // Начинаем мерцание
    let flickerCount = 0;
    const maxFlickers = 6; // сколько раз моргнёт
    let flickerActive = true;

    function doFlicker() {
        if (!flickerActive) return;
        flicker.style.opacity = flickerCount % 2 === 0 ? "0.8" : "0";
        flickerCount++;
        if (flickerCount < maxFlickers * 2) {
            setTimeout(doFlicker, 150); // каждые 150ms — переключение
        } else {
            // Мерцание закончилось — проверяем, где игрок
            flicker.style.opacity = "0";
            if (hide) {
                // Игрок в шкафу — монстр уходит
                message.textContent = "Тишина... Монстр ушёл.";
                setTimeout(noMessage, 2000);
            } else {
                // Игрок на виду — смерть
                window.location.href = "dead2.html";
            }
        }
    }

    // Запуск мерцания
    if(light = true) {
    message.textContent = "Свет начал моргать...";
    doFlicker();
    }

    // Если игрок выйдет из шкафа во время мерцания — монстр его заметит
    // (ничего делать не нужно, флаг `hide` и так проверяется в конце)
}
    }

function loadFail() {
   if (klikatMojno == true) {
      if (hide == true) {
          alert("Сначала выйдите из шкафа!");
      } else {
          klikatMojno = false;

          // Показываем полосу загрузки
          const barContainer = document.getElementById("loadingBarContainer");
          const bar = document.getElementById("loadingBar");
          barContainer.style.display = "block";
          bar.style.animation = "none";
          void bar.offsetWidth;
          bar.style.animation = "load 3s linear forwards";
          setTimeout(() => {
              scorer += kolvoFailov;
              scorerFail.textContent = scorer;
              selectEvent();
              checkNuseEvent();
              barContainer.style.display = "none";
              razreshit();
          }, 1000); // ← ИСПРАВЛЕНО: было 1000, стало 3000
      }
   }
}

function razreshit() {
    klikatMojno = true;
}

function noMessage() {
    message.textContent = "";
}

function outCloset() {
    if (hide == false) {
        alert("Вы не в шкафу!");
        
    } else {
        const outClosetBtn = document.getElementById("outClosetBtn");
        outClosetBtn.style.display = "none";
        hide = false;
        mHide.textContent = "";
        if (hideTimer !== null) {
            clearTimeout(hideTimer);
            hideTimer = null;
        }
    }
}

function hiding() {
    if (hide == true) {
        alert("Вы и так в шкафу!");
    } else {
        const outClosetBtn = document.getElementById("outClosetBtn");
        outClosetBtn.style.display = "block";
        void outClosetBtn.offsetWidth;
        hide = true;
        mHide.textContent = "Вы в шкафу";
        hideTimer = setTimeout(function() {
            window.location.href = "dead1.html";
        }, 10000);
    }
}

function drink() {
    if(coffee == true) {
        if (badGui !== null) {
            clearTimeout(badGui);
            badGui = null;
            badGuiIncome();
            btn.textContent = "Загрузите файл!";
            coffee = false;
            cap.textContent = "Пустая чашка";
            }
        }else {
            capTxt.textContent = "Приготовьте кофе!";
            setTimeout(noCapTxt, 3000);
        }
}

function noCapTxt() {
    capTxt.textContent = "";
}

function makeCoffee() {
        if(coffee == false) {
        capMakeTxt.textContent = "Кофе готовится..."
        setTimeout(function() {
        capMakeTxt.textContent = "";
        coffee = true;
        cap.textContent = "Чашка кофе";
    }, 5000);
    }else {
        capMakeTxt.textContent = "У тебя уже есть кофе!"
        setTimeout(function() {
            capMakeTxt.textContent = "";
        }, 2000)
    }
}

function dimScreen() {
    document.getElementById("dim-overlay").style.opacity = "0.9";   document.getElementById("dim-overlay").style.pointerEvents = "none";
    if(lightScore !== 0) {
        lightScore = 0;
        lightSc.textContent = lightScore;
    }
    light = false;
}

function undimScreen() {
    document.getElementById("dim-overlay").style.opacity = "0";  document.getElementById("dim-overlay").style.pointerEvents = "none";
    light = true;
}

function hideInventory() {
    fixedPanel.style.display = "none";
}

function checkCommand() {
    const command = commandInput.value.trim();
    
    if(!command) return;
    if(command === "/dimScreen") {
        dimScreen();
        console.log("Успешно!");
    }else if(command === "/hideInventory") {
        hideInventory();
        console.log("Успешно!");
    }else if(command === "/hiding") {
        hiding();
        console.log("Успешно!");
    }else if(command === "/drink") {
        drink();
        console.log("Успешно!");
    }else if(command === "/start") {
        start();
        console.log("Успешно!");
    }else if(command === "/outCloset") {
        outCloset();
        console.log("Успешно!");
    }else if(command === "/makeCoffee") {
        makeCoffee();
        console.log("Успешно!");
    }else {
        alert("Command not found!");
        console.error("Command not found!")
    }
    commandInput.value = "";
}

function right1() {
    room1.style.display = "none";
    room3.style.display = "block";
}

function left2() {
    room1.style.display = "none";
    room2.style.display = "block";
}

function right3() {
    room2.style.display = "none";
    room1.style.display = "block";
}

function left4() {
    room2.style.display = "none";
    win1.style.display = "block";
}

function right5() {
    room3.style.display = "none";
    win2.style.display = "block";
}

function left6() {
    room3.style.display = "none";
    room1.style.display = "block";
}


// Делаем функции доступными из HTML (onclick)
window.start = start;
window.loadFail = loadFail;
window.outCloset = outCloset;
window.hiding = hiding;
window.drink = drink;
window.makeCoffee = makeCoffee;
window.right1 = right1;
window.left2 = left2;
window.right3 = right3;
window.left4 = left4;
window.right5 = right5;
window.left6 = left6;
window.openInventory = openInventory;
window.lightOn = lightOn;
window.checkCommand = checkCommand;
});


